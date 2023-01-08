import { makeStyles } from "@mui/styles";
import bannerImg from "assets/images/dailyquizpagebannerbackground.png";
export const useStyle = makeStyles((theme) => ({
  container: {
    backgroundColor: "#FFFFFF",
  },
  //
  banner: {
    backgroundImage: `url(${bannerImg})`,
    backgroundPosition: "center",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    height: "300px",
    overflow: "hidden",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    "& .back": {
      position: "absolute",
      top: "0",
      width: "100%",
      objectFit: "cover",
      zIndex: 0,
    },
    "@media (max-width: 600px)": {
      borderRadius: "0px 0px 15px 15px",
    },
  },
  ///
  bannerContent: {
    display: "flex",
    alignItems: "center",
    width: "100%",
  },
  bannerTitle: {
    fontSize: "2.5rem",
    fontWeight: "bold",
    color: "#FFFFFF",
    padding: "2.5rem",
  },
  ////
  selectContainer: {
    borderRadius: "15px",
    overflow: "hidden",
    width: "90%",
    maxWidth: "650px",
    background: "#FFFFFF",
    aspectRatio: 9,
    "& button": {
      width: "inherit",
      border: "0px",
      height: "100%",
    },
    "& span": {
      color: "#676767",
      fontFamily: "Poppins",
      fontStyle: "normal",
      fontWeight: 600,
      fontSize: "25px",
      lineHeight: "30px",
    },
    "@media (max-width: 1000px)": {
      borderRadius: "10px",
      "& span": {
        fontSize: "22px",
      },
      aspectRatio: 9,
    },
    "@media (max-width: 850px)": {
      "& span": {
        fontSize: "20px",
      },
      aspectRatio: 8,
    },
    "@media (max-width: 600px)": {
      borderRadius: "5px",
      "& span": {
        fontSize: "16px",
      },
      aspectRatio: 8,
    },
    "@media (max-width: 460px)": {
      "& span": {
        fontSize: "14px",
      },
    },
    "@media (max-width: 340px)": {
      "& span": {
        fontSize: "12px",
      },
      aspectRatio: 8,
    },
    "& .selectedDay": {
      background: "linear-gradient(111.85deg, #E59D00 0%, #FC6600 100%)",
      "& span": {
        color: "#FFFFFF",
      },
    },
  },
  first: {},
  last: {},
  //
  mainContent: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    padding: "3rem 10rem",
    "@media (max-width: 1000px)": {
      padding: "3rem 5rem",
    },
    "@media (max-width: 900px)": {
      padding: "3rem 7rem",
    },
    "@media (max-width: 600px)": {
      padding: "3rem 2rem 0rem 2rem",
    },
    "@media (max-width: 460px)": {
      padding: "3rem 0rem 0rem 0rem",
    },
  },
  //
  billboardCard: {
    width: "100%",
    position: "relative",
    maxWidth: "1430px",
    overflow: "hidden",
    borderRadius: "15px",
    marginBottom: "40px",
    aspectRatio: 3.5,
    "@media (max-width: 1000px)": {
      aspectRatio: 3,
    },
    "@media (max-width: 800px)": {
      aspectRatio: 2.7,
    },
    "@media (max-width: 600px)": {
      aspectRatio: 2.4,
    },
  },
  ///
  billboardCardBackground: {
    color: "rgba(51, 46, 100, 0.88)",
    borderRadius: "15px",
  },
  ////
  billboardCardBackgroundImage: {
    height: "100%",
    objectFit: "cover",
    barderRadius: "15px",
  },
  billboardCardIcon: {
    right: "28px",
    bottom: "-5%",
    height: "120%",
    zIndex: "3",
    position: "absolute",
    borderRadius: "15px",
    "@media (max-width: 600px)": {
      right: "10px",
    },
    "@media (max-width: 460px)": {
      right: "0px",
    },
  },
  billboardCardBlur: {
    top: "0",
    left: "0",
    width: "100%",
    height: "100%",
    zIndex: "2",
    position: "absolute",
    background: "rgba(51, 46, 100, 0.88)",
  },
  ////
  ///
  billboardContentContainer: {
    top: "0",
    left: "0",
    width: "100%",
    height: "100%",
    padding: "2% 5%",
    zIndex: "4",
    position: "absolute",

    "@media (max-width: 1000px)": {
      padding: "2% 3%",
    },
    "@media (max-width: 800px)": {
      padding: "2% 2%",
    },
    "@media (max-width: 600px)": {
      padding: "2% 1%",
    },
  },
  billboardContent: {
    height: "100%",
    paddingLeft: "20px",
  },
  billboardContentText: {
    "& span": {
      fontFamily: "Poppins",
      fontStyle: "normal",
      color: "#FFFFFF",
    },
  },
  billboardBigTitle: {
    fontSize: "40px",
    fontWeight: "700",
    lineHeight: "50px",
    "@media (max-width: 1200px)": {
      fontSize: "32px",
    },
    "@media (max-width: 1000px)": {
      fontSize: "32px",
    },
    "@media (max-width: 800px)": {
      fontSize: "26px",
      lineHeight: "25px",
    },
    "@media (max-width: 600px)": {
      fontSize: "20px",
    },
  },
  billboardTitle: {
    fontSize: "34px",
    fontWeight: "500",
    lineHeight: "40px",
    "@media (max-width: 1200px)": {
      fontSize: "28px",
    },
    "@media (max-width: 1000px)": {
      fontSize: "28px",
    },
    "@media (max-width: 800px)": {
      fontSize: "20px",
    },
    "@media (max-width: 600px)": {
      fontSize: "18px",
      lineHeight: "10px",
    },
  },
  billboardSubtitle: {
    width: "fit-content",
    padding: "6px",
    fontSize: "25px",
    fontWeight: "500",
    lineHeight: "30px",
    borderRadius: "5px",
    "@media (max-width: 1200px)": {
      fontSize: "22px",
      lineHeight: "26px",
      padding: "6px",
    },
    "@media (max-width: 1000px)": {
      fontSize: "20px",
      lineHeight: "22px",
      padding: "5px",
    },
    "@media (max-width: 800px)": {
      fontSize: "16px",
      lineHeight: "20px",
      padding: "3px",
    },
    "@media (max-width: 600px)": {
      fontSize: "14px",
      lineHeight: "12px",
      padding: "2px",
    },
  },
  quizItem: {
    maxWidth: "660px",
    width: "fit-content",
    padding: "20px",
    height: "120px",
    background: "#FFFFFF",
    boxShadow: "0px 8px 25px rgba(0, 0, 0, 0.05)",
    borderRadius: "15px",
    margin: "auto",
    "@media (max-width: 900px)": {
      maxWidth: "500px",
      width: "fit-content",
      height: "100px",
    },
    "@media (max-width: 600px)": {
      maxWidth: "310px",
      height: "94px",
    },
  },
  quizItemContent: {
    "& span": {
      fontFamily: "Poppins",
      fontStyle: "normal",
      color: "#050505",
      "@media (min-width: 1000px)": {
        margin: "5px 0",
      },
      "@media (min-width: 1500px)": {
        margin: "8px 0",
      },
    },
    "& .h1": {
      fontSize: "35px",
      fontWeight: "600",
      lineHeight: "30px",
      "@media (max-width: 1500px)": {
        fontSize: "30px",
      },
      "@media (max-width: 1200px)": {
        fontSize: "25px",
      },
      "@media (max-width: 600px)": {
        fontSize: "20px",
      },
    },
    "& .h2": {
      fontSize: "26px",
      fontWeight: "500",
      lineHeight: "30px",
      background:
        "-webkit-linear-gradient(95.16deg, #E39E00 2.14%, #FE6000 100%)",
      WebkitBackgroundClip: "text",
      WebkitTextFillColor: "transparent",
      "@media (max-width: 1500px)": {
        fontSize: "20px",
      },
      "@media (max-width: 1200px)": {
        fontSize: "18px",
      },
      "@media (max-width: 600px)": {
        fontSize: "14px",
      },
    },
  },
  quizItemAction: {
    "& button": {
      width: "195px",
      border: "none",
      height: "60px",
      background: "linear-gradient(95.16deg, #E39E00 2.14%, #FE6000 100%)",
      borderRadius: "5px",
      "@media (max-width: 1500px)": {
        width: "180px",
        height: "65px",
      },
      "@media (max-width: 1200px)": {
        width: "150px",
        height: "45px",
      },
      "@media (max-width: 600px)": {
        width: "100px",
        height: "35px",
      },
      "& span": {
        color: "#FFFFFF",
        fontSize: "20px",
        fontStyle: "normal",
        fontFamily: "Poppins",
        fontWeight: "600",
        lineHeight: "30px",
        "@media (max-width: 1500px)": {
          fontSize: "16px",
        },
        "@media (max-width: 1200px)": {
          fontSize: "12px",
        },
        "@media (max-width: 600px)": {
          fontSize: "10px",
        },
      },
    },
  },
  //
  todaysPrizesContainer: {
    "& .PrizesTitle": {
      textAlign: "center",
      paddingBottom: "20px",
      "& span": {
        fontFamily: "Poppins",
        fontStyle: "normal",
        fontWeight: "600",
        fontSize: "28px",
        lineHeight: "30px",
        margin: "0px auto",
      },
      "& .underLine": {
        display: "block",
        width: "100px",
        height: "3px",
        background: "#000000",
        margin: "0px auto",
      },
      "@media (max-width: 800px)": {
        textAlign: "left",
        "& span": {
          fontSize: "24px",
        },
        "& .underLine": {
          margin: "0px",
          width: "54px",
        },
      },
    },
  },
  //
  listQuizContainer: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    width: "70%",
    "@media (max-width: 1300px)": {
      width: "80%",
    },
    "@media (max-width: 1050px)": {
      width: "90%",
    },
    "@media (max-width: 800px)": {
      width: "100%",
    },
  },
  todaysQuizContainer: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    width: "70%",
    "@media (max-width: 1300px)": {
      width: "80%",
    },
    "@media (max-width: 1050px)": {
      width: "90%",
    },
    
    "& button": {
      width: '150px',
      border: 'none',
      height: '55px',
      background: 'linear-gradient(95.16deg, #E39E00 2.14%, #FE6000 100%)',
      borderRadius: '5px',
      position: 'absolute',
      bottom: '5%',
      left: '50%',
      transform: 'translate(-50%, 0)',
      "@media (max-width: 1500px)": {
        width: "150px",
        height: "55px",
      },
      "@media (max-width: 1200px)": {
        width: "130px",
        height: "45px",
      },
      "@media (max-width: 600px)": {
        width: "100px",
        height: "35px",
      },
      "& span": {
        color: "#FFFFFF",
        fontSize: "2em",
        "@media (max-width: 900px)": {
          fontSize: "1.5em",
        }
      },
    },
  },
  prizeItemsContainer: {
    marginTop: "20px",
    display: "flex",
    justifyContent: "space-evenly",
  },
  //
  prizeItem: {
    width: '100%',
    overflow: 'hidden',
    borderRadius: '15px',
    "& img":{
      overflow: 'hidden',
      objectFit: 'cover',
      height: '100%'
    },
    "& .prizeReward": {
      "& span": {
        color: 'rgba(0, 0, 0, 0.77)',
        fontSize: '26px',
        textAlign: 'center',
        fontFamily: 'Poppins',
        fontWeight: '700',
        lineHeight: '28px',
        "@media (max-width: 900px)": {
          fontSize: '20px',
          lineHeight: '100%',
        },
        "@media (max-width: 800px)": {
          fontSize: '1.5em',
        }
      },
    }
  },
  prizeItemContentHorizontal: {
    width: '100%',
    display: 'flex',
    aspectRatio: '3.5',
    flexDirection: 'row',
    "& .prizeImg": {
      verticalAlign: 'middle',
      borderStyle: 'none',
      flex: '1'
    },
    "& .prizeContent": {
      width: '25%',
      height: '100%',
      display: 'flex',
      overflow: 'hidden',
      background: '#FFEEE5',
      alignItems: 'center',
      flexDirection: 'column',
      "& .prizePosition": {
        flex: '1',
        display: 'flex',
        alignItems: 'center',
        flexDirection: 'row',
        background: '#E59B00',
        width: '100%',
        justifyContent: 'center',
        "& .prizeText": {
          color: '#000000',
          fontSize: '20px',
          fontFamily: 'Poppins',
          fontWeight: '600',
        },
      },
      "& .prizeReward": {
        flex: '1',
        width: '100%',
        height: '100%',
        display: 'flex',
        alignItems: 'center',
        flexDirection: 'column',
        justifyContent: 'center',
      },
    },
  },
  prizeItemContentVertical: {
    width: '100%',
    display: 'flex',
    aspectRatio: '1',
    flexDirection: 'column',
    "& .prizeImg": {
      verticalAlign: 'middle',
      borderStyle: 'none',
      flex: '4'
    },
    "& .prizeContent": {
      width: '100%',
      flex: '1',
      display: 'flex',
      overflow: 'hidden',
      background: '#FFEEE5',
      alignItems: 'center',
      flexDirection: 'row',
      "& .prizePosition": {
        flex: '2',
        display: 'flex',
        alignItems: 'center',
        flexDirection: 'row',
        background: '#E59B00',
        width: '100%',
        height: '100%',
        justifyContent: 'center',
        "& .prizeText": {
          color: '#000000',
          fontSize: '20px',
          fontFamily: 'Poppins',
          fontWeight: '600',
        },
      },
      "& .prizeReward": {
        flex: '5',
        width: '100%',
        height: '100%',
        display: 'flex',
        alignItems: 'center',
        flexDirection: 'column',
        justifyContent: 'center',
        "@media (max-width: 500px)": {
          "& span": {
            fontSize: '1.2em',
          }
        }
      },
    },
  },
  loading:{
    fontSize:"30px"
  }
}));
