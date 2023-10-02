import React, { useState } from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import { useTheme, useMediaQuery } from "@mui/material";

import logo from "../assect/logo.png";
import { styled } from "@mui/system";
import { Link } from "react-router-dom";
import DrawerBar from "./Drawer";

const TransparentAppBar = styled(AppBar)`
  background-color: transparent;
`;

const StyledToolbar = styled(Toolbar)`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Typo = styled(Typography)`
  font-size: 18px;
  color: black;
  &:hover {
    color: blue;
  }

  text-decoration: none;
`;

const CenteredHome = styled(Box)`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const HoverButton = styled(Button)`
  background-color: #fdede8;
  color: #f45320;
  padding: 10px;
  &:hover {
    color: white;
    background-color: #f45320;
  }
  shadow=0;
  elevation:0;
`;

const Navbar = () => {
  const theme = useTheme();
  const isMatch = useMediaQuery(theme.breakpoints.down("sm"));
  return (
    <Box marginX={8} marginTop={10}>
      <TransparentAppBar position="static" elevation={0}>
        <StyledToolbar>
          {isMatch ? (
            <Box display="flex" justifyContent="space-between">
              <CenteredHome>
                <img src={logo} alt="Logo" />
              </CenteredHome>

              <Typography variant="h2" sx={{ fontWeight: "bold" }}>
                <DrawerBar />
              </Typography>
            </Box>
          ) : (
            <>
              <CenteredHome>
                <img src={logo} alt="Logo" />
              </CenteredHome>

              <Typo component={Link} to="/">
                Home
              </Typo>
              <Typo component={Link} to="/studio">
                The Studio
              </Typo>
              <Typo component={Link} to="/services">
                Services
              </Typo>

              <select
                style={{
                  fontSize: "18px",
                  border: "0",
                  "&:hover": { color: "blue" },
                }}
              >
                <option as={Link} to="/">
                  Projects
                </option>
                <option as={Link} to="/">
                  Projects1
                </option>
              </select>
              <select style={{ fontSize: "18px", border: "0" }}>
                <option as={Link} to="/">
                  Products
                </option>
                <option as={Link} to="/">
                  Products1
                </option>
              </select>

              <Typo component={Link} to="/services">
                The Magazine
              </Typo>
              <Box>
                <HoverButton variant="contained" size="large">
                  Contact us
                </HoverButton>
              </Box>
            </>
          )}
        </StyledToolbar>
      </TransparentAppBar>
    </Box>
  );
};

export default Navbar;
