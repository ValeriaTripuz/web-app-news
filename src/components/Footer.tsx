import React from "react";
import { styled } from "@mui/material/styles";
import { Toolbar, Typography, Grid } from "@mui/material";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import FacebookIcon from "@mui/icons-material/Facebook";

const FooterWrapper = styled("div")(({ theme }) => ({
  position: "relative",
  height: "8vh",
  padding: "2rem 0",
  background: theme.palette.primary.main,
}));

const FooterIconsWrapper = styled("div")(() => ({
  display: "flex",
  flexDirection: "column",
  width: "10vh",
}));

const SocialNetworksIconsWrapper = styled("div")(() => ({
  display: "flex",
  flexDirection: "row",
  flexWrap: "wrap",
  justifyContent: "space-between",
  marginTop: "0.5rem",
}));

const FooterContentItem = styled("div")(() => ({
  textAlign: "center",
  alignItems: "center",
}));

const FooterContactsWrapper = styled("div")(() => ({
  width: "10rem",
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
                  Logo
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
