import React from "react";
import { styled } from "@mui/material/styles";
import ArticlePreview from "./ArticlePreview";
import NewsSuggestion from "./NewsSuggestion";
import { NewsItemType } from "../types/TypesForNewsData";

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

interface MainProps {
  newsData: NewsItemType[];
}

function Main({ newsData }: MainProps) {

  const articlePreviewData = newsData.slice(0, 5);


  return (
    <>
      <MainWrapper>
        {articlePreviewData &&
          articlePreviewData.map((a) => (
            <ArticlePreview
              key={a.article_id}
              title={a.title}
              image={a.image_url}
              content={a.description}
            ></ArticlePreview>
          ))}

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
