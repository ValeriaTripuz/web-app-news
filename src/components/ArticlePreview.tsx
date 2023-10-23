import React from "react";
import { styled, alpha } from "@mui/material/styles";
import { Skeleton, Button } from "@mui/material";

const ArticlePreviewWrapper = styled("div")(() => ({
  display: "flex",
  flexDirection: "row",
  justifyContent: "space-around",
  margin: "5rem auto",
  "@media (max-width: 800px)": {
    display: "flex",
    flexDirection: "column",
  },
}));

const ArticlePreviewElements = styled("div")(() => ({
  padding: "0 3rem",
}));

const ContentWrapper = styled("div")(() => ({
  width: "90%",
  textAlign: "left",
  "@media (max-width: 1200px)": { fotnSize: "10px", width: "100%" },
  "@media (max-width: 800px)": { fotnSize: "7px" },
}));

const ArticlePreviewButton = styled(Button)(({ theme }) => ({
  width: "20vh",
  marginTop: "1rem",
  background: alpha(theme.palette.primary.light, 0.5),
  "&:hover": {
    color: theme.palette.common.white,
    background: theme.palette.primary.main,
  },
  "@media (max-width: 1200px)": { width: "12vw" },
  "@media (max-width: 800px)": {
    width: "100%",
    padding: "0.4rem 4rem",
    fontSize: "1rem",
  },
}));

const ImageSkeleton = styled(Skeleton)(() => ({
  height: "30vh",
}));

const ArticleImage = styled("img")(() => ({
  width: "39vh",
  height: "auto",
  "@media (max-width: 1200px)": {
    width: "37vh",
  },
}));

export interface ArticlePreviewPropsInterface {
  title: string;
  image: string;
  content: string;
}

function ArticlePreview({
  title,
  image,
  content,
}: ArticlePreviewPropsInterface) {
  return (
    <ArticlePreviewWrapper>
      <ArticlePreviewElements>
        {image ? (
          <ArticleImage src={image} alt="element" />
        ) : (
          <ImageSkeleton variant="rounded" />
        )}
      </ArticlePreviewElements>

      <ArticlePreviewElements>
        <ContentWrapper>
          <h3>{title}</h3>
          <p>{content}</p>
        </ContentWrapper>
      </ArticlePreviewElements>

      <ArticlePreviewElements sx={{ display: "flex", flexDirection: "column" }}>
        <ArticlePreviewButton variant="contained">Read</ArticlePreviewButton>
        <ArticlePreviewButton variant="contained">Hide</ArticlePreviewButton>
      </ArticlePreviewElements>
    </ArticlePreviewWrapper>
  );
}

export default ArticlePreview;
