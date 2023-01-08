import { makeStyles } from "@mui/styles";

export const useStyle = makeStyles((theme) => ({
  card: {
    width: "300px",
    height: "150px",
    display: "flex",
    boxSizing: "border-box",
    border: "2px solid #E1A200",
    justifyContent: "space-between",
    borderRadius: "5px",

    "@media (max-width: 500px)": {
      flexDirection: "column",
      height: "100%",
      width: "160px",
      border: "none",
      // flex: 1,
      background: "#0F0F0F",
      borderRadius: "6px",
      overflow: "hidden",
      gap: 0,
    },
  },
  left: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    textAlign: "center",
    gap: 10,
    background: "linear-gradient(92.86deg, #E1A200 0%, #FF5C00 100%)",
    padding: "1rem",
    alignItems: "center",
    color: "white",
    borderTopRightRadius: "5px",
    borderBottomRightRadius: "5px",
    "& span": {
      fontSize: "16px",
      fontWeight: 600,
    },

    "@media (max-width: 500px)": {
      background: "#0F0F0F",
      padding: "1rem",
    },
  },
  right: {
    padding: "1rem",
    flex: 1,
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    color: "white",
    fontSize: "14px",

    "& .last": {
      fontFamily: "cursive",
      fontSize: "10px",
      textAlign: "center",
    },

    "& button": {
      background: "linear-gradient(92.86deg, #E1A200 0%, #FF5C00 100%)",
      color: "white",
      fontWeight: 700,
      fontSize: "10px",
    },
    "@media (max-width: 500px)": {
      background: "#0F0F0F",
      padding: "0 1rem 1rem 1rem",
      alignItems: "center",

      "& button": {
        margin: "1rem 0",
        width: "80px",
      },
    },
  },
  header: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",

    "& .first": {
      color: "#E1A200",
      fontSize: "16px",
      fontWeight: 700,
    },
    "& span": {
      "& img": {
        marginTop: "-2px",
      },
    },
  },
}));
