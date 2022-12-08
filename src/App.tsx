import { ThemeProvider } from "@mui/material/styles";
import { theme } from "./theme/theme";
import {
  Box,
  Container,
  Typography,
  SelectChangeEvent,
  Pagination,
  Stack,
} from "@mui/material";
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
import CircularProgress from "@mui/material/CircularProgress";

function App() {
  const [data, setData] = useState<ITableHeader[]>([]);
  const [currentPageRequest, setCurrentPageRequest] = useState<number>(1);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [rows, setRows] = useState<ITableHeader[]>([]);
  const [selected, setSelected] = useState<string[]>([]);
  const [searchWords, setSearchWords] = useState<string>("");
  const [selectSpecies, setSelectSpecies] = useState<string>("");
  const [totalPages, setTotalPages] = useState<number>();

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

  const fnSetCurrentPageRequest = (
    page: number,
    diviterNumber: number
  ): number => {
    const actualPage = Math.ceil(page / diviterNumber);
    return actualPage;
  };

  const handlePage = (page: number): void => {
    setCurrentPage(page);

    const dividerItems = 20 / 5;
    const pageFrom = currentPageRequest * dividerItems - dividerItems + 1;
    const pageTo = currentPageRequest * dividerItems;

    if (pageFrom <= page && pageTo >= page) {
      return;
    } else if (pageTo < page) {
      const newPage = fnSetCurrentPageRequest(page, dividerItems);
      setCurrentPageRequest(newPage);
    } else {
      const newPage = fnSetCurrentPageRequest(page, dividerItems);
      setCurrentPageRequest(newPage);
    }
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
    fetchCharacters(currentPageRequest, searchWords, selectSpecies)
      .then((response) => {
        console.log(response);
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
        setTotalPages(Math.ceil(response.info.count / 5));
      })
      .catch((error) => console.log(error));
    setIsLoading(() => false);
  }, [currentPageRequest, searchWords, selectSpecies]);

  useEffect(() => {
    const dividerItems = 20 / 5;
    const pageFrom = currentPageRequest * dividerItems - dividerItems + 1;
    // const pageTo = currentPageRequest * dividerItems;
    const currentPageData = currentPage - pageFrom + 1;
    const indexOfLastProduct = currentPageData * 5;
    const indexOfFirstProduct = indexOfLastProduct - 5;
    const returnProducts = rows.slice(indexOfFirstProduct, indexOfLastProduct);
    setData(returnProducts);
  }, [rows, currentPage]);

  if (isLoading)
    return (
      <Box sx={{ display: "flex" }}>
        <CircularProgress />
      </Box>
    );

  return (
    <ThemeProvider theme={theme}>
      <Container maxWidth="lg" sx={{
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center'
      }}>
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
          <TableCharacters rows={data} selected={selected} />
        </Box>
        <Stack spacing={2} my={3}>
          <Pagination
            count={totalPages}
            variant="outlined"
            shape="rounded"
            sx={{
              display: "flex",
              justifyContent: "flex-end",
            }}
            onChange={(e, page) => handlePage(page)}
          />
        </Stack>
      </Container>
    </ThemeProvider>
  );
}

export default App;
