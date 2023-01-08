import { makeStyles } from "@mui/styles";

export const useStyle = makeStyles((theme) => ({
  gold: {
    color: "#E1A200",
  },
  imageContainer: {
    zIndex: 5,
    "& img": {
      width: "100%",
      position: "absolute",
      top: "-5%",
      left: 0,
    },
    "& .image1": {
      zIndex: 10,
    },
    "& .image2": {},

    "@media (max-width: 500px)": {
      display: "none",
    },
  },
  mobileImageContainer: {
    zIndex: 5,
    display: "none",
    "@media (max-width: 500px)": {
      display: "block",
    },
    "& img": {
      width: "100%",
      position: "absolute",
      top: 0,
      left: 0,
    },
    "& .image1": {
      zIndex: 10,
      opacity: "50%",
    },
  },
  container: {
    minHeight: "60vh",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    gap: "20px",

    "@media (max-width: 500px)": {
      minHeight: "80vh",
      marginTop: "13rem",
    },
  },
  header: {
    color: "#E1A200",
    fontSize: "30px",
    fontWeight: 600,
    zIndex: 100,

    "& span": {
      display: "block",
      textAlign: "center",
    },
  },

  button: {
    zIndex: 100,
    "& button": {
      width: "80px",
      background: "linear-gradient(92.86deg, #E1A200 0%, #FF5C00 100%)",
      color: "white",
      fontWeight: 600,
      fontSize: "10px",
      marginRight: "10px",
    },
  },

  wrapper: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    gap: "20px",

    "@media (max-width: 500px)": {
      flexDirection: "column",
    },
  },
  left: {
    minWidth: "250px",
    minHeight: "190px",
    padding: "1rem",
    zIndex: 100,
    background: "#0f0f0f",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-around",
    alignItems: "center",
    borderRadius: "10px",

    "& div": {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      gap: "10px",
      width: "100%",
      fontSize: "10px",

      color: "white",
    },
  },
  right: {
    zIndex: 100,
    display: "grid",
    gridTemplateColumns: "auto auto",
    gap: "20px",

    "@media (max-width: 500px)": {
      gridTemplateColumns: "100% 100%",
      justifyContent: "center",
    },
  },
  piles: {
    width: "130px",
    height: "60px",
    background: "#0f0f0f",
    padding: "1rem",
    borderRadius: "5px",
    "& span": {
      display: "block",
      textAlign: "center",
      fontSize: "12px",
      color: "white",
      fontWeight: 600,
    },

    "@media (max-width: 500px)": {
      width: "100%",
    },
  },
  mainText: {
    display: "block",
    textAlign: "center",
    fontSize: "20px",
    color: "#E1A200",
    fontWeight: 600,
  },
  Bigpiles: {
    gridColumn: "1 / span 2",
    background: "#0f0f0f",
    padding: "1rem",
    borderRadius: "5px",
    "& span": {
      display: "block",
      textAlign: "center",
      fontSize: "12px",
      color: "white",
      fontWeight: 600,
    },
  },
  model: {
    padding: "3rem",
  },
  modelHeader: {
    "& .gold": {
      fontSize: "18px",
      color: "#E1A200",
    },
    "& span": {
      fontSize: "16px",
      color: "black",
      fontWeight: 700,
    },
    marginBottom: "1rem",
  },
  modelContent: {
    fontSize: "14.5px",
    textAlign: "center",
    marginBottom: "2rem",
  },
  better: {
    fontSize: "17px",
    color: "black",
    fontWeight: 700,
    marginBottom: "2rem",
  },
  buttonContainer: {
    "& button": {
      width: "80px",
      background: "linear-gradient(92.86deg, #E1A200 0%, #FF5C00 100%)",
      color: "white",
      fontWeight: 600,
      fontSize: "10px",
      marginRight: "10px",
    },
  },
  metaData: {
    display: "flex",
    flexDirection: "column",
    textAlign: "center",
    justifyContent: "center",
    alignItems: "center",
  },
}));
