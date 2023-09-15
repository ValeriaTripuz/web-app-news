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

const IconsWrapper = styled("div")(() => ({
  display: "flex",
  flexDirection: "column",
  width: "10vh",
}));

const SocialNetworksWrapper = styled("div")(() => ({
  display: "flex",
  flexDirection: "row",
  flexWrap: "wrap",
  justifyContent: "space-between",
  marginTop: "0.5rem",
}));

const Item = styled("div")(() => ({
  textAlign: "center",
  alignItems: "center",
}));

const ContactsWrapper = styled("div")(() => ({
  width: "10rem",
}));

function Footer() {
  return (
    <FooterWrapper>
      <Toolbar variant="dense">
        <Grid container padding="0 5vh">
          <Grid item xs>
            <Item>
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
            </Item>
          </Grid>
          <Grid item xs={8}>
            <Item>
              <ContactsWrapper>
                <h4>Contacts</h4>
              </ContactsWrapper>
            </Item>
          </Grid>
        </Grid>
      </Toolbar>
    </FooterWrapper>
  );
}

export default Footer;
