import React from "react";
import { Box, Paper, Typography, Grid, CardMedia, Button } from "@mui/material";
import { useState } from "react";

import useStyles from "./development.css";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";

import { styled } from "@mui/system";
import get from "lodash.get";
import heat from "../../assect/heat.png";
import dev1 from "../../assect/dev1.png";
import dev2 from "../../assect/dev2.png";
import hero3 from "../../assect/hero3.png";
import Hidden from "@mui/material/Hidden";

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
const Development2 = () => {
  const { classes, cx } = useStyles();

  return (
    <>
      <Box className={classes.root}>
        <Grid container spacing={6}>
          <Grid item xs={12} sm={12} md={6}>
            <Box className={classes.card}>
              <Card sx={{ height: 475, width: 600 }} elevation={0}>
                <CardContent sx={{ padding: 8 }}>
                  <Box display="flex" alignItems="center">
                    <img src={heat} alt="hi" />
                    <Typography
                      variant="h6"
                      component="div"
                      paddingBottom={3}
                      padding={2}
                    >
                      Web and mobile development
                    </Typography>
                  </Box>
                  <Typography
                    variant="h3"
                    sx={{ fontWeight: "bold" }}
                    paddingBottom={3}
                  >
                    We create amazing digital products
                  </Typography>
                  <Typography variant="h5" paddingBottom={3}>
                    Mi imperdiet congue id ante eu lacus ullamcorper blandit
                    mauris. Vulputate nam nulla tristique tellus.
                  </Typography>
                  <CardActions>
                    <HoverButton variant="contained" size="large">
                      Learn more about us
                    </HoverButton>
                  </CardActions>
                </CardContent>
              </Card>
            </Box>
          </Grid>

          <Hidden smUp>
            <Grid item xs={12} sm={12} md={6}>
              <Box
                sx={{ display: "flex", justifyContent: "center", padding: 5 }}
              >
                <img src={dev1} style={{ height: "70vh" }} />
              </Box>
            </Grid>
          </Hidden>

          <Hidden smDown>
            <Grid item xs={12} sm={12} md={6}>
              <Box sx={{ display: "flex", paddingY: 10 }}>
                <Box>
                  <img src={dev1} style={{ height: "60vh", marginRight: 30 }} />
                </Box>
                <Box>
                  <img src={dev2} style={{ height: "30vh" }} />
                  <img src={hero3} style={{ height: "10vh" }} />
                </Box>
              </Box>
            </Grid>
          </Hidden>
        </Grid>
      </Box>
    </>
  );
};

export default Development2;
