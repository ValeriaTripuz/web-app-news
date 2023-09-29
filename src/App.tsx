import React from "react";
import Header from "./components/Header";
import Main from "./components/Main";
import Footer from "./components/Footer";
import { styled } from "@mui/material/styles";
import { useQuery } from "react-query";
import axios from "axios";
import { ThemeProvider } from "@mui/material";
import theme from "./config/theme";
import DataTypes from "./components/DataTypes";

const AppWrapper = styled("div")(() => ({
  margin: "-8px",
}));

async function fetchTypes(): Promise<DataTypes> {
  const res = await axios.get(
    "https://newsdata.io/api/1/news?apikey=pub_293764b88d5708d21149137e81aa6a2714676"
  );
  return res.data.results;
}

function App() {
  const { data } = useQuery<any>({
    queryFn: fetchTypes,
    staleTime: 0,
  });

  // For future request loading and error handling
  // if (isLoading) return "Loading...";
  // if (error) return "An error has occurred: " + error.message;

  return (
    <ThemeProvider theme={theme}>
      <AppWrapper>
        <Header />
        {data && <Main dataAPI={data} />}
        <Footer />
      </AppWrapper>
    </ThemeProvider>
  );
}

export default App;
