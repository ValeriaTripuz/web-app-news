import React, { useEffect, useState } from "react";
import Header from "./components/Header";
import Main from "./components/Main";
import Footer from "./components/Footer";
import { styled } from "@mui/material/styles";
import { useQuery } from "react-query";
import axios from "axios";
import { ThemeProvider } from "@mui/material";
import theme from "./config/theme";
import { NewsListType, NewsItemType } from "./types/TypesForNewsApiData";

const AppWrapper = styled("div")(() => ({
  margin: "-8px",
}));

async function fetchDataNews(): Promise<NewsItemType[]> {
  const res = await axios.get(
    "https://newsdata.io/api/1/news?apikey=pub_293764b88d5708d21149137e81aa6a2714676&image=1"
  );
  return res.data.results;
}

function App() {
  const { isLoading, error, data } = useQuery({
    queryFn: fetchDataNews,
  });

  if (isLoading) return <p>Loading...</p>;

  if (error) return <p>Error</p>;

  return (
    <ThemeProvider theme={theme}>
      <AppWrapper>
        <Header />

        {data && <Main newsData={data} />}

        <Footer />
      </AppWrapper>
    </ThemeProvider>
  );
}

export default App;
