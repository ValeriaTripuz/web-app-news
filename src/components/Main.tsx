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

export interface ArticlePreviewProps {
  dataAPI: any[];
}

function Main({ dataAPI }: ArticlePreviewProps) {
  return (
    <>
      <MainWrapper>
        <ArticlePreview
          title={dataAPI[30].title}
          image={dataAPI[30].image_url}
          content={dataAPI[30].content}
        ></ArticlePreview>
        <ArticlePreview
          title={dataAPI[23].title}
          image={dataAPI[23].image_url}
          content={dataAPI[23].content}
        ></ArticlePreview>
        <ArticlePreview
          title={dataAPI[12].title}
          image={dataAPI[12].image_url}
          content={dataAPI[12].content}
        ></ArticlePreview>
        <ArticlePreview
          title={dataAPI[46].title}
          image={dataAPI[46].image_url}
          content={dataAPI[46].content}
        ></ArticlePreview>
        <ArticlePreview
          title={dataAPI[38].title}
          image={dataAPI[38].image_url}
          content={dataAPI[38].content}
        ></ArticlePreview>

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
