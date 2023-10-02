import React, { useState } from "react";
import { Drawer, IconButton, PaperProps, Typography } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import { Link } from "react-router-dom";
import { styled } from "@mui/system";

const Typo = styled(Typography)`
  font-size: 18px;
  color: black;
  font-weight: bold;

  text-decoration: none;
`;
const DrawerBar = () => {
  const [open, setopen] = useState(false);

  const Itemlist = [
    {
      name: "Home",
      to: "/",
    },
    {
      name: "The Studio",
      to: "/studio",
    },
    { name: "Service", to: "/service" },
    { name: "The Project", to: "/project" },
    { name: "The Product", to: "/product" },
  ];

  return (
    <>
      <Drawer
        PaperProps={{
          sx: {
            bacgroundColor: "white",

            width: "50vw",
            fontWeight: "bold",
          },
        }}
        open={open}
        onClose={() => setopen(false)}
      >
        <List>
          <ListItemButton divider>
            <ListItemIcon>
              <ListItemText primary="Home" />
            </ListItemIcon>
          </ListItemButton>
          <ListItemButton divider>
            <ListItemIcon>
              <ListItemText primary="The Studio" />
            </ListItemIcon>
          </ListItemButton>
          <ListItemButton divider>
            <ListItemIcon>
              <ListItemText primary="Service" />
            </ListItemIcon>
          </ListItemButton>
          <ListItemButton divider>
            <ListItemIcon>
              <ListItemText primary="Projects" />
            </ListItemIcon>
          </ListItemButton>
        </List>
      </Drawer>

      <IconButton onClick={() => setopen(!open)}>
        <MenuIcon />
      </IconButton>
    </>
  );
};

export default DrawerBar;
