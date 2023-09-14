import React, { useState } from "react";
import { styled, alpha } from "@mui/material/styles";
import {
  Toolbar,
  Typography,
  InputBase,
  Button,
  Grid,
  Autocomplete,
  TextField,
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import FilterAltOutlinedIcon from "@mui/icons-material/FilterAltOutlined";

const HeaderWrapper = styled("div")(({ theme }) => ({
  height: "fit-content",
  padding: "1rem 0",
  top: "0",
  background: theme.palette.primary.main,
}));

const Search = styled("div")(({ theme }) => ({
  position: "relative",
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.2),
  "&:hover": {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginRight: theme.spacing(2),
  marginLeft: 0,
  width: "100%",
  [theme.breakpoints.up("sm")]: {
    marginLeft: theme.spacing(3),
    width: "50vh",
  },
}));

const SearchIconWrapper = styled("div")(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: "100%",
  position: "absolute",
  pointerEvents: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: "inherit",
  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 1, 1, 0),
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create("width"),
    [theme.breakpoints.up("md")]: {
      width: "20ch",
    },
  },
  width: "100%",
  background: alpha(theme.palette.common.white, 0.8),
}));

const MenueWrapper = styled("div")(({ theme }) => ({
  position: "relative",
  height: "15rem",
  background: alpha(theme.palette.common.white, 0.6),
  width: "96%",
  paddingTop: "1rem",
  margin: "1rem auto",
  marginBottom: "0",
}));

const AutocompleteItem = styled(Autocomplete)(({ theme }) => ({
  background: alpha(theme.palette.common.white, 0.5),
  borderRadius: theme.shape.borderRadius,
}));

const ButtonItem = styled(Button)(({ theme }) => ({
  background: alpha(theme.palette.common.white, 0.8),
  color: "black",
}));

const Item = styled("div")(({ theme }) => ({
  padding: theme.spacing(2),
  textAlign: "center",
}));

function Header() {
  const [isOpen, setOpen] = useState(false);
  return (
    <HeaderWrapper>
      <Toolbar variant="dense">
        <Typography
          variant="h5"
          color="inherit"
          component="div"
          margin="0.5rem"
        >
          Logo
        </Typography>
        <Search>
          <SearchIconWrapper>
            <SearchIcon />
          </SearchIconWrapper>
          <StyledInputBase
            placeholder="Search"
            inputProps={{ "aria-label": "search" }}
          />
        </Search>
        <ButtonItem
          variant="contained"
          onClick={() => {
            setOpen(!isOpen);
          }}
        >
          <FilterAltOutlinedIcon />
        </ButtonItem>
      </Toolbar>
      {isOpen && (
        <MenueWrapper>
          <Grid
            container
            spacing={{ xs: 2, md: 3 }}
            columns={{ xs: 4, sm: 8, md: 12 }}
          >
            <Grid item xs={2} sm={4} md={4}>
              <Item>
                <AutocompleteItem
                  disablePortal
                  id="combo-box-demo"
                  options={opt}
                  sx={{ width: 400 }}
                  renderInput={(params) => (
                    <TextField {...params} label="Country" />
                  )}
                />
              </Item>
            </Grid>
            <Grid item xs={2} sm={4} md={4}>
              <Item>
                <AutocompleteItem
                  disablePortal
                  id="combo-box-demo"
                  options={opt}
                  sx={{ width: 400 }}
                  renderInput={(params) => (
                    <TextField {...params} label="Topic" />
                  )}
                />
              </Item>
            </Grid>
            <Grid item xs={2} sm={4} md={4}>
              <Item>
                <AutocompleteItem
                  disablePortal
                  id="combo-box-demo"
                  options={opt}
                  sx={{ width: 400 }}
                  renderInput={(params) => (
                    <TextField {...params} label="Date" />
                  )}
                />
              </Item>
            </Grid>
            <Grid item xs={2} sm={4} md={4}>
              <Item>
                <AutocompleteItem
                  disablePortal
                  id="combo-box-demo"
                  options={opt}
                  sx={{ width: 400 }}
                  renderInput={(params) => (
                    <TextField {...params} label="Language" />
                  )}
                />
              </Item>
            </Grid>
            <Grid item xs={2} sm={4} md={4}>
              <Item>
                <AutocompleteItem
                  disablePortal
                  id="combo-box-demo"
                  options={opt}
                  sx={{ width: 400 }}
                  renderInput={(params) => (
                    <TextField {...params} label="Length" />
                  )}
                />
              </Item>
            </Grid>
            <Grid item xs={2} sm={4} md={4}>
              <Item>
                {" "}
                <ButtonItem sx={{ padding: "0.8rem 1.5rem" }}>
                  Search
                </ButtonItem>
              </Item>
            </Grid>
          </Grid>
        </MenueWrapper>
      )}
    </HeaderWrapper>
  );
}

const opt = [
  { label: "Belarus" },
  { label: "Russia" },
  { label: "Ukraine" },
  { label: "USA" },
];

export default Header;
