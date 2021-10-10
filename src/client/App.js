import React from "react";
import { BrowserRouter } from "react-router-dom";
import AppRouter from "./AppRouter";
import { ThemeProvider, createTheme } from "@mui/material/styles";

const theme = createTheme({
  typography: {
    useNextVariants: true,
  },
  palette: {
    primary: {
        light: '#4169e1',
        main: '#3454b4',
        dark : '#273f87',
        contrastText: '#fff'
    },
    secondary: {
        light: '#e33371',
        main: '#dc004e',
        dark: '#9a0036',
        contrastText: '#fff'
    },
    openTitle: '#3f4771',
    type: 'light'
}
});

function App() {
  return (
    <React.Fragment>
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <AppRouter />
      </BrowserRouter>
      </ThemeProvider>
    </React.Fragment>
  );
}

export default App;
