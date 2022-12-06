import { ThemeProvider } from "@mui/material/styles";
import { theme } from "./theme/theme";
import { Box, Container, Typography } from "@mui/material";
import React from "react";
import "./App.scss";
import Filters from "./components/filters/filters";

function App() {
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
