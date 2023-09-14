import React from "react";
import Header from "./components/Header";
import Main from "./components/Main";
import Footer from "./components/Footer";
import { styled } from "@mui/material/styles";
import { useQuery } from "react-query";
import axios from "axios";
import { createTheme, ThemeProvider } from "@mui/material";

export async function fetchCoins<T>(): Promise<T> {
  const { data } = await axios.get(
    "https://newsdata.io/api/1/news?apikey=pub_293764b88d5708d21149137e81aa6a2714676&language=fr"
  );

  return data.results;
}

const theme = createTheme({
  palette: {
    primary: {
      main: "#82A185",
    },
    secondary: {
      main: "#B8D192",
    },
  },
});

const AppWrapper = styled("div")(() => ({
  margin: "-8px",
}));

function App() {
  const data = useQuery("language", fetchCoins);

  console.log(data);
  return (
    <ThemeProvider theme={theme}>
      <AppWrapper>
        <Header />
        <Main />
        <Footer />
      </AppWrapper>
    </ThemeProvider>
  );
}

export default App;
