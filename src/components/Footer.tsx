import React from "react";
import { styled } from "@mui/material/styles";
import { Toolbar, Typography, Grid } from "@mui/material";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import FacebookIcon from "@mui/icons-material/Facebook";
import logo from "../images/news_logo.png";

const FooterWrapper = styled("div")(({ theme }) => ({
  position: "relative",
  height: "10vh",
  padding: "2rem 0",
  background: theme.palette.primary.main,
}));

const FooterIconsWrapper = styled("div")(() => ({
  display: "flex",
  flexDirection: "column",
  width: "fit-content",
}));

const SocialNetworksIconsWrapper = styled("div")(() => ({
  display: "flex",
  flexDirection: "row",
  flexWrap: "wrap",
  justifyContent: "center",
  margin: "0.5rem 0",
}));

const FooterContentItem = styled("div")(() => ({
  textAlign: "center",
  alignItems: "center",
}));

const FooterContactsWrapper = styled("div")(() => ({
  width: "10rem",
}));

const LogoImg = styled("img")(() => ({
  width: "20vh",
  height: "auto",
  margin: 0,
  "@media (max-width: 1200px)": {
    width: "9vh",
  },
}));

function Footer() {
  return (
    <FooterWrapper>
      <Toolbar variant="dense">
        <Grid container padding="0 5vh">
          <Grid item xs>
            <FooterContentItem>
              <FooterIconsWrapper>
                <Typography
                  variant="h5"
                  color="inherit"
                  component="div"
                  margin="0.5rem"
                >
                  <LogoImg src={logo} alt="Logo" />
                </Typography>
                <SocialNetworksIconsWrapper>
                  <InstagramIcon fontSize="small" />
                  <TwitterIcon fontSize="small" />
                  <FacebookIcon fontSize="small" />
                </SocialNetworksIconsWrapper>
              </FooterIconsWrapper>
            </FooterContentItem>
          </Grid>
          <Grid item xs={8}>
            <FooterContentItem>
              <FooterContactsWrapper>
                <h4>Contacts</h4>
              </FooterContactsWrapper>
            </FooterContentItem>
          </Grid>
        </Grid>
      </Toolbar>
    </FooterWrapper>
  );
}

export default Footer;
