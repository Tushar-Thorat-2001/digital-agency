import { Box, Paper, Typography, Grid, Button } from "@mui/material";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import React from "react";
import { styled } from "@mui/system";
import useStyles from "./banner.css";

const Banner = () => {
  const { classes, cx } = useStyles();
  const bull = (
    <Box
      component="span"
      sx={{ display: "inline-block", mx: "2px", transform: "scale(0.8)" }}
    >
      •
    </Box>
  );
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
  return (
    <>
      <Box className={classes.root}>
        <Grid container spacing={6}>
          <Grid item xs={12} md={6} lg={6}>
            <Box className={classes.card}>
              <Card sx={{ height: 500, width: 500 }}>
                <CardContent sx={{ padding: 8 }}>
                  <Typography
                    variant="h6"
                    component="div"
                    color="#0256ff"
                    paddingBottom={3}
                  >
                    We are Avada Digital Agency
                  </Typography>
                  <Typography
                    variant="h4"
                    sx={{ fontWeight: "bold" }}
                    paddingBottom={3}
                  >
                    Analyze your entire market pricing & stock availability
                  </Typography>
                  <Typography variant="h5" paddingBottom={3}>
                    Mauris purus maecenas purus, aliquet lacus varius. Proin
                    venenatis vel cras phasellus condimentum.
                  </Typography>
                  <CardActions>
                    <HoverButton variant="contained" size="large">
                      Buy Avada Today
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

export default Banner;
