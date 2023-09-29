import React from "react";
import { styled } from "@mui/material/styles";
import { Stack, Button, Skeleton } from "@mui/material";

const SuggestionWrapper = styled("div")(() => ({
  position: "relative",
  padding: "2rem 1rem",
}));

const SuggestionWrapperElement = styled("div")(() => ({
  textAlign: "center",
}));

const OpenArticleButton = styled(Button)(({ theme }) => ({
  width: "20vh",
  marginTop: "1rem",
  color: theme.palette.primary.main,
  "&: hover": {
    background: theme.palette.primary.light,
    color: theme.palette.common.white,
  },
}));

export interface NewsSuggestionPropsInterface {
  image: string;
}

function NewsSuggestion({ image }: NewsSuggestionPropsInterface) {
  return (
    <>
      <SuggestionWrapper>
        <Stack spacing={2} sx={{ width: "40vh" }}>
          <SuggestionWrapperElement>
            <Skeleton
              variant="rounded"
              sx={{ width: "100%", height: "35vh" }}
            />
            {image}
          </SuggestionWrapperElement>
          <SuggestionWrapperElement sx={{ textAlign: "left" }}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati,
            natus. Quaerat, dicta et. Excepturi facere nesciunt odio ab numquam
            a necessitatibus libero quasi qui, asperiores commodi maiores,
            perferendis molestiae harum.
          </SuggestionWrapperElement>
          <SuggestionWrapperElement>
            <OpenArticleButton>Read</OpenArticleButton>
          </SuggestionWrapperElement>
        </Stack>
      </SuggestionWrapper>
    </>
  );
}

export default NewsSuggestion;
