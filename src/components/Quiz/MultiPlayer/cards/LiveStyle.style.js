import { makeStyles } from "@mui/styles";

export const useStyle = makeStyles((theme) => ({
  card: {
    width: "230px",
    height: "150px",
    display: "flex",
    boxSizing: "border-box",
    border: "2px solid #E1A200",
    justifyContent: "space-between",
    borderRadius: "5px",
  },
  left: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    background: "linear-gradient(92.86deg, #E1A200 0%, #FF5C00 100%)",
    flex: 1,
    padding: "1rem",
    alignItems: "center",
    color: "white",

    "& span": {
      fontSize: "16px",
      fontWeight: 600,
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
  },
}));
