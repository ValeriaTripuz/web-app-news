import React from "react";
import { styled, alpha } from "@mui/material/styles";
import { AppBar, Toolbar, Typography } from "@mui/material";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import FacebookIcon from "@mui/icons-material/Facebook";

const FooterWrapper = styled("div")(() => ({
  position: "relative",
  height: "15vh",
  top: "2rem",
}));

const IconsWrapper = styled("div")(() => ({
  display: "flex",
  flexDirection: "column",
}));

const SocialNetworksWrapper = styled("div")(() => ({
  //   display: "flex",
  //   flexDirection: "row",
}));

function Footer() {
  return (
    <AppBar position="relative">
      <FooterWrapper>
        <Toolbar variant="dense">
          <IconsWrapper>
            <Typography
              variant="h5"
              color="inherit"
              component="div"
              margin="0.5rem"
            >
              Logo
            </Typography>
            <SocialNetworksWrapper>
              <InstagramIcon fontSize="small" />
              <TwitterIcon fontSize="small" />
              <FacebookIcon fontSize="small" />
            </SocialNetworksWrapper>
          </IconsWrapper>
        </Toolbar>
      </FooterWrapper>
    </AppBar>
  );
}

export default Footer;
