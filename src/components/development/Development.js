import React from "react";
import { Box, Paper, Typography, Grid, CardMedia, Button } from "@mui/material";

import useStyles from "./development.css";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";

import { styled } from "@mui/system";
import get from "lodash.get";
import banner2 from "../../assect/banner2.png";


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
const Development = () => {
  const { classes, cx } = useStyles();
  return (
    <>
      <Box className={classes.root}>
        <Grid container spacing={6}>
          <Grid item xs={12} sm={12} md={6}>
            <Box>
              <img src={banner2} style={{ width: "100vh", height: "60vh" }} />
            </Box>
          </Grid>
          <Grid item xs={12} sm={12} md={6}>
            <Box className={classes.card}>
              <Card sx={{ height: 475, width: 500 }} elevation={0}>
                <CardContent sx={{ padding: 8 }}>
                  <Typography
                    variant="h6"
                    component="div"
                    color="#0256ff"
                    paddingBottom={3}
                  >
                    Web and mobile development
                  </Typography>
                  <Typography
                    variant="h4"
                    sx={{ fontWeight: "bold" }}
                    paddingBottom={3}
                  >
                    We are a full-service digital company
                  </Typography>
                  <Typography variant="h5" paddingBottom={3}>
                    Mauris purus maecenas purus, aliquet lacus varius. Proin
                    venenatis vel cras phasellus condimentum.
                  </Typography>
                  <CardActions>
                    <HoverButton variant="contained" size="large">
                      Got a project? Contact us!
                    </HoverButton>
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

export default Development;
