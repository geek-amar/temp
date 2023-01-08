import { makeStyles } from "@mui/styles";
export const useStyle = makeStyles((theme) => ({
  modelHeader: {
    display: "flex",
    justifyContent: "space-between",
    padding: "1rem",
    alignItems: "center",

    "& .buy": {
      fontSize: "20px",
      color: "#e1a200",
      fontWeight: 600,
    },

    "& .ikc": {
      display: "flex",
      flexDirection: "column",
      "& img": {
        marginRight: "10px",
      },
      "& .total": {
        fontSize: "10px",
        fontWeight: 500,
        color: "#5b5b5b",
      },
      fontSize: "15px",
    },
  },
  list: {
    display: "flex",
    justifyContent: "space-between",
    padding: "0.5rem",
    boxShadow: "0px 16px 24px 0px #16223314",
    borderRadius: "10px",

    "& .bulb": {
      display: "flex",
      alignItems: "center",
      gap: "10px",
    },

    "& button": {
      background: "linear-gradient(92.86deg, #E1A200 0%, #FF5C00 100%)",
      color: "white",
      fontSize: "15px",
    },
  },
}));
