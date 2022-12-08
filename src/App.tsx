import { ThemeProvider } from "@mui/material/styles";
import { theme } from "./theme/theme";
import { Box, Container, Typography, SelectChangeEvent } from "@mui/material";
import React, { useEffect, useState } from "react";
import "./App.scss";
import Filters from "./components/filters/filters";
import {
  Gender,
  ICharacter,
  IconSVG,
  IPagination,
  IStatusIcons,
  ITableHeader,
  IUrl,
} from "./model.d";
import { API_URL } from "./shared/link";
import TableCharacters from "./components/table/table-characters";
import CircularProgress from '@mui/material/CircularProgress';

function App() {
  const [data, setData] = useState<Record<string, any>>();
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [rows, setRows] = useState<ITableHeader[]>([]);
  const [selected, setSelected] = useState<string[]>([]);
  const [searchWords, setSearchWords] = useState<string>("");
  const [selectSpecies, setSelectSpecies] = useState<string>("");

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

  const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchWords(event.target.value);
  };

  const handleSelectSpecies = (event: SelectChangeEvent) => {
    setSelectSpecies(event.target.value as string);
  };

  const createData = (
    name: string,
    species: string,
    avatar: string,
    origin: IUrl,
    gender: Gender,
    status: IStatusIcons
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
    fetchCharacters(currentPage, searchWords, selectSpecies)
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
              { name: item.status, icon: IconSVG[item.status] }
            )
          );
        });
        setRows(returnRows);
      })
      .catch((error) => console.log(error));
    setIsLoading(() => false);
  }, [currentPage, searchWords, selectSpecies]);

  useEffect(() => {
    // console.log(rows);
  }, [searchWords]);

  if (isLoading)
    return (
      <Box sx={{ display: "flex" }}>
        <CircularProgress />
      </Box>
    );

  return (
    <ThemeProvider theme={theme}>
      <Container maxWidth="lg">
        <Typography variant="h5" component="h2" fontWeight="700">
          Characters
        </Typography>
        <Filters
          handleSearch={handleSearch}
          selectSpecies={selectSpecies}
          handleSelectSpecies={handleSelectSpecies}
          customClass={{ my: 3 }}
        />

        <Box sx={{ width: "100%" }}>
          <TableCharacters rows={rows} selected={selected} />
        </Box>
      </Container>
    </ThemeProvider>
  );
}

export default App;
