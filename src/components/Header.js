import React from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import useMediaQuery from "@mui/material/useMediaQuery";
import logo from "../assect/logo.png";
import { Container } from "@mui/material";
import { Margin } from "@mui/icons-material";

const Header = () => {
  return (
    <AppBar elevation={0}>
      <Container
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "46px",
        }}
      >
        <Typography>
          Visit our online shop for the latest merchandise and products for sale
          <span
            style={{
              textDecoration: "underline",

              marginLeft: 4,
            }}
          >
            Visit the shop
          </span>
        </Typography>
      </Container>
    </AppBar>
  );
};

export default Header;
