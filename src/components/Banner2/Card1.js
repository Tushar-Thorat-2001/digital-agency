import React from "react";
import Card from "@mui/material/Card";
import Grid from "@mui/material/Grid";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";
import get from "lodash.get";
import { arrayOf, object, string } from "prop-types";
import b1 from "../../assect/b1.png";
import b2 from "../../assect/b2.png";
import b3 from "../../assect/b3.png";

const Card1 = (props) => {
  return (
    <div>
      <Grid container spacing={15}>
        {get(props, "items", []).map((item, index) => (
          <Grid item xs={12} sm={6} md={4}>
            <Card sx={{ maxWidth: 345 }}>
              <CardActionArea>
                <CardMedia
                  component="img"
                  height="300"
                  image={item.img}
                  alt="green iguana"
                />
                <CardContent>
                  <Typography
                    variant="h6"
                    component="div"
                    sx={{
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                    }}
                  >
                    {item.title}
                  </Typography>
                  <Typography
                    component="div"
                    sx={{
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                      color: `${item.color}`,
                    }}
                  >
                    {item.dec}
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
          </Grid>
        ))}
      </Grid>
    </div>
  );
};

Card1.propTypes = {
  titleColor: string,
  descTextColor: string,
  items: arrayOf(object),
};
Card1.defaultProps = {
  title: "bold",
  descTextColor: "grey",
  items: [
    {
      img: b1,

      color: "blue",

      title: "Avada Interior Prebuilt Website",
      dec: "Web Design",
    },
    {
      img: b2,
      bgColor: "#fdeee8",
      color: "orange",

      title: "Avada Fitness Prebuilt Website",
      dec: "Web Design",
    },
    {
      img: b3,
      bgColor: "#ebfaee",
      color: "green",

      title: "Avada Crypto Prebuilt Website",
      dec: "Web Design",
    },
  ],
};

export default Card1;
