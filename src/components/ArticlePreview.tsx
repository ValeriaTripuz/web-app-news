import React from "react";
import { styled, alpha } from "@mui/material/styles";
import { Grid, Skeleton, Button } from "@mui/material";

const ArticlePreviewWrapper = styled(Grid)(({ theme }) => ({
  margin: "2rem auto",
  width: "fit-content",
  padding: theme.spacing(3),
  "@media (max-width: 767px)": {
    display: "flex",
    flexDirection: "column",
    flexWrap: "wrap",
    padding: "0",
  },
}));

const ArticlePreviewElements = styled("div")(() => ({
  "@media (max-width: 767px)": {
    fontSize: "15px",
    width: "35vh",
    padding: "0",
  },
}));

const ArticlePreviewButton = styled(Button)(({ theme }) => ({
  width: "18vh",
  marginTop: "1rem",
  background: alpha(theme.palette.primary.light, 0.5),
  "&:hover": {
    color: theme.palette.common.white,
    background: theme.palette.primary.main,
  },
  "@media (max-width: 767px)": {
    width: "100%",
  },
}));

const ImageSkeleton = styled(Skeleton)(() => ({
  height: "30vh",
}));

const ArticleImage = styled("img")(() => ({
  maxHeight: "20vh",
}));

const ContentBox = styled("p")(() => ({
  maxHeight: "16.8vh",

  overflow: "hidden",
}));

export interface ArticlePreviewProps {
  title: string;
  image: string;
  content: string;
}

function ArticlePreview({ title, image, content }: ArticlePreviewProps) {
  return (
    <ArticlePreviewWrapper container>
      <Grid item xs>
        <ArticlePreviewElements>
          {image ? (
            <ArticleImage src={image} alt="element" />
          ) : (
            <ImageSkeleton variant="rounded" />
          )}
        </ArticlePreviewElements>
      </Grid>
      <Grid item xs={6}>
        <ArticlePreviewElements sx={{ textAlign: "left", padding: "0 1rem" }}>
          <h3>{title}</h3>
          <ContentBox>{content}</ContentBox>
        </ArticlePreviewElements>
      </Grid>
      <Grid item xs={2.5}>
        <ArticlePreviewElements
          sx={{ display: "flex", flexDirection: "column" }}
        >
          <ArticlePreviewButton variant="contained">Read</ArticlePreviewButton>
          <ArticlePreviewButton variant="contained">Hide</ArticlePreviewButton>
        </ArticlePreviewElements>
      </Grid>
    </ArticlePreviewWrapper>
  );
}

export default ArticlePreview;
