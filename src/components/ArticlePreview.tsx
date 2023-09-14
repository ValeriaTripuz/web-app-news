import React from "react";
import { styled, alpha } from "@mui/material/styles";
import { Grid, Skeleton, Button } from "@mui/material";

const ArticlePreviewWrapper = styled(Grid)(() => ({
  padding: "2rem",
  margin: "2rem auto",
  width: "100%",
  "@media (max-width: 767px)": {
    display: "flex",
    flexDirection: "column",
    flexWrap: "wrap",
    width: "100%",
  },
}));

const Item = styled("div")(() => ({
  "@media (max-width: 767px)": {
    fontSize: "15px",
    width: "35vh",
    padding: "0 1rem",
    paddingLeft: "0",
    alignItems: "center",
  },
}));

const CSSButton = styled(Button)(({ theme }) => ({
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
  width: "100%",
  height: "30vh",
}));

export interface StandardComponentProps {
  title: string;
  image: string;
}

function ArticlePreview({ title, image }: StandardComponentProps) {
  return (
    <ArticlePreviewWrapper container spacing={3}>
      <Grid item xs>
        <Item>
          <ImageSkeleton variant="rounded" />
          {image}
        </Item>
      </Grid>
      <Grid item xs={6}>
        <Item sx={{ textAlign: "left", padding: "0 1rem" }}>
          <h3>{title}</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita
            molestias accusamus porro laudantium dignissimos! Labore porro
            molestias tempora quae voluptates voluptate, fugiat similique, dolor
            eos, perspiciatis provident officiis dolore sint. Lorem ipsum, dolor
            sit amet consectetur adipisicing elit. Illum repellendus est nihil
            similique fugit delectus non atque corporis fugiat asperiores
            impedit eos, consequuntur quisquam odit, minima molestiae nostrum
            vero aperiam. Lorem ipsum dolor sit amet consectetur adipisicing
            elit. Voluptas sit ipsam sequi sint sapiente error ipsa quidem ex
            illum aspernatur, placeat cumque quam, pariatur minus nihil amet
            odit excepturi earum. Lorem ipsum dolor sit amet consectetur,
            adipisicing elit. Magni, velit esse dicta placeat dolore voluptates
            iste excepturi commodi eum? Voluptates magni necessitatibus dolorem
            debitis excepturi minus. Culpa ut debitis temporibus? Lorem ipsum
            dolor sit amet consectetur adipisicing elit. Maxime reiciendis
            officia neque accusamus fuga omnis aspernatur eaque, repudiandae
            delectus. Repellat quam quos neque! Corrupti amet et laborum dolorem
            unde architecto?
          </p>
        </Item>
      </Grid>
      <Grid item xs={2.5}>
        <Item sx={{ display: "flex", flexDirection: "column" }}>
          <CSSButton variant="contained">Read</CSSButton>
          <CSSButton variant="contained">Hide</CSSButton>
        </Item>
      </Grid>
    </ArticlePreviewWrapper>
  );
}

export default ArticlePreview;
