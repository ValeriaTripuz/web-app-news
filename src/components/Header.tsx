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
import logo from "../images/news_logo.png";

const HeaderWrapper = styled("div")(({ theme }) => ({
  height: "fit-content",
  padding: "1rem 0",
  background: theme.palette.primary.main,
}));

const SearchInputField = styled("div")(({ theme }) => ({
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

const FilterDropdownWrapper = styled("div")(({ theme }) => ({
  position: "relative",
  height: "35vh",
  background: alpha(theme.palette.common.white, 0.6),
  width: "96%",
  paddingTop: "1rem",
  margin: "1rem auto",
  marginBottom: "0",
  "@media (max-width: 768px)": {
    height: "45vh",
  },
}));

const AutocompleteForFilterInputs = styled(Autocomplete)(({ theme }) => ({
  background: alpha(theme.palette.common.white, 0.5),
  borderRadius: theme.shape.borderRadius,
}));

const HeaderButtons = styled(Button)(({ theme }) => ({
  background: alpha(theme.palette.common.white, 0.8),
  color: "black",
}));

const FilterInputField = styled("div")(({ theme }) => ({
  padding: theme.spacing(2),
  textAlign: "center",
}));

const LogoImg = styled("img")(() => ({
  width: "32vh",
  height: "auto",
  "@media (max-width: 1200px)": {
    width: "10vh",
  },
}));

function Header() {
  const [isFilterDropdownOpen, setisFilterDropdownOpen] = useState(false);
  return (
    <HeaderWrapper>
      <Toolbar variant="dense">
        <Typography
          variant="h5"
          color="inherit"
          component="div"
          margin="0.5rem"
        >
          <LogoImg src={logo} alt="Logo" />
        </Typography>
        <SearchInputField>
          <SearchIconWrapper>
            <SearchIcon />
          </SearchIconWrapper>
          <StyledInputBase
            placeholder="Search"
            inputProps={{ "aria-label": "search" }}
          />
        </SearchInputField>
        <HeaderButtons
          variant="contained"
          onClick={() => {
            setisFilterDropdownOpen(!isFilterDropdownOpen);
          }}
        >
          <FilterAltOutlinedIcon />
        </HeaderButtons>
      </Toolbar>
      {isFilterDropdownOpen && (
        <FilterDropdownWrapper>
          <Grid
            container
            spacing={{ xs: 2, md: 3 }}
            columns={{ xs: 4, sm: 8, md: 12 }}
          >
            <Grid item xs={2} sm={4} md={4}>
              <FilterInputField>
                <AutocompleteForFilterInputs
                  disablePortal
                  id="combo-box-demo"
                  options={countriesList}
                  sx={{ width: "100%" }}
                  renderInput={(params) => (
                    <TextField {...params} label="Country" />
                  )}
                />
              </FilterInputField>
            </Grid>
            <Grid item xs={2} sm={4} md={4}>
              <FilterInputField>
                <AutocompleteForFilterInputs
                  disablePortal
                  id="combo-box-demo"
                  options={countriesList}
                  sx={{ width: "100%" }}
                  renderInput={(params) => (
                    <TextField {...params} label="Topic" />
                  )}
                />
              </FilterInputField>
            </Grid>
            <Grid item xs={2} sm={4} md={4}>
              <FilterInputField>
                <AutocompleteForFilterInputs
                  disablePortal
                  id="combo-box-demo"
                  options={countriesList}
                  sx={{ width: "100%" }}
                  renderInput={(params) => (
                    <TextField {...params} label="Date" />
                  )}
                />
              </FilterInputField>
            </Grid>
            <Grid item xs={2} sm={4} md={4}>
              <FilterInputField>
                <AutocompleteForFilterInputs
                  disablePortal
                  id="combo-box-demo"
                  options={countriesList}
                  sx={{ width: "100%" }}
                  renderInput={(params) => (
                    <TextField {...params} label="Language" />
                  )}
                />
              </FilterInputField>
            </Grid>
            <Grid item xs={2} sm={4} md={4}>
              <FilterInputField>
                <AutocompleteForFilterInputs
                  disablePortal
                  id="combo-box-demo"
                  options={countriesList}
                  sx={{ width: "100%" }}
                  renderInput={(params) => (
                    <TextField {...params} label="Length" />
                  )}
                />
              </FilterInputField>
            </Grid>
            <Grid item xs={2} sm={4} md={4}>
              <FilterInputField>
                <HeaderButtons sx={{ padding: "0.8rem 1.5rem" }}>
                  Search
                </HeaderButtons>
              </FilterInputField>
            </Grid>
          </Grid>
        </FilterDropdownWrapper>
      )}
    </HeaderWrapper>
  );
}

const countriesList = [
  { label: "Belarus" },
  { label: "Russia" },
  { label: "Ukraine" },
  { label: "USA" },
];

export default Header;
