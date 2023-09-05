import React from "react";
import "./App.css";
import Header from "./components/Header";
import Main from "./components/Main";
import Footer from "./components/Footer";
import { createTheme, ThemeProvider } from "@mui/material";
import { useQuery } from "react-query";
import axios from "axios";

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

// export async function fetchCoins<T>(): Promise<T> {
//   const { data } = await axios.get(
//     `http://api.mediastack.com/v1/news?access_key=8c824115399002747b3a044ccc2d086e`
//   );
//   return data;
// }

function App() {
  // const data = useQuery("answer", fetchCoins);

  // console.log(data);
  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        <Header />
        <Main />
        <Footer />
      </div>
    </ThemeProvider>
  );
}

export default App;
