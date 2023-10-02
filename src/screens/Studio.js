import React from "react";
import { Box, Paper, Typography, Grid, CardMedia, Button } from "@mui/material";
import hi from "../assect/hi.png";
import Services2 from "../components/service/Services2";

const Studio = () => {
  return (
    <Box>
      <Grid container>
        <Grid item sm={12}>
          <Box
            display="flex"
            justifyContent="center"
            alignItems="center"
            flexDirection="column"
            margin={20}
          >
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
              About the studio
            </Typography>
            <Typography variant="h6" paddingBottom={3}>
              Condimentum placerat at elementum pretium. Neque vivamus tempor
              <br />
              <span style={{ marginLeft: 45 }}>
                bibendum id. Sit volutpat hac dui id erat accumsan dignissim.
              </span>
            </Typography>
          </Box>
        </Grid>
      </Grid>
      <Box>{/* <Services2 /> */}</Box>
    </Box>
  );
};

export default Studio;
