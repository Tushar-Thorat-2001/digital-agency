import React from "react";
import get from "lodash.get";
import { Typography, Box, Card, Grid } from "@mui/material";

import { arrayOf, object } from "prop-types";
import CardMedia from "@mui/material/CardMedia";
import img1 from "../../assect/img1.png";
import img2 from "../../assect/img2.png";
// import img3 from "../../assect/img3.png";
import img4 from "../../assect/img4.png";
import img5 from "../../assect/img5.png";
import img6 from "../../assect/img6.png";
import img7 from "../../assect/img7.png";

const Img1 = (props) => {
  return (
    <>
      <Box
        sx={{
          px: { xs: 2, sm: 2, md: 10 },
          py: { xs: 2, sm: 2, md: 10 },
        }}
        style={{ backgroundColor: get(props, "bgColor", "white") }}
        display="flex"
        flexDirection="column"
        alignItems="center"
        margin={5}
      >
        <Typography variant="h5">
          We are very fortunate to work with these amazing partners
        </Typography>
        <Grid container spacing={2} margin={5}>
          {get(props, "items", []).map((item, index) => (
            <Grid value md={2} xs={6} sm={3} key={index}>
              <Card sx={{ width: "50vw" }} elevation={0}>
                <Box display="flex">
                  <img src={item.img} alt="img" />
                </Box>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Box>
    </>
  );
};

Img1.propTypes = {
  items: arrayOf(object),
};
Img1.defaultProps = {
  items: [
    {
      img: img1,
    },
    {
      img: img2,
    },
    {
      img: img7,
    },
    {
      img: img4,
    },
    {
      img: img5,
    },
    {
      img: img6,
    },
  ],
};

export default Img1;
