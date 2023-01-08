import { makeStyles } from "@mui/styles";

export const useStyle = makeStyles((theme) => ({
  container: {
    minHeight: "61vh",
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
    justifyContent: "space-around",
    "@media (max-width: 500px)": {
      flexDirection: "column",
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
      width: "300px",
      height: "300px",
      "@media (max-width: 500px)": {
        display: "none",
      },
    },
  },
  category: {
    display: "grid",
    rowGap: "15px",
    columnGap: "0px",
    gridTemplateColumns: "auto auto auto auto",
    padding: "2rem 14rem",

    "& a": {
      textDecoration: "none",
      margin: 0,
    },

    "@media (max-width: 500px)": {
      gridTemplateColumns: "auto auto",
      justifyContent: "center",
      gap: "10px",
      padding: "2rem",
      marginTop: "5rem",
    },

    "@media (max-width: 380px)": {
      gridTemplateColumns: "auto auto",
      justifyContent: "center",
      gap: "10px",
      padding: "1rem",
    },
  },
  card: {
    width: "200px",
    height: "180px",
    padding: "20px",
    background: "#0F0F0F",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    verticalAlign: "middle",
    borderRadius: "7px",
    cursor: "pointer",
    "& img": {
      width: "90px",
      height: "90px",
    },

    " & span": {
      color: "#E1A200",
      fontSize: "14px",
      fontWeight: "600",
      textAlign: "center",
    },

    "@media (max-width: 500px)": {
      width: "170px",
      height: "150px",
    },
    "@media (max-width: 380px)": {
      width: "150px",
      height: "130px",
      "& img": {
        width: "50px",
        height: "50px",
      },
    },
  },
  content: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    gap: "10px",
  },
  modal: {
    height: "100vh",
    width: "100%",
    position: "fixed",
    top: 0,
    zIndex: 100,
    display: "flex",
    justifyContent: "center",
    padding: "6rem",
    "@media (max-width: 500px)": {
      alignItems: "center",
      padding: "0rem 2rem",
    },
  },
  modelContent: {
    width: "400px",
    height: "max-content",
    display: "flex",
    flexDirection: "column",
    gap: "10px",
    background: "white",
    borderRadius: "10px",
    padding: "1rem",
    textAlign: "center",
    "& span": {
      fontSize: "14px",
      fontWeight: 600,
    },
    "& .Mtitle": {
      fontSize: "20px",
      color: "#E1A200",
      fontWeight: 600,
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
      zIndex: 100,
    },
  },
  backdrop: {
    position: "absolute",
    top: 0,
    right: 0,
    left: 0,
    margin: "auto",
    width: "100%",
    height: "100vh",
    background: "#000000",
    opacity: "50%",
    zIndex: 99,
  },
}));
