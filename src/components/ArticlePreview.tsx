import React from "react";
import { styled, alpha } from "@mui/material/styles";
import Grid from "@mui/material/Grid";
import Skeleton from "@mui/material/Skeleton";
import Button from "@mui/material/Button";
// import PropTypes from "prop-types";

const ArticlePreviewWrapper = styled("div")(() => ({
  margin: "2rem auto",
}));

const Item = styled("div")(() => ({
  textAlign: "center",
  alignItems: "center",
}));

const CSSButton = styled(Button)(() => ({
  width: "18vh",
  marginTop: "1rem",
}));

// ArticlePreview.propTypes = {
//   title: PropTypes.string,
// };

export interface StandardComponentProps {
  title: string;
  image: string;
}

function ArticlePreview({ title, image }: StandardComponentProps) {
  return (
    <ArticlePreviewWrapper>
      <Grid container spacing={3} padding="2rem 2rem">
        <Grid item xs>
          <Item>
            {image}
            <Skeleton
              variant="rounded"
              sx={{ width: "100%", height: "35vh" }}
            />
          </Item>
        </Grid>
        <Grid item xs={6}>
          <Item sx={{ textAlign: "left", padding: "0 1rem" }}>
            {title}
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita
              molestias accusamus porro laudantium dignissimos! Labore porro
              molestias tempora quae voluptates voluptate, fugiat similique,
              dolor eos, perspiciatis provident officiis dolore sint. Lorem
              ipsum, dolor sit amet consectetur adipisicing elit. Illum
              repellendus est nihil similique fugit delectus non atque corporis
              fugiat asperiores impedit eos, consequuntur quisquam odit, minima
              molestiae nostrum vero aperiam. Lorem ipsum dolor sit amet
              consectetur adipisicing elit. Voluptas sit ipsam sequi sint
              sapiente error ipsa quidem ex illum aspernatur, placeat cumque
              quam, pariatur minus nihil amet odit excepturi earum. Lorem ipsum
              dolor sit amet consectetur, adipisicing elit. Magni, velit esse
              dicta placeat dolore voluptates iste excepturi commodi eum?
              Voluptates magni necessitatibus dolorem debitis excepturi minus.
              Culpa ut debitis temporibus? Lorem ipsum dolor sit amet
              consectetur adipisicing elit. Maxime reiciendis officia neque
              accusamus fuga omnis aspernatur eaque, repudiandae delectus.
              Repellat quam quos neque! Corrupti amet et laborum dolorem unde
              architecto?
            </p>
          </Item>
        </Grid>
        <Grid item xs={2.5}>
          <Item sx={{ display: "flex", flexDirection: "column" }}>
            <CSSButton variant="contained">Read</CSSButton>
            <CSSButton variant="contained">Hide</CSSButton>
          </Item>
        </Grid>
      </Grid>
    </ArticlePreviewWrapper>
  );
}

export default ArticlePreview;