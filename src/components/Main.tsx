import React from "react";
import { styled, alpha } from "@mui/material/styles";
import ArticlePreview from "./ArticlePreview";

const MainWrapper = styled("div")(() => ({
  position: "relative",
  height: "100%",
}));

function Main() {
  return (
    <>
      <MainWrapper>
        <ArticlePreview title={"Title 1"} image={"Image 1"}></ArticlePreview>
        <ArticlePreview title={"Title 2"} image={"Image 2"}></ArticlePreview>
        <ArticlePreview title={"Title 3"} image={"Image 3"}></ArticlePreview>
      </MainWrapper>
    </>
  );
}

export default Main;
