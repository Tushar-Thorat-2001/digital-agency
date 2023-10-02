import { makeStyles } from "tss-react/mui";
import banner1 from "../../assect/banner1.png";

const useStyles = makeStyles({ uniqId: "expertise" })(
  (theme, _params, classes) => ({
    root: {
      backgroundImage: `url(${banner1})`,
      backgroundRepeat: "no-repeat",
      backgroundSize: "cover",
      height: "80vh",
      width: "100vw",
      marginBottom: 150,
    },

    Hero: {
      marginTop: "27vh",
      color: "white",
      padding: "0px 400px",
      [theme.breakpoints.down("lg")]: {
        padding: "0  150px",
      },
      [theme.breakpoints.down("md")]: {
        padding: "0px 100px",
      },
      [theme.breakpoints.down("sm")]: {
        padding: "0px 50px",
      },
    },
    title: {
      fontSize: "14px",
      fontWeight: 700,
      marginBottom: "12px",
    },
    info: {
      marginBottom: "30px",
      fontWeight: "bold",
      [theme.breakpoints.down("md")]: {
        fontSize: "50px",
      },
      [theme.breakpoints.down("sm")]: {
        fontSize: "25px",
      },
    },
    card: {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      position: "relative",
      top: "200px",
    },
    desc: {
      fontSize: "16px",
      marginBottom: "25px",
      fontWeight: "bold",

      [theme.breakpoints.down("sm")]: {
        fontSize: "13px",
      },
    },
    btn1: {
      color: "inherit",
      borderColor: "transparent",
      margin: " 10px 20px",
      padding: "10px 30px",
      border: "2px solid white",
      borderRadius: "0px",
      textTransform: "none",
      "&:hover": {
        backgroundColor: "white",
        color: "orange",
      },
    },
    btn2: {
      color: "inherit",
      backgroundColor: "orange",
      margin: " 10px 20px",
      padding: "10px 30px",
      borderRadius: "0px",
      textTransform: "none",
      "&:hover": {
        backgroundColor: "black",
      },
    },
    scroolApp: {
      backgroundColor: "white",
    },
    logo: {
      fontSize: 30,
      fontWeight: "bold",
      [theme.breakpoints.down("md")]: {
        color: "orange",
      },
    },
    scroollogo: {
      color: "orange",
    },
    MenuBox: {
      display: "flex",
      gap: 30,
      cursor: "pointer",
    },
    list: {
      display: "flex",
      [theme.breakpoints.down("md")]: {
        display: "none",
      },
      alignItems: "center",
      fontSize: 13,
      fontWeight: "bold",
    },
    scroollist: {
      color: "black",
    },
    MenuIcon: {
      display: "none",
      [theme.breakpoints.down("md")]: {
        display: "flex",
      },
      cursor: "pointer",
      fontSize: 40,
      color: "black",
    },
    drawerlist: {
      padding: "5px 10px",
      fontSize: 12,
      fontWeight: "bold",
      cursor: "pointer",
    },

    grid2: {
      backgroundColor: "whitesmoke",
    },
    parallaxWrap: {
      position: "absolute",
      top: -100,
      left: 50,
      "& span": {
        backgroundSize: "100%",
        position: "absolute",
      },
      "& > div > div": {
        position: "absolute",
      },
      [theme.breakpoints.down("sm")]: {
        display: "none",
      },
    },
    iconGreen: {
      top: -230,
      left: -130,
      width: 320,
      height: 600,
    },
    iconViolet: {
      width: 560,
      height: 560,
      top: 120,
      left: -250,
    },
    iconBlue: {
      width: 560,
      height: 560,
      left: -10,
      top: 50,
    },
    runningTag: {
      position: "relative",
      height: 230,
      padding: theme.spacing(0, 4),
      '& div[class*="slick-active"]': {
        [`& .${classes.tagItem}`]: {
          background: theme.palette.primary.main,
          color: theme.palette.common.white,
          borderColor: theme.palette.primary.main,
        },
      },
      '& div[class*="slick-current"]': {
        [`& .${classes.tagItem}`]: {
          background: "none !important",
          color: `${theme.palette.text.primary} !important`,
          borderColor: `${theme.palette.divider} !important`,
        },
      },
    },
    tagItem: {
      display: "inline-block",
      borderRadius: 4,
      textTransform: "capitalize",
      transition: "all 0.3s ease-in",
      border: `1px solid ${theme.palette.divider}`,
      marginRight: theme.spacing(1),
      marginBottom: theme.spacing(1.5),
      padding: theme.spacing(0.5, 1),
      [theme.breakpoints.up("lg")]: {
        padding: theme.spacing(0.5, 4),
      },
    },
    tagGroup: {
      display: "block",
      "&:focus": {
        outline: "none",
      },
    },
  })
);

// TODO jss-to-tss-react codemod: usages of this hook outside of this file will not be converted.
export default useStyles;
