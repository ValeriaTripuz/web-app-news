import React from "react";
import { styled } from "@mui/material/styles";
import ArticlePreview from "./ArticlePreview";
import NewsSuggestion from "./NewsSuggestion";

const MainWrapper = styled("div")(() => ({
  position: "relative",
  height: "100%",
  textAlign: "center",
  margin: "0 auto",
  alignItems: "center",
}));

const NewsFlex = styled("div")(() => ({
  display: "flex",
  flexDirection: "row",
  flexWrap: "wrap",
  justifyContent: "space-around",
  margin: "2rem auto",
}));

const TitleNewSuggestions = styled("h1")(() => ({
  padding: "1rem 0",
}));

function Main() {
  return (
    <>
      <MainWrapper>
        <ArticlePreview title={"Title 1"} image={"Image 1"}></ArticlePreview>
        <ArticlePreview title={"Title 2"} image={"Image 2"}></ArticlePreview>
        <ArticlePreview title={"Title 3"} image={"Image 3"}></ArticlePreview>

        <TitleNewSuggestions>
          <b>NEW</b>
        </TitleNewSuggestions>
        <NewsFlex>
          <NewsSuggestion image={"image 1"} />
          <NewsSuggestion image={"image 2"} />
          <NewsSuggestion image={"image 3"} />
        </NewsFlex>
      </MainWrapper>
    </>
  );
}

export default Main;
