import { makeStyles } from "@mui/styles";

export const useStyle = makeStyles((theme) => ({
  container: {
    marginTop: "5rem",
    "@media (max-width: 500px)": {
      marginTop: "5rem",
    },
  },
  section: {
    display: "flex",
    flexDirection: "column",
    minHeight: "100vh",
    alignItems: "center",
    gap: "7rem",

    "@media (max-width: 500px)": {
      gap: "0rem",
    },
  },
  imageContainer: {
    zIndex: 5,
    "& img": {
      width: "100%",
      position: "absolute",
      top: "-12%",
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
    width: "100vw",
    "& img": {
      position: "absolute",
      top: "-7%",
      left: 0,
      right: 0,
      width: "100%",
      objectFit: "cover",
    },
    "& .image1": {
      zIndex: 10,
      opacity: "50%",
      top: "-7%",
    },
  },
  header: {
    zIndex: 1000,
    display: "flex",
    justifyContent: "center",
    gap: "10px",
    "& span": {
      fontSize: "3em",
      fontWeight: 600,
      color: "#E1A200",
    },

    "@media (max-width: 500px)": {
      gap: "5px",
      "& span": {
        fontSize: "2em",
      },
      "& img": {
        width: "30px",
        height: "30px",
      },

      margin: "0rem 0 2rem 0",
    },
  },
  accountContainer: {
    zIndex: 300,
    display: "flex",

    "@media (max-width: 500px)": {
      flexDirection: "column",
    },
  },
  left: {
    alignSelf: "start",
    display: "flex",
    flexDirection: "column",
    padding: "0rem 0 0 3rem",
    color: "white",
    "& .leftHeader": {
      fontSize: "25px",
      borderBottom: "1px solid #5b5b5b",
      paddingBottom: "5px",
      padding: "0 2rem",

      "@media (max-width: 500px)": {
        display: "none",
      },
    },
    "& .leftOption": {
      padding: "1rem 0",
      display: "flex",
      flexDirection: "column",
      fontSize: "15px",
      gap: "10px",
      "& span": {
        marginLeft: "15%",
        color: "#5B5B5B",
        cursor: "pointer",
      },

      "& .color": {
        color: "#e1a200",

        "@media (max-width: 500px)": {
          background: "linear-gradient(92.86deg, #E1A200 0%, #FF5C00 100%)",
          color: "white",
          fontWeight: 600,
        },
      },

      "@media (max-width: 500px)": {
        flexDirection: "row",
        flexWrap: "wrap",
        justifyContent: "center",
        padding: 0,
        "& span": {
          width: "180px",
          margin: 0,
          padding: "1rem",
          border: "1px solid #E1A200",
          textAlign: "center",
        },
      },
    },

    "@media (max-width: 500px)": {
      padding: 0,
    },
  },
  right: {
    alignSelf: "start",
    display: "flex",
    flexDirection: "column",
    borderLeft: "1px solid #5b5b5b",
    "& .rightHeader": {
      fontSize: "25px",
      borderBottom: "1px solid #5b5b5b",
      paddingBottom: "5px",
      padding: "0 2rem",
      textAlign: "center",
      fontWeight: 600,
      color: "#969696",
      "@media (max-width: 500px)": {
        border: "none",
        padding: 0,
        margin: "2rem 0 1rem 0rem",
        color: "white",
      },
    },
    "@media (max-width: 500px)": {
      border: "none",
      padding: 0,
      width: "100%",
    },
    "& .rightContainer": {
      minWidth: "500px",
      minHeight: "300px",

      "@media (max-width: 500px)": {
        minWidth: "100%",
        // minHeight: '100%',
      },
    },
  },

  buttonContainer: {
    "& button": {
      width: "120px",
      padding: "0.5rem",
      background: "linear-gradient(92.86deg, #E1A200 0%, #FF5C00 100%)",
      fontSize: "14px",
      color: "white",
      fontWeight: 600,
    },
  },
  account: {
    zIndex: 300,
    fontSize: "32px",
    fontWeight: 600,
    color: "#E1A200",

    "@media (min-width: 500px)": {
      display: "none",
    },
  },
}));
