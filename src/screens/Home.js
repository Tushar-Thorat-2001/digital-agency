import { Typography, Box, Grid } from "@mui/material";
import React from "react";
import Home1 from "../components/home/Home1";

import logo2 from "../assect/logo2.png";

import { styled } from "@mui/system";
import Button from "@mui/material/Button";

import Banner from "../components/Banner1/Banner";
import Services from "../components/service/Services";
import Development from "../components/development/Development";
import Card1 from "../components/Banner2/Card1";
import Development2 from "../components/development/Development2";
import Card2 from "../components/card/Card2";
import Banner3 from "../components/Banner3/Banner3";
import Brand from "../components/Brand/Brand";
import Card3 from "../components/card/Card3";
import Img1 from "../components/service/Img1";


const HoverButton2 = styled(Button)`
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
const HoverButton3 = styled(Button)`
  background-color: #f45320;
  color: white;
  padding: 10px;
  &:hover {
    color: #f45320;
    background-color:#fdede8; 
  }
  shadow=0;
  elevation:0;
`;
const Home = () => {
  return (
    <>
      <Box display="flex" flexDirection="column" alignItems="center">
        <Home1 />
        <Img1 />
        <Banner />
        <Services />
        <Development />
        <Box
          sx={{
            bgcolor: "blue",
            width: "100vw",
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
          }}
        >
          <Grid
            container
            spacing={10}
            as="div"
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              padding: 10,
            }}
          >
            <Grid item xs={12} sm={4} md={4}>
              <Typography variant="h2" color="white">
                Our recent projects
              </Typography>
            </Grid>
            <Grid item xs={12} sm={4} md={4}>
              <Typography variant="h6" color="white">
                Diam integer turpis tristique integer tincidunt cursus
                dignissim. Euismod libero pellentesque et suspendisse posuere.
                Lorem quis nec nisl viverra ut velit imperdiet
              </Typography>
            </Grid>
            <Grid item xs={12} sm={4} md={4}>
              <HoverButton2 variant="contained" size="large" sx={{ padd: 10 }}>
                View all projects
              </HoverButton2>
            </Grid>
          </Grid>
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              padding: 10,
            }}
          >
            <Card1 />
          </Box>
        </Box>
        <Development2 />
        <Card2 />
        <Banner3 />
        <Brand />
        <Card3 />
        <Box
          sx={{
            bgcolor: "blue",
            width: "100vw",
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
          }}
        >
          <Box>
            <Grid
              container
              spacing={6}
              as="div"
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                padding: 10,
              }}
            >
              <Grid item xs={12} sm={4} md={4}>
                <img src={logo2} alt="logo2" />
              </Grid>
              <Grid item xs={12} sm={4} md={4}>
                <Typography
                  variant="h5"
                  color="white"
                  fontWeight={"bold"}
                  paddingTop={17}
                  paddingBottom={3}
                >
                  About Avada Digital Agency
                </Typography>
                <Typography variant="h6" color="white">
                  Diam integer turpis tristique integer tincidunt cursus
                  dignissim. Euismod libero pellentesque et suspendisse posuere.
                  Lorem quis nec nisl viverra ut velit imperdiet
                </Typography>
              </Grid>
              <Grid item xs={12} sm={4} md={4}>
                <HoverButton3
                  variant="contained"
                  size="large"
                  sx={{ padd: 10 }}
                >
                  Got a project? Contact us!
                </HoverButton3>
              </Grid>
            </Grid>
            <Grid container>
              <Grid
                item
                xs={12}
                as="div"
                display="flex"
                justifyContent="center"
                alignItems="center"
                margin={5}
              >
                <Typography color={"white"}>
                  © Copyright 2012 - 2023 | Avada Website Builder by ThemeFusion
                  | All Rights Reserved | Powered by WordPress
                </Typography>
              </Grid>
            </Grid>
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default Home;
