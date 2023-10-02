import { makeStyles } from "tss-react/mui";

const inlineStyles = makeStyles({ uniqId: "testi" })(
  (theme, _params, classes) => ({
    root: {
      backgroundcolor: "white",
    },

    card: {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
    },

    id: {
      padding: "3px",
      fontsize: "24px",
      color: "orange",
    },

    title: {
      paddingtop: "3px",
      paddingleft: "10px",
    },

    dec: {
      borderleft: "3px solid orange",
    },
  })
);

export default inlineStyles;
