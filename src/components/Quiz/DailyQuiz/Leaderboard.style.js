import { makeStyles } from "@mui/styles";
import bannerImg from "assets/images/dailyquizleaderboardbannerbackground.png";
export const useStyle = makeStyles((theme) => ({
  container: {
    width: '100%',
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'column',
    backgroundColor: '#FFFFFF',
    paddingBottom: '100px',
  },
  banner:{
    backgroundImage: `url(${bannerImg})`,
    backgroundPosition: "center",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    height: "300px",
    overflow: "hidden",
    display: "flex",
    width:'100%',
    justifyContent: "center",
    alignItems: "center",
  },
  bannerContent:{
    height: '100%',
    width: '100%',
    display: 'flex',
    background: 'rgba(0, 0, 0, 0.82)',
    alignItems: 'center',
    flexDirection: 'column',
    justifyContent: 'center',
    "& span":{
      color: '#FFFFFF',
      fontSize: '300%',
      fontStyle: 'normal',
      fontFamily: 'Poppins',
      fontWeight: '700',
      lineHeight: '200%'
    }
  },
  bannerQuizDetails:{
    background: '#FE6000',
    borderRadius: '10px',
    width: '18%',
    aspectRatio: '3',
    "& .line": {
      border: '1px solid #FFF',
      height: '60%'
    },
    "@media (max-width: 1200px)": {
      width:  "20%"
    },
    "@media (max-width: 1000px)": {
      width:  "24%"
    },
    "@media (max-width: 900px)": {
      width:  "26%"
    },
    "@media (max-width: 700px)": {
      width:  "200px"
    },
  },
  bannerQuizDate:{
    flex:7,
    fontFamily: 'Poppins',
    fontStyle: 'normal',
    fontWeight: '700',
    fontSize: '270%',
    color: '#FFFFFF',
    "@media (max-width: 1200px)": {
      fontSize: '230%',
    },
  },
  bannerQuizCategory:{
    flex:5,
    fontFamily: 'Poppins',
    fontStyle: 'normal',
    color: '#FFFFFF'
  },
  bannerQuizCategoryText:{
    fontWeight: '600',
    fontSize: '180%',
    "@media (max-width: 1200px)": {
      fontSize: '160%',
    },
  },
  bannerQuizCategoryCount:{
    fontWeight: '500',
    fontSize: '120%',
    "@media (max-width: 1200px)": {
      fontSize: '100%',
    },
  },
  playerCard:{
    width: "50%",
    height: "86px",
    padding: "10px",
    "@media (max-width: 1200px)": {
      width: "60%",
    },
    "@media (max-width: 768px)": {
      width: "70%",
    },
    "@media (max-width: 576px)": {
      width: "80%",
    },
    "@media (max-width: 480px)": {
      width: "90%",
    }
  },
  playerContent:{
    border: "3px solid #FF5C00",
    height: "100%",
    borderRadius: "10px",
    overflow: "hidden"
  },
  playerRank:{
    flex:1,
    width: "100px",
    height: "100%",
    clipPath: "polygon(0 0, 100% 0, 66% 100%, 0% 100%)",
    background: "linear-gradient(151.76deg, #E2A000 8.78%, #FA6900 88.14%)",
    textAlign: "center",
    "& span": {
      color: "#FFFFFF",
      fontSize: "40px",
      fontStyle: "normal",
      fontFamily: "Poppins",
      fontWeight: "600",
      paddingRight: "20px"
    },
    "@media (max-width: 900px)": {
      paddingLeft:'1px',
      "& span": {
        fontSize: '36px',
        paddingRight: '18px',
        lineHeight: '60px'
      },
    },
    "@media (max-width: 700px)": {
      paddingLeft:'10px',
      clipPath: 'polygon(0 0, 100% 0, 56% 100%, 0% 100%)',
      "& span": {
        paddingRight: '25px',
      },
    },
    "@media (max-width: 450px)": {
      paddingLeft:'15px',
      clipPath: 'polygon(0 0, 100% 0, 56% 100%, 0% 100%)',
      "& span": {
        paddingRight: '25px',
      },
    }
  },
  playerAvatar:{
    flex: "1",
    position: "relative",
    "& .MuiAvatar-root":{
      position: "absolute",
      top: "50%",
      right: "0%",
      MsTransform: "translate(-50%, -50%)",
      transform: "translate(-50%, -50%)"
    },
    "@media (max-width: 450px)": {
      "& .MuiAvatar-root":{
        right: "-25%",
      }
    }
  },
  playerName:{
    flex: "2",
    color: "#000000",
    width: "100px",
    overflow: "hidden",
    fontSize: "26px",
    alignSelf: "center",
    fontStyle: "normal",
    fontFamily: "Poppins",
    fontWeight: "600",
    textOverflow: "ellipsis",
    "@media (max-width: 900px)": {
        fontSize: '20px',
    },
    "@media (max-width: 700px)": {
      fontSize: '170%'
    },
    "@media (max-width: 450px)": {
      fontSize: '150%'
    }
  },
  playerScore:{
    flex: '2',
    fontFamily: 'Poppins',
    fontStyle: 'normal',
    fontWeight: '600',
    fontSize: '30px',
    color: '#160D26',
    alignSelf: 'center',
    textAlign: 'end',
    "& span": {
      paddingRight: '10%'
    },
    "@media (max-width: 900px)": {
      fontSize: '24px',
    },
    "@media (max-width: 700px)": {
      fontSize: '240%'
    },
    "@media (max-width: 450px)": {
      fontSize: '180%'
    }
  },
  pagination:{
    "& button":{
      border: '2px solid #BCBCBC',
      color: '#C9C9C9',
      "& svg":{
        color: '#FA6900'
      },
      "&[aria-current=true]": {
        background: 'linear-gradient(135deg, #E39F00 0%, #FE5F00 100%)',
        color: '#FFFFFF'
      }
    }
  },
  loading:{
    fontSize:"30px"
  }
}));