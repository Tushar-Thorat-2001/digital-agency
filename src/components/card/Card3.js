import React from "react";
import Card from "@mui/material/Card";
import Grid from "@mui/material/Grid";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Box, CardActionArea } from "@mui/material";
import get from "lodash.get";
import { arrayOf, object, string } from "prop-types";
import cd1 from "../../assect/cd1.png";
import cd2 from "../../assect/cd2.png";
import cd3 from "../../assect/cd3.png";
import cd4 from "../../assect/cd4.png";
import cd5 from "../../assect/cd5.png";
import b1 from "../../assect/b1.png";
import { Button, CardActions } from "@mui/material";

const Card3 = (props) => {
  return (
    <Box sx={{ marginY: 3 }}>
      <Grid container spacing={6}>
        {get(props, "items", []).map((item, index) => (
          <Grid item xs={12} sm={6} md={4}>
            <Card sx={{ maxWidth: 400, padding: 2 }}>
              <CardActionArea>
                <CardMedia
                  component="img"
                  height="200"
                  image={item.img}
                  alt="green iguana"
                  sx={{ objectFit: "cover" }}
                />
                <CardContent>
                  <Typography gutterBottom component="div">
                    {item.title}
                  </Typography>
                </CardContent>
              </CardActionArea>

              <Box sx={{ display: "flex", justifyContent: "space-between" }}>
                <Button size="small" color="primary" gutterBottom>
                  {item.dec}
                </Button>

                <Typography
                  sx={{
                    color: "orange",
                    bgcolor: "#fdede8",
                    padding: 2,
                    borderRadius: 2,
                  }}
                >
                  $69
                </Typography>
              </Box>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

Card3.propTypes = {
  items: arrayOf(object),
};
Card3.defaultProps = {
  items: [
    {
      img: cd1,

      title: "Avada Podcast",
      dec: "Prebuilt Demo",
    },
    {
      img: cd2,

      title: "Avada Builder",
      dec: "Design Mockup",
    },
    {
      img: cd3,

      title: "Avada Restaurant",
      dec: "Prebuilt Demo",
    },
    {
      img: cd4,

      title: "Avada Interior",
      dec: "Design Mockup",
    },
    {
      img: cd5,

      title: "Avada Takeout",
      dec: "Prebuilt Demo",
    },
    {
      img: b1,

      title: "Avada Pet Supplies",
      dec: "Design Mockup",
    },
  ],
};

export default Card3;
