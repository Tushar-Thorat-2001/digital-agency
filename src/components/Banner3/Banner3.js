import { Box, Paper, Typography, Grid, Button } from "@mui/material";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import React, { useState, useEffect } from "react";
import { styled } from "@mui/system";
import useStyles from "./banner3.css";
import phone from "../../assect/phone.png";
import TextField from "@mui/material/TextField";
import Hidden from "@mui/material/Hidden";

const Banner3 = () => {
  const { classes, cx } = useStyles();
  const [inputValue, setInputValue] = useState("");

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log("Submitted value:", inputValue);
  };

  const HoverButton = styled(Button)`
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
  return (
    <>
      <Box className={classes.root}>
        <Grid container spacing={6}>
          <Hidden smDown>
            <Grid item xs={12} sm={12} md={6}>
              <Box
                display="flex"
                justifyContent="center"
                alignItems="center"
                padding={5}
              >
                <img src={phone} style={{ height: "60vh" }} />
              </Box>
            </Grid>
          </Hidden>
          <Grid item xs={12} md={6} lg={6}>
            <Box className={classes.card}>
              <Card
                sx={{ height: 475, width: 600 }}
                elevation={0}
                className={classes.trans}
              >
                <CardContent>
                  <Typography
                    variant="h2"
                    color="white"
                    sx={{ marginY: 3, fontSize: "bold" }}
                  >
                    We are a full-service
                    <br /> digital company
                  </Typography>
                  <Typography
                    color="white"
                    fontWeight="bold"
                    sx={{ marginY: 3 }}
                  >
                    Nibh enim in purus at habitant. Vitae tortor volutpat
                    aliquam
                    <br />
                    eget nunc sagittis. Viverra odio amet, diam.
                  </Typography>
                  <CardActions>
                    <form onSubmit={handleSubmit}>
                      <Box
                        sx={{
                          display: "flex",
                          justifyContent: "center",

                          flexDirection: "row",
                          marginRight: 21,
                        }}
                      >
                        <TextField
                          fullWidth
                          placeholder="Enter Email"
                          value={inputValue}
                          onChange={handleInputChange}
                          sx={{
                            backgroundColor: "white",
                            color: "black",
                            borderRadius: 2,
                            marginRight: 6,
                          }}
                        />
                        <HoverButton
                          type="submit"
                          variant="contained"
                          color="primary"
                          sx={{ padding: 1, paddingX: 3, borderRadius: 5 }}
                        >
                          Submit
                        </HoverButton>
                      </Box>
                    </form>
                  </CardActions>
                  <Typography color="white">
                    Euismod ipsum pellentesque sit nullam. Imperdiet fermentum
                    justo.
                  </Typography>
                </CardContent>
              </Card>
            </Box>
          </Grid>
        </Grid>
      </Box>
    </>
  );
};

export default Banner3;
