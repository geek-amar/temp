import { makeStyles } from "@mui/styles";

export const useStyle = makeStyles((theme) => ({
  modal: {
    height: "100vh",
    width: "100%",
    position: "fixed",
    top: 0,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    padding: "6rem",
    "@media (max-width: 500px)": {
      padding: "0rem 2rem",
    },
    zIndex: 200,
  },
  modelContent: {
    width: "400px",
    minHeight: "150px",
    position: "fixed",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    margin: "auto",
    height: "max-content",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    gap: "10px",
    background: "white",
    borderRadius: "10px",
    padding: "1rem",
    textAlign: "center",
    zIndex: 99999999999999,

    "& span": {
      fontSize: "14px",
      fontWeight: 600,
    },
    "& .Mtitle": {
      fontSize: "20px",
      color: "#E1A200",
      fontWeight: 600,
    },
    "& input": {
      padding: "0.5rem 1rem",
      border: "none",
      outline: "none",
      fontSize: "16px",
      fontWeight: 600,
      textAlign: "center",
    },
    "& svg": {
      cursor: "pointer",
    },
    "& .hd": {
      margin: 0,
      fontFamily: "cursive",
      fontSize: "10px",
      color: "#505050",
    },

    "@media (max-width: 500px)": {
      width: "90%",
      textAlign: "center",
    },
  },
  token: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    gap: "10px",

    "& .content": {
      background: "#EFEFEF",
      width: "max-content",
      padding: "0.4rem 1rem",
      borderRadius: "10px",
      "& span": {
        padding: "0 1rem",
      },
      "& svg": {
        cursor: "pointer",
      },
    },
  },
  buttonContainer: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    gap: "15px",
    "& button": {
      width: "80px",
      padding: "0.5rem 1rem",
      background: "linear-gradient(92.86deg, #E1A200 0%, #FF5C00 100%)",
      color: "white",
      fontWeight: "600",
      cursor: "pointer",
    },
  },
  backdrop: {
    position: "fixed",
    top: 0,
    right: 0,
    left: 0,
    margin: "auto",
    width: "100%",
    height: "100%",
    background: "#000000",
    opacity: "50%",
    zIndex: 9999999999,
  },
}));
