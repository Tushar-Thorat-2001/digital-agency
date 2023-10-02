import { makeStyles } from "tss-react/mui";
import banner3 from "../../assect/banner3.png";

const useStyles = makeStyles({ uniqId: "expertise" })(
  (theme, _params, classes) => ({
    root: {
      backgroundImage: `url(${banner3})`,
      backgroundRepeat: "no-repeat",
      backgroundSize: "cover",
      height: "65vh",
      width: "100vw",
    },
    card: {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
    },

    trans: {
      backgroundColor: "transparent", // Set the background color to transparent
      boxShadow: "none", // Optional: Remove the box shadow for a completely transparent look
    },
  })
);

// TODO jss-to-tss-react codemod: usages of this hook outside of this file will not be converted.
export default useStyles;
