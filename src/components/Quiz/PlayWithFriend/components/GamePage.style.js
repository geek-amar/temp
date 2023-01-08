import { makeStyles } from "@mui/styles";

export const useStyle = makeStyles((theme) => ({
  container: {
    minHeight: "90vh",
  },
  imageContainer: {
    zIndex: 5,
    "& img": {
      width: "100%",
      position: "absolute",
      top: "-20%",
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
  wrapper: {
    display: "flex",
    justifyContent: "space-between",
    padding: "0 8rem",
    "@media (max-width: 500px)": {
      flexDirection: "column",
      justifyContent: "space-around",
      padding: "0",
    },
  },
  left: {
    zIndex: 10,
    display: "flex",
    flexDirection: "column",
    gap: "40px",
    paddingLeft: "2rem",
    "@media (max-width: 500px)": {
      padding: 0,
      alignItems: "center",
    },
  },
  header: {
    padding: "3rem 0 0 0rem",
    "& span": {
      display: "block",
      marginBottom: 10,
      fontWeight: 600,
      color: "#ffffff",
      fontSize: "15px",
      "@media (max-width: 500px)": {
        fontSize: "13px",
        fontWeight: 500,
      },
    },
    "& .title": {
      fontSize: "30px",
      color: "#E1A200",
      fontWeight: 600,
    },
    "@media (max-width: 500px)": {
      paddingLeft: "2rem",
    },
  },
  right: {
    zIndex: 10,
    position: "relative",
    "& .img": {
      width: "400px",
      height: "400px",
      "@media (max-width: 500px)": {
        display: "none",
      },
    },
  },
  game: {
    marginTop: "-15%",
    marginBottom: "5rem",
    display: "flex",
    flexDirection: "column",
    gap: "10px",
    padding: "0 4rem 0 10rem",
    position: "relative",
    "& .status": {
      color: "white",
    },
    "& .roomCode": {
      color: "white",
      fontWight: 600,
      fontSize: "18px",
      zIndex: 10,
    },
    "& .code": {
      background: "#0F0F0F",
      width: "180px",
      height: "50px",
      border: "2px solid #E1A200",
      color: "#E1A200",
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      padding: "0 2rem",
      fontSize: "18px",
      borderRadius: "6px",
      cursor: "pointer",
      zIndex: 100,
    },
    "@media (max-width: 500px)": {
      marginTop: "10%",
      marginBottom: "10%",
    },
  },
  card: {
    width: "180px",
    height: "140px",
    display: "flex",
    flexDirection: "column",
    gap: "10px",
    justifyContent: "center",
    background: "#0f0f0f",
    padding: "1rem",
    color: "#E1A200",
    fontSize: "18px",
    alignItems: "center",
    borderRadius: "6px",
    "& img": {
      width: "80px",
      height: "80px",
    },
  },
  startButton: {
    display: "flex",
    justifyContent: "flex-start",
    "& button": {
      background: "linear-gradient(92.86deg, #E1A200 0%, #FF5C00 100%)",
      color: "white",
      fontSize: "14px",
      width: "80px",
      fontWeight: 700,
    },
  },
  friend: {
    color: "#00AB11",
    fontWight: 600,
  },
}));
