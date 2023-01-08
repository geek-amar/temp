import { makeStyles } from "@mui/styles";

export const useStyle = makeStyles((theme) => ({
  container: {
    // background: '#000000',
    padding: "2rem 8rem",
    minHeight: "70vh",
    "@media (max-width: 600px)": {
      padding: "2rem 2rem"
    },
    "@media (max-width: 500px)": {
      minHeight: "100%",
    },
  },
  wrapper: {
    position: "relative",

    "& .img": {
      transform: "scaleX(-1)",
      position: "absolute",
      right: "-10%",
      bottom: 0,
      maxWidth: "140px",
    },
    "@media (max-width: 500px)": {
      overflowX: (props) => (props.how ? "" : "hidden"),
    },
  },
  waveContainer: {},
  mobileImage: {
    position: "absolute",
    top: "-9%",
    left: 0,
    right: 0,
    "& img": {
      width: "100%",
      minHeight: "420px",
      objectFit: "cover",
    },
  },
  mobile: {
    opacity: "50%",
    top: "-5%",
  },

  frontWave: {
    position: "absolute",
    top: (props) => (props.phone ? "0%" : "-11%"),
    left: 0,
    "& img": {
      width: "100%",
      height: "100%",
    },
  },
  backWave: {
    position: "absolute",
    top: (props) => (props.phone ? "0%" : "-9%"),
    left: 0,
    "& img": {
      width: "100%",
      height: "100%",
    },
  },
  field: {
    padding: (props) => (props.how ? "0" : "8rem 7rem"),
    "@media (max-width:460px)": {
      padding: "1rem !important",
      marginTop: "5rem",
    },
    display: "flex",
    justifyContent: "space-between",
    alignItems: (props) => (props.how ? "start" : ""),
    zIndex: 5,
    position: "relative",
  },
  header: {
    display: "flex",
    flexDirection: "column",
    gap: "1rem",
    padding: (props) => (props.how ? "10rem 0 0 5rem" : "1.5rem"),

    "@media (max-width: 500px)": {
      padding: (props) => (props.how ? "0" : "1.5rem"),
    },
    fontSize: "20px",
    "& .first": {
      fontSize: (props) => (props.how ? "40px" : "60px"),
      padding: 0,
      color: (props) => (props.how ? "white" : "#E1A200"),
      fontWeight: 700,
      lineHeight: "50px",
      zIndex: 2,
      letterSpacing: "1px",
      "@media (max-width: 550px)": {
        fontSize: "30px !important",
        lineHeight: "30px",
      },
    },
    "& .top": {
      display: "flex",
      flexDirection: "column",
      gap: 0,
      fontSize: "40px",
      "@media (max-width: 650px)": {
        fontSize: "20px",
        marginLeft: (props) => (props.how ? "1rem" : ""),
      },
      color: "white",
      fontWeight: 900,
      position: "relative",
      "& img": {
        position: "absolute",
        top: (props) => (props.how ? "-90%" : "-45%"),
        maxWidth: "80px",
        left: (props) => (props.how ? "-20%" : "-13%"),
        zIndex: 1,
        "@media (max-width: 500px)": {
          maxWidth: "60px",
          top: "-25%",
          left: "-18%",
        },
      },
    },

    "& .mid": {
      color: "#969696",
      fontSize: "15px",
      "@media (max-width: 500px)": {
        color: "white",
      },
    },
  },
  buttonContainer: {
    display: "flex",
    gap: "10px",
    "& button": {
      padding: "0.5rem",
      width: "100px",
      fontSize: "10px",
      fontWeight: 600,
      color: "white",
      borderRadius: "3px",
    },
    "& .button1": {
      background: "linear-gradient(92.86deg, #E1A200 0%, #FF5C00 100%)",
    },
    "& .button0": {
      border: "1px solid white",
    },
  },
  cash: {
    color: "#0FC321",
    position: "relative",
    fontWeight: 600,
    "& img": {
      position: "absolute",
      width: "30px",
      height: "30px",
      objectFit: "contain",
      left: 0,
      top: "-15px",
    },
  },
  imageContainer: {
    position: "absolute",
    top: "10%",
    right: "5%",
    "& .mid": {
      maxWidth: "300px",
    },
    "& .top": {
      position: "absolute",
      right: "8%",
      top: "-2%",
      "& img": {
        maxWidth: "80px",
      },
    },

    "& .left": {
      position: "absolute",
      left: "-30%",
      bottom: 0,
      "& img": {
        maxWidth: "150px",
      },
    },

    "& .right": {
      position: "absolute",
      right: "-7%",
      bottom: "-18%",
      "& img": {
        maxWidth: "150px",
      },
    },
  },
  bottomContainer: {
    padding: "2rem 1rem",
    marginTop: "5rem",

    "@media (max-width: 500px)": {
      position: "relative",
      marginTop: "5rem",
      padding: "2rem",
      "& img": {
        position: "absolute",
        margin: "auto",
        left: 0,
        top: 0,
        bottom: 0,
        width: "100%",
        zIndex: 10,
      },
    },
  },
  bottomContainerHeader: {
    display: "flex",
    flexDirection: "column",
    textAlign: "center",

    "& .bottomHeader": {
      fontSize: "35px",
      fontWeight: 700,
      color: "#E1A200",

      "@media (max-width: 500px)": {
        fontSize: "25px",
      },
    },

    "& .bottomDescription": {
      color: "white",
      fontSize: "15px",
    },

    "@media (max-width: 500px)": {
      textAlign: "left",
      paddingLeft: "2rem",
    },
  },
  playerContainer: {
    display: "flex",
    justifyContent: "center",
    gap: "10px",
    position: "relative",
    marginTop: "5rem",
    "@media (max-width: 820px)": {
      flexDirection: "column",
      alignItems: "center",
    },
    "& .win": {
      position: "absolute",
      right: "0%",
      top: "-10%",
      width: "200px",
      transform: "scaleX(-1)",
    },
  },

  Card: {
    maxWidth: "350px",
    borderRadius: "7px",
    display: "flex",
    flexDirection: "column",
    gap: 0,
    position: "relative",

    "& .trophy": {
      position: "absolute",
      left: "-20%",
      top: "-20%",
      width: "160px",
    },

    "& .top": {
      display: "flex",
      background: "#ffffff",
      flexDirection: "column",
      alignItems: "center",
      gap: "10px",
      textAlign: "center",
      color: "black",
      padding: "3rem",
      fontSize: "14px",
      borderRadius: "15px 15px 0 0",
      "@media (max-width: 1024px)": {
        borderRadius: "15px",
      },

      "& .title": {
        color: "#E1A200",
        fontSize: "20px",
        fontWeight: 700,
        fontFamily: "inherit",
        textShadow: "none",
      },

      "& .buttonContainer": {
        display: "flex",
        gap: "5px",
        "& .button0": {
          width: "100px",
          background: "linear-gradient(92.86deg, #E1A200 0%, #FF5C00 100%)",
          color: "white",
          fontWeight: "bold",
        },

        "& .button1": {
          width: "100px",
          border: "1px solid #E1A200",
          color: "#E1A200",
        },
      },
    },
    "& .bottom": {
      width: "100%",
      padding: 0,
      borderRadius: "0 0 15px 15px",
      overflow: "hidden",
      "& img": {
        width: "100%",
        height: "auto",
        objectFit: "cover",
      },
    },
  },

  bottomPart: {
    display: "flex",
    flexDirection: "column",
    marginLeft: "4rem",

    "@media (max-width: 500px)": {
      background: "white",
      marginTop: "5rem",
      margin: "1rem",
      gap: "1rem",

      borderRadius: "10px",
    },
    gap: "4rem",
  },
  bottomPartHowToplay: {
    display: "flex",
    flexDirection: "column",
    marginLeft: "4rem",

    "@media (max-width: 500px)": {
      background: "white",
      marginTop: "1.5rem",
      margin: "1rem",
      gap: "1rem",

      borderRadius: "10px",
    },
    gap: "4rem",
  },
  buttonHeader: {
    "& button": {
      // width: "100px",
      height: "35px",
      color: "#e1a200",
      fontWeight: 700,
      fontSize: "10px",
      border: "2px solid #e1a200",

      "@media (max-width: 500px)": {
        color: "black",
      },
    },
    "& .color": {
      background: "linear-gradient(92.86deg, #E1A200 0%, #FF5C00 100%)",
      color: "white",
      border: "none",
    },
    display: "flex",
    gap: "10px",

    "@media (max-width: 500px)": {
      justifyContent: "center",
      padding: "2rem 1rem",
    },
  },
  content: {
    background: "#fff",
    padding: "3rem",
    maxWidth: "700px",
    display: "flex",
    flexDirection: "column",
    borderRadius: "10px",
    zIndex: 100,

    gap: "2rem",
    "& .header": {
      color: "#E1A200",
      textAlign: "left",
      fontSize: "15px !important",
      fontWeight: 700,
      padding: 0,
    },

    "& .des": {
      color: "#000000",
      fontSize: "12px",
      fontWeight: "600",
    },

    "@media (max-width: 500px)": {
      paddingTop: 0,
    },
  },

  alignMent: {
    padding: "0 5rem",
    position: "relative",
    "@media (max-width: 500px)": {
      minHeight: "120vh",
      padding: 0,
      "& .inner": {
        position: "absolute",
        top: 0,
      },
    },
  },

  dailyQuizCard: {
    margin: "auto",
    overflow: "hidden",
    position: "relative",
    aspectRatio: "2.65",
    maxWidth: '1060px',
    borderRadius: "15px",
    "@media (max-width: 1100px)": {
      height: undefined,
      width: "90%",
      aspectRatio: "2.4",
    },
    "@media (max-width: 800px)": {
      width: "100%",
      aspectRatio: "2.2",
    },
    "@media (max-width: 700px)": {
      aspectRatio: "2.2",
    },
    "@media (max-width: 600px)": {
      aspectRatio: "2.2",
    },
    "@media (max-width: 480px)": {
      aspectRatio: "2",
    },
  },
  dailyQuizCardBackground: {
    background: '#9A23BB',
    boxShadow: '0px 0px 15px rgba(0, 0, 0, 0.25)',
    height: '100%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    overflow: 'hidden'
  },
  dailyQuizCardBlur: {
    top: "0",
    left: "0",
    width: "96%",
    height: "91%",
    margin: "2%",
    zIndex: "2",
    position: "absolute",
    background: "rgba(0, 0, 0, 0.50)",
    borderRadius: "10px",
    "@media (max-width: 550px)": {
      height: "93%",
    }
  },
  dailyQuizCardBackgroundImage: {
    minWidth: "100%",
    minHeight: "100%",
    opacity: "0.54",
    barderRadius: "15px",
    backgroundBlendMode: "screen",
    "@media (max-width: 1100px)": {
    },
    "@media (max-width: 800px)": {
    },
    "@media (max-width: 600px)": {
    },
    "@media (max-width: 480px)": {
    },
  },
  dailyQuizCardPersonImage: {
    right: "-2%",
    bottom: "-13%",
    height: "135%",
    opacity: "0.9",
    zIndex: "1",
    position: "absolute",
    backgroundBlendMode: "darken",
  },
  dailyQuizContentContainer: {
    width: "100%",
    height: "100%",
    position: "absolute",
    top: "0",
    left: "0",
    zIndex: 3,
    padding: "2rem",
    "@media (max-width: 600px)": {
      padding: "1rem",
    }
  },
  dailyQuizContent: {
    padding: "0rem 3rem",
    "& .h3": {
      fontFamily: "Poppins",
      fontStyle: "normal",
      fontWeight: 500,
      fontSize: "20px",
      color: "#FFFFFF",
      "& .ikcImg": {
        height: '50%',
        marginTop: '-1%',
        aspectRatio: '1',
        "@media (max-width: 700px)": {
          height: '40%',
          marginTop: '-0.6%',
        },
        "@media (max-width: 500px)": {
          height: '33%',
        },
        "@media (max-width: 400px)": {
          height: '27%',
          marginTop: '0%',
        }
      }
    },
    "& .h1": {
      fontFamily: "Bungee Outline",
      fontStyle: "normal",
      fontWeight: 600,
      fontSize: "47px",
      lineHeight: "100%",
      color: "#FFFFFF",
      textShadow: "0 0 10px #fff",
    },
    "& .h2": {
      fontFamily: "'Paytone One'",
      fontStyle: "normal",
      fontWeight: "400",
      fontSize: "23px",
      letterSpacing: "0.03em",
      color: "#FFFFFF",
    },
    "@media (max-width: 1100px)": {
      "& .h1": {
        fontSize: "60px",
      },
      "& .h2": {
        fontSize: "38px",
      },
    },
    "@media (max-width: 800px)": {
      "& .h1": {
        fontSize: "42px",
      },
      "& .h2": {
        fontSize: "24px",
      },
    },
    "@media (max-width: 700px)": {
      "& .h1": {
        fontSize: '36px',
      },
      "& .h2": {
        fontSize: '20px',
      },
      "& .h3": {
        fontSize: '16px'
      },
    },
    "@media (max-width: 600px)": {
      "& .h1": {
        fontSize: "28px",
      },
      "& .h2": {
        fontSize: "20px",
      },
    },
    "@media (max-width: 500px)": {
      "& .h1": {
        fontSize: "26px",
      },
      "& .h2": {
        fontSize: "17px",
      },
      "& .h3": {
        fontSize: '13px'
      },
    },
    "@media (max-width: 400px)": {
      "& .h1": {
        fontSize: "22px",
      },
      "& .h2": {
        fontSize: "14px",
      },
      "& .h3": {
        fontSize: '11px'
      },
    },
  },
  dailyQuizContentButtons: {
    "& button": {
      background: "#FFFFFF",
      width: "170px",
      height: "55.9px",
      borderRadius: "15px",
      fontWeight: 700,
      border: "0px",
      fontStyle: "normal",
      "& span": {
        fontFamily: "Poppins",
        fontSize: "24px",
      },
      "@media (max-width: 1100px)": {
        width: "120px",
        height: "44px",
        borderRadius: "10px",
        fontWeight: 700,
        "& span": {
          fontSize: "18px",
        },
      },
      "@media (max-width: 800px)": {
        width: "114px",
        height: "35px",
        "& span": {
          fontSize: "10px",
        },
      },
      "@media (max-width: 600px)": {
        width: "90px",
        height: "28px",
      },
    },
  },
}));
