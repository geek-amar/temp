import { makeStyles } from "@mui/styles";

export const useStyle = makeStyles((theme) => ({
  container: {
    minHeight: "70vh",
    width: "100%",
  },
  ResultContainer: {
    width: "100%",
    "& .mobileLogos": {
      "@media (min-width: 500px)": {
        display: "none",
      },
      "& img": {
        position: "absolute",
        top: 0,
        left: 0,
      },
      "& .imageMobile1": {
        zIndex: 5,
        opacity: "80%",
        left: 0,
        width: "100%",
        transform: "scaleX(-1)",
      },
      "& .imageMobile": {
        zIndex: 2,
        transform: "scaleX(-1)",
        width: "100%",
      },
    },
  },
  wrapper: {
    display: "flex",
    padding: "0 0rem",
    justifyContent: "space-around",
    position: "relative",
    alignItems: "center",
    zIndex: 200,
    marginTop: "3rem",
    "@media (max-width: 500px)": {
      marginBottom: "3rem",
      justifyContent: "center",
    },
  },
  header: {
    //   padding: '4rem 0 0 4rem',
    zIndex: 10,
    "& span": {
      display: "block",
      marginBottom: "5px",
      fontSize: "20px",
      fontWeight: "600",
      color: "white",
      "@media (max-width: 500px)": {
        fontSize: "12px",
      },
    },
    "& .title_result": {
      marginTop: "-3rem",
      fontSize: "25px !important",
      textAlign: "center",
      paddingBottom: "3rem",
      fontWeight: "600",
      color: "#E1A200",
      display: "none",
      "@media (max-width: 500px)": {
        fontSize: "12px",
        display: "block",
      },
    },
    "@media (max-width: 500px)": {
      //   padding: '1rem 0 5rem 4rem',
    },
    "& .title": {
      fontSize: "30px",
      color: "#E1A200",
      display: "none",
      "@media (max-width: 500px)": {
        fontSize: "20px",
        display: "block",
      },
    },
  },
  imageContainer: {
    zIndex: 10,
    "& .image": {
      width: "480px",
      "@media (max-width: 500px)": {
        display: "none",
        visibility: "hidden",
      },
    },
  },
  scoreContainer: {
    position: "relative",
    marginTop: "4rem",
    "& .score": {
      border: "2px solid #E1A200",
      minWidth: "300px",
      minHeight: "200px",
      position: "relative",
      background: "#0F0F0F",
      zIndex: 0,
      "& .shadow": {
        position: "absolute",
        top: "-40%",
        left: 0,
        right: "0",
        margin: "auto",
        width: "100%",
      },
      "& .innerScore": {
        textAlign: "center",
        marginTop: "2rem",

        "& .win": {
          fontWeight: 900,
          color: "#00AB11",
        },
        "& .lose": {
          fontWeight: 900,
          color: "#FF6868",
        },
      },

      "@media (max-width: 500px)": {
        minWidth: "250px",
        minHeight: "170px",

        "& .innerScore": {
          textAlign: "center",
          marginTop: "0.5rem",
        },
      },
    },

    "& .buttonContainer": {
      display: "flex",
      justifyContent: "space-between",
      position: "absolute",
      bottom: "-20%",
      left: "-10%",
      minWidth: "360px",
      gap: "15px",

      "@media (max-width: 500px)": {
        minWidth: "300px",
        bottom: "-20%",
      },
    },
    "& .titleScore": {
      fontSize: "22px",
      fontWeight: 700,
      color: "#E1A200",
      margin: 0,
    },
  },
  resultImages: {
    position: "relative",
    display: "flex",
    justifyContent: "center",
    top: "10%",
    left: 0,
    right: 0,
    margin: "auto",
    zIndex: 1,
    marginTop: "-4rem",
  },
  bottomScore: {
    border: "2px solid #E1A200",
    textAlign: "center",
    padding: "0.5rem 2rem",
    background: "#0F0F0F",
    width: "100%",

    "@media (max-width: 500px)": {},
  },

  bottom: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    marginTop: "5rem",
    "& .leaderBoard": {
      fontSize: "20px",
      color: "white",
      fontWeight: 600,
      paddingBottom: "2rem",
    },
  },
  leader: {},
  label: {
    minWidth: "380px",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "1rem",
    borderRadius: "50px",
    background: "linear-gradient(92.86deg, #E1A200 0%, #FF5C00 100%)",
    "& span": {
      color: "white",
      fontSize: "15px",
    },

    "& .name": {
      color: "#000",
      fontWeight: 700,
    },
  },

  label2: {
    "&:hover": {
      borderColor: "#E1A200",
    },
    border: "1px solid #000",
    minWidth: "380px",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "1rem",
    borderRadius: "50px",
    "& span": {
      color: "white",
      fontSize: "15px",
    },

    "& .name": {
      color: "#E1A200",
      fontWeight: 700,
    },
    marginTop: "1rem",
  },
}));
