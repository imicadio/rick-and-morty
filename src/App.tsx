import { ThemeProvider } from "@mui/material/styles";
import { theme } from "./theme/theme";
import { Box, Container, Typography } from "@mui/material";
import React, { useEffect } from "react";
import "./App.scss";
import Filters from "./components/filters/filters";
import { ICharacter, IPagination } from "./model";
import { API_URL } from "./shared/link";

function App() {
  const fetchCharacters = (
    page: number | '' = '',
    name: string = "",
    species: string = ""
  ): Promise<{ info: ICharacter[]; pagination: IPagination }> => {
    return fetch(`${API_URL}`)
      .then((response) => {
        if (!response.ok) {
          throw new Error(response.statusText);
        }
        return response.json();
      })
      .then((data) => {
        console.log(data)
        return data.results;
      });
  };

  useEffect(() => {
    fetchCharacters();
  }, []);

  return (
    <ThemeProvider theme={theme}>
      <Container maxWidth="lg">
        <Typography variant="h5" component="h2" fontWeight="700">
          Characters
        </Typography>
        <Filters customClass={{ mt: 4 }} />
      </Container>
    </ThemeProvider>
  );
}

export default App;
