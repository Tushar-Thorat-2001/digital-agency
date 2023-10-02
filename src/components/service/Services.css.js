import { makeStyles } from "tss-react/mui";

const useStyles = makeStyles({ uniqId: "testi" })(
  (theme, _params, classes) => ({
    sequenceNumher: {
      padding: 3,
      fontSize: 24,
      color: theme.palette.primary.main,
    },
    desc: {
      borderLeft: `3px solid ${theme.palette.primary.main}`,
    },
    box: {
      paddingTop: 3,
      paddingLeft: 10,
    },
    trans: {
      backgroundColor: "transparent", // Set the background color to transparent
      boxShadow: "none", // Optional: Remove the box shadow for a completely transparent look
    },
    root: {
      backgroundColor: "black",
      backgroundRepeat: "no-repeat",
      backgroundSize: "cover",
      height: "100vh",
      width: "100vw",
    },
  })
);

export default useStyles;
