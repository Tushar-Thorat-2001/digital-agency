import React from "react";
import { Box, Paper, Typography, Grid, CardMedia, Button } from "@mui/material";
import { useState } from "react";
import PlayCircleFilledIcon from "@mui/icons-material/PlayCircleFilled";

import useStyles from "../development/development.css";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";

import { styled } from "@mui/system";
import get from "lodash.get";

import hi from "../../assect/hi.png";
import hero1 from "../../assect/hero1.png";
import hero2 from "../../assect/hero2.png";
import hero3 from "../../assect/hero3.png";
import Hidden from "@mui/material/Hidden";

const HoverButton = styled(Button)`
  background-color: #e5eeff;
  
  
  color:#0256ff;
  padding: 10px;
  &:hover {
    color: white;
    background-color: #0256ff;
  }
  shadow=0;
  elevation:0;
`;
const Home1 = () => {
  const { classes, cx } = useStyles();

  return (
    <>
      <Box className={classes.root}>
        <Grid container spacing={6}>
          <Hidden smUp>
            <Grid item xs={12} sm={12} md={6}>
              <Box
                sx={{ display: "flex", justifyContent: "center", padding: 5 }}
              >
                <img src={hero1} style={{ height: "70vh" }} />
              </Box>
            </Grid>
          </Hidden>

          <Hidden smDown>
            <Grid item xs={12} sm={12} md={6}>
              <Box sx={{ display: "flex", paddingY: 10 }}>
                <Box>
                  <img
                    src={hero1}
                    style={{ height: "60vh", marginRight: 30 }}
                  />
                </Box>
                <Box>
                  <img src={hero2} style={{ height: "30vh" }} />
                  <img src={hero3} style={{ height: "10vh" }} />
                </Box>
              </Box>
            </Grid>
          </Hidden>
          <Grid item xs={12} sm={12} md={6}>
            <Box className={classes.card}>
              <Card sx={{ height: 600, width: 600 }} elevation={0}>
                <CardContent sx={{ padding: 8 }}>
                  <Box display="flex" alignItems="center">
                    <img src={hi} alt="hi" />
                    <Typography
                      variant="h6"
                      component="div"
                      paddingBottom={3}
                      padding={2}
                    >
                      Hello! We are Avada Digital Agency.
                    </Typography>
                  </Box>
                  <Typography
                    variant="h2"
                    sx={{ fontWeight: "bold" }}
                    paddingBottom={3}
                  >
                    We create amazing digital products
                  </Typography>
                  <Box display="flex" justifyContent="space-between">
                    <Typography paddingBottom={3}>
                      Euismod ipsum pellentesque <br />
                      sit nullam{" "}
                      <span style={{ textDecoration: "underline" }}>
                        fermentum justo.
                      </span>
                    </Typography>
                    <HoverButton variant="contained" size="medium">
                      Learn more about us
                    </HoverButton>
                  </Box>

                  <CardActions>
                    <Box
                      paddingY={2}
                      fontSize="20px"
                      display={"flex"}
                      alignItems="center"
                    >
                      <PlayCircleFilledIcon
                        color="primary"
                        style={{ fontSize: "60px" }}
                      />

                      <Typography paddingX={3} color="#0256ff">
                        View our new showreel
                      </Typography>
                    </Box>
                  </CardActions>
                </CardContent>
              </Card>
            </Box>
          </Grid>
        </Grid>
      </Box>
    </>
  );
};

export default Home1;
