import React from "react";
import { Box, Paper, Typography, Grid, CardMedia, Button } from "@mui/material";
import { useState } from "react";

import useStyles from "./brand.css";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";

import { styled } from "@mui/system";
import get from "lodash.get";
import heat from "../../assect/heat.png";
import brand from "../../assect/brand.png";
import Hidden from "@mui/material/Hidden";
import SystemUpdateAltIcon from "@mui/icons-material/SystemUpdateAlt";

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
const Brand = () => {
  const { classes, cx } = useStyles();

  return (
    <>
      <Box className={classes.root}>
        <Grid container spacing={6}>
          <Grid item xs={12} sm={12} md={6}>
            <Box className={classes.card}>
              <Card sx={{ height: 475, width: 600 }} elevation={0}>
                <CardContent sx={{ padding: 8 }}>
                  <Typography
                    component="div"
                    color=" #f45320"
                    bgcolor="#fdede8"
                    sx={{
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                      width: 100,
                      padding: 3,
                      borderRadius: 8,
                      marginLeft: 16,
                    }}
                  >
                    <SystemUpdateAltIcon fontSize="large" />
                  </Typography>
                  <Typography
                    variant="h3"
                    sx={{ fontWeight: "bold", marginLeft: 5 }}
                    paddingBottom={3}
                  >
                    Intelligent brand
                    <br />
                    <span style={{ paddingLeft: 78 }}>identity</span>
                  </Typography>
                  <Typography variant="h5" paddingBottom={3} component="div">
                    Auctor turpis nulla risus dignissim parturient <br />
                    <span style={{ paddingLeft: 22 }}>
                      semper sed ultricies convallis. Mauris
                      <br />
                    </span>
                    <span style={{ paddingLeft: 70 }}>
                      blandit sit lorem imperdiet.
                    </span>
                  </Typography>
                  <Typography
                    component="div"
                    sx={{
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                      color: "blue",
                      marginRight: 10,
                    }}
                  >
                    Learn more about us
                  </Typography>
                </CardContent>
              </Card>
            </Box>
          </Grid>
          <Hidden smDown>
            <Grid item xs={12} sm={12} md={6}>
              <Box
                sx={{ display: "flex", justifyContent: "center", padding: 5 }}
              >
                <img src={brand} style={{ height: "70vh" }} />
              </Box>
            </Grid>
          </Hidden>
        </Grid>
      </Box>
    </>
  );
};

export default Brand;
