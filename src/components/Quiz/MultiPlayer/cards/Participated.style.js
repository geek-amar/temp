import { makeStyles } from "@mui/styles";

export const useStyle = makeStyles((p) => ({
  card: {
    display: "flex",
    flexDirection: "column",
    width: "120px",
    height: "max-content",
    border: "2px solid #E1A200",
    "@media (max-width: 500px)": {
      border: "none",
      width: "170px",
      borderRadius: "10px",
      overflow: "hidden",
    },
  },
  header: {
    background: " linear-gradient(92.86deg, #E1A200 0%, #FF5C00 100%)",
    padding: "1rem",
    "& img": {
      width: "100%",
      "@media (max-width: 500px)": {
        width: "100px",
        padding: "1rem 0 0 0",
      },
    },
    "& span": {
      color: "white",
      fontSize: "16px",
      textAlign: "center",
      display: "block",
      marginTop: "0.5rem",
    },

    "@media (max-width: 500px)": {
      background: "#0F0F0F",
      textAlign: "center",
    },
  },
  footer: {
    "@media (max-width: 500px)": {
      background: "#0F0F0F",
      paddingBottom: "1rem",
      paddingTop: "0",
    },

    padding: "1rem",
    textAlign: "center",
    "& button": {
      background: " linear-gradient(92.86deg, #E1A200 0%, #FF5C00 100%)",
      color: "white",
      fontSize: "12px",
      fontWeight: 600,
      textTransform: "capitalize",
      width: "80px",
      padding: "0.5rem",
    },
  },
}));
