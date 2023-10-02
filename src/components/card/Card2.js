import React from "react";
import Card from "@mui/material/Card";
import Grid from "@mui/material/Grid";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Box, CardActionArea } from "@mui/material";
import get from "lodash.get";
import { arrayOf, object, string } from "prop-types";
import c1 from "../../assect/c1.png";
import c2 from "../../assect/c2.png";
import hero2 from "../../assect/hero2.png";
import { Button, CardActions } from "@mui/material";

const Card2 = (props) => {
  return (
    <Box sx={{ marginY: 5 }}>
      <Grid container spacing={15}>
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
                <CardContent sx={{ padding: 2 }}>
                  <Typography gutterBottom component="div">
                    {item.title}
                  </Typography>
                  <Typography variant="h6" fontWeight={"bold"} gutterBottom>
                    {item.dec}
                  </Typography>
                  <Typography variant="body2" gutterBottom>
                    {item.dec2}
                  </Typography>
                </CardContent>
              </CardActionArea>
              <CardActions>
                <Button size="small" color="primary" gutterBottom>
                  Continue reading
                </Button>
              </CardActions>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

Card2.propTypes = {
  items: arrayOf(object),
};
Card2.defaultProps = {
  items: [
    {
      img: c1,

      title: "Design",
      dec: "Power up your design system with an Avada prebuilt website",
      dec2: "Sit amet quam vehicula elementum sed sit dolor sit amet, consectetur adipiscing elit.",
    },
    {
      img: hero2,

      title: "Design, Tips & Tricks",
      dec: "Behind the scenes of creating a UI kit",
      dec2: "Vestibulum ac diam sit amet quam vehicula elementum sed sit amet dui vivamus.",
    },
    {
      img: c2,

      title: "Avada Crypto Prebuilt Website",
      dec: "Five integrations to help team collaborate better",
      dec2: "Pulvinar pellentesque arcu mi sit nec eget velit lacus, tortor velit arcu orci.",
    },
  ],
};

export default Card2;
