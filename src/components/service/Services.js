import React from "react";
import get from "lodash.get";
import { Typography, Box, Card, Grid } from "@mui/material";

import { arrayOf, object, string } from "prop-types";

import ScheduleIcon from "@mui/icons-material/Schedule";
import AttachFileIcon from "@mui/icons-material/AttachFile";
import PauseIcon from "@mui/icons-material/Pause";
import CardContent from "@mui/material/CardContent";
import FilterDramaIcon from "@mui/icons-material/FilterDrama";

const Services = (props) => {
  return (
    <>
      <Box
        sx={{
          px: { xs: 2, sm: 2, md: 10 },
          py: { xs: 2, sm: 2, md: 10 },
        }}
        style={{ backgroundColor: get(props, "bgColor", "white") }}
      >
        <Grid container spacing={2}>
          {get(props, "items", []).map((item, index) => (
            <Grid value md={3} xs={12} sm={12} key={index}>
              <Card sx={{ height: 400, width: 300 }} elevation={0}>
                <CardContent>
                  <Typography
                    component="div"
                    color={item.color}
                    bgcolor={item.bgColor}
                    sx={{
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                      width: 100,
                      padding: 4,
                      borderRadius: 10,
                      marginLeft: 5,
                    }}
                  >
                    {item.img}
                  </Typography>
                  <Typography
                    sx={{
                      fontWeight: "bold",
                      padding: 3,
                      marginLeft: 3,
                      fontSize: "25px",
                    }}
                  >
                    {item.title}
                  </Typography>
                  <Typography
                    sx={{
                      marginLeft: 2,
                      fontSize: "15px",
                    }}
                  >
                    {item.dec}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Box>
    </>
  );
};

Services.propTypes = {
  titleColor: string,
  descTextColor: string,
  items: arrayOf(object),
};
Services.defaultProps = {
  title: "bold",
  descTextColor: "grey",
  items: [
    {
      img: <AttachFileIcon style={{ fontSize: "80px" }} />,
      bgColor: "#ccddff",
      color: "blue",

      title: "Web & Mobile",
      dec: "Nulla quis lorem ut libero malesuada feugiat. Quisque velit nisi, pretium.",
    },
    {
      img: <ScheduleIcon style={{ fontSize: "80px" }} />,
      bgColor: "#fdeee8",
      color: "orange",

      title: "UX design",
      dec: "Nulla quis lorem ut libero malesuada feugiat. Quisque velit nisi, pretium.",
    },
    {
      img: <PauseIcon style={{ fontSize: "80px" }} />,
      bgColor: "#ebfaee",
      color: "green",

      title: "VideoProduction",
      dec: "Nulla quis lorem ut libero malesuada feugiat. Quisque velit nisi, pretium.",
    },
    {
      img: <FilterDramaIcon style={{ fontSize: "80px" }} />,
      bgColor: "#f8ebfa",
      color: "voilet",

      title: "Digitalmarketing",
      dec: "Nulla quis lorem ut libero malesuada feugiat. Quisque velit nisi, pretium.",
    },
  ],
};

export default Services;
