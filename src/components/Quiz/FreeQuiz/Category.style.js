import { makeStyles } from "@mui/styles";

export const useStyle = makeStyles((theme) => ({
  container: {
    marginTop: "3rem",
    "& .front": {
      position: "absolute",
      top: "0%",
      width: "100%",
      objectFit: "cover",
      zIndex: 5,
    },
    "& .back": {
      position: "absolute",
      top: "0%",
      width: "100%",
      objectFit: "cover",
      zIndex: 1,
    },
    "@media (max-width: 500px)": {
      "& .front": {
        display: "none",
      },
      "& .back": {
        display: "none",
      },
    },

    "& .mobileLogos": {
      "@media (min-width: 500px)": {
        display: "none",
      },
      "& img": {
        position: "absolute",
        top: 0,
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
    padding: "3rem 10rem",
    justifyContent: "space-between",
    position: "relative",

    "@media (max-width: 500px)": {
      padding: 0,
      marginBottom: "3rem",
    },
  },
  imageContainer: {
    position: "relative",
    zIndex: 10,
    "& .image": {
      width: "400px",
      "@media (max-width: 500px)": {
        display: "none",
      },
    },
  },
  header: {
    padding: "4rem 0 0 4rem",

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
    "@media (max-width: 500px)": {
      padding: "1rem 0 5rem 4rem",
    },
    "& .title": {
      fontSize: "30px",
      color: "#E1A200",
      position: "relative",
      "@media (max-width: 500px)": {
        fontSize: "25px",
      },

      "& img": {
        position: "absolute",
        left: "-5%",
        top: "-90%",
        transform: "scaleX(-1)",
        zIndex: -1,

        "@media (max-width: 500px)": {
          display: "none",
        },
      },
    },
  },
  cards: {
    position: "relative",
    display: "grid",
    rowGap: "15px",
    columnGap: "0px",
    gridTemplateColumns: "auto auto auto auto",
    padding: "2rem 14rem",

    "& a": {
      textDecoration: "none",
      margin: 0,
    },

    "@media (max-width: 1000px)": {
      gridTemplateColumns: "auto auto auto",
    },

    "@media (max-width: 780px)": {
      gridTemplateColumns: "auto auto",
      justifyContent: "center",
      gap: "10px",
      padding: "2rem",
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
}));
