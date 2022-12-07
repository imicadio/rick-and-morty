import { ThemeProvider } from "@mui/material/styles";
import { theme } from "./theme/theme";
import {
  Box,
  Container,
  Typography,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TablePagination,
  Checkbox,
  TableRow,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import "./App.scss";
import Filters from "./components/filters/filters";
import {
  Gender,
  ICharacter,
  IPagination,
  IStatus,
  ITableHeader,
  IUrl,
} from "./model";
import { API_URL } from "./shared/link";
import TableCharacters from "./components/table/table-characters";

function App() {
  const [data, setData] = useState<Record<string, any>>();
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [rows, setRows] = useState<ITableHeader[]>([]);
  const [selected, setSelected] = useState<string[]>([]);

  const fetchCharacters = (
    page: number,
    name: string = "",
    species: string = ""
  ): Promise<{ info: IPagination; results: ICharacter[] }> => {
    return fetch(`${API_URL}?page=${page}&name=${name}&species=${species}`)
      .then((response) => {
        if (!response.ok) {
          throw new Error(response.statusText);
        }
        return response.json();
      })
      .then((data) => {
        return data;
      });
  };

  const createData = (
    name: string,
    species: string,
    avatar: string,
    origin: IUrl,
    gender: Gender,
    status: IStatus
  ): ITableHeader => {
    return {
      name,
      species,
      avatar,
      origin,
      gender,
      status,
    };
  };

  useEffect(() => {
    setIsLoading(() => true);
    fetchCharacters(currentPage)
      .then((response) => {
        const returnRows: ITableHeader[] = [];
        response.results.map((item: ICharacter) => {
          return returnRows.push(
            createData(
              item.name,
              item.species,
              item.image,
              item.origin,
              item.gender,
              item.status
            )
          );
        });
        setRows(returnRows);
      })
      .catch((error) => console.log(error));
    setIsLoading(() => false);
  }, [currentPage]);

  useEffect(() => {
    console.log(rows);
  }, [rows]);

  return (
    <ThemeProvider theme={theme}>
      <Container maxWidth="lg">
        <Typography variant="h5" component="h2" fontWeight="700">
          Characters
        </Typography>
        <Filters customClass={{ my: 3 }} />

        <Box sx={{ width: "100%" }}>
          <TableCharacters rows={rows} selected={selected} />
        </Box>
      </Container>
    </ThemeProvider>
  );
}

export default App;
