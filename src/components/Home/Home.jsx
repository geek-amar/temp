import { Stack, Typography } from "@mui/material";
import Button from "@mui/material/Button";
import Left from "assets/images/left.svg";
import Middle from "assets/images/Middle.svg";
import Multiplayer from "assets/images/multiPlayer.webp";
import Right from "assets/images/rightIcon.svg";
import SinglePlayer from "assets/images/singlePlayer.webp";
import Top from "assets/images/top.svg";
import TwoPlayer from "assets/images/twoPlayer.webp";
import Ball from "common/ball/Ball";
import ikc from "assets/images/whiteIkc.svg";
import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { useMediaQuery } from "react-responsive";
import { useHistory } from "react-router-dom";
import Badge from "../../assets/images/badge.svg";
import FrontWave from "../../assets/images/blackWave.svg";
import BackWave from "../../assets/images/blueWave.svg";
import Cash from "../../assets/images/cash.svg";
import DaiyQuizCardBackground from "../../assets/images/dailyquizcardbackground.png";
import DailyQuizCardPerson from "../../assets/images/dailyquizperson.png";
import MobileBackground from "../../assets/images/defaultIconMobile.svg";
import MobileRect from "../../assets/images/homeShadow.svg";
import Win from "../../assets/images/win.svg";
import { useStyle } from "./home.style";
import { connect } from "react-redux";
import api from "api"
import { fetchAllCategories } from "store/actions/categoryAction";

function Home(props) {
  const classes = useStyle();
  const history = useHistory();
  const isLaptop = useMediaQuery({
    query: "(min-device-width: 1024px)",
  });
  const isSmallScreen = useMediaQuery({
    query: "(max-width: 800px)",
  });
  const isUserLoggedIn = useSelector((state) => state.Auth.isUserLoggedIn);

  const handleInviteFriendsClick = async () => {
    const shareData = {
      title: "Play with your friends and win cash!",
      text: "Play with your friends and win cash!",
      url: window.location.href,
    };

    try {
      await navigator.share(shareData);
    } catch (err) {}
  };
  const { dispatch, categories } = props;
  
  useEffect(() => {
    if (categories.category.length === 0) {
      dispatch(fetchAllCategories());
    }
    // eslint-disable-next-line
  }, [dispatch]);
  const cats = categories.category.reduce((acc, cur) => {
    acc[cur._id] = cur.name;
    return acc;
  }, {});

  return (
    <>
      <Ball top={"20%"} left={"-4%"} width={100} height={100} />
      <Ball top={"55%"} left={"0.2%"} width={20} />
      <div className={classes.container}>
        {isLaptop ? (
          <div>
            <div className={classes.backWave}>
              <img src={BackWave} alt="" />
            </div>
            <div className={classes.frontWave}>
              <img src={FrontWave} alt="" />
            </div>
          </div>
        ) : (
          <div>
            <div className={classes.mobileImage}>
              <img src={MobileBackground} alt="" />
            </div>
            <div className={classes.mobileImage + " " + classes.mobile}>
              <img src={MobileRect} alt="shadow" />
            </div>
          </div>
        )}
        <div className={classes.wrapper}>
          <div className={classes.field}>
            {isLaptop && (
              <div className={classes.imageContainer}>
                <div className="top">
                  <img src={Top} alt="top" />
                </div>
                <div className="mid">
                  <img src={Middle} className="mid" alt="middle" />
                  <Ball top={"-10%"} width={20} left={"35%"} />
                </div>
                <div className="left">
                  <img src={Left} alt="middle" />
                </div>
                <div className="right">
                  <img src={Right} alt="middle" />
                </div>

                <Ball bottom={"-25%"} width={50} right={"-10%"} />
              </div>
            )}
            <div className={classes.header}>
              <span className="top">
                <span className="first">Intelligence </span>Pays !
                <img src={Win} alt="" />
              </span>
              <span className="mid">
                It's real{" "}
                <span className={classes.cash}>
                  cash <img src={Cash} alt="" />
                </span>
                for winners!
              </span>
              <div className={classes.buttonContainer}>
                {!isUserLoggedIn ? (
                  <Button
                    className="button0"
                    onClick={() => {
                      history.push("/login");
                    }}
                  >
                    Login
                  </Button>
                ) : null}
                <Button className="button1" onClick={handleInviteFriendsClick}>
                  Invite Friends
                </Button>
              </div>
            </div>
          </div>
          {/* {!isLaptop && <img className="img" src={Badge} alt="" />} */}
          {isSmallScreen && (
            <DailyQuizCard classes={classes} history={history} categories={cats}/>
          )}
        </div>
      </div>
      {!isSmallScreen && <DailyQuizCard classes={classes} history={history} categories={cats}/>}
      <div className={classes.bottomContainer}>
        <div className={classes.bottomContainerHeader}>
          {/* {!isLaptop && <img src={Doddle} alt="" />} */}
          <span className="bottomHeader">Play Solo or Compete!</span>
          <span className="bottomDescription">Play more to win rewards...</span>
        </div>
        <div className={classes.playerContainer}>
          {isLaptop && <img className="win" src={Win} alt="" />}

          <div className={classes.Card}>
            {isLaptop && <img className="trophy" src={Badge} alt="" />}
            <div className="top">
              <span className="title">Single Player</span>
              <span>Play single player games to practice and earn points</span>
              <div className="buttonContainer">
                <Button
                  className="button0"
                  onClick={() => {
                    history.push("/quiz/category");
                  }}
                >
                  Play Now
                </Button>
                <Button className="button1" onClick={handleInviteFriendsClick}>
                  Invite Friends
                </Button>
              </div>
            </div>
            {isLaptop && (
              <div className="bottom">
                <img src={SinglePlayer} alt="" />
              </div>
            )}
          </div>
          <div className={classes.Card}>
            <div className="top">
              <span className="title">Two Player</span>
              <span>
                Invite a friend and compete in an extensive competitive quiz
              </span>
              <div className="buttonContainer">
                <Button
                  className="button0"
                  onClick={() => {
                    history.push("/play-with-friend");
                  }}
                >
                  Play Now
                </Button>
                <Button className="button1" onClick={handleInviteFriendsClick}>
                  Invite Friends
                </Button>
              </div>
            </div>
            {isLaptop && (
              <div className="bottom">
                <img src={TwoPlayer} alt="" />
              </div>
            )}
          </div>
          <div className={classes.Card}>
            <div className="top">
              <span className="title">MultiPlayer</span>
              <span>
                Play multiplayer challenges to find out if you are the best
              </span>
              <div className="buttonContainer">
                <Button
                  className="button0"
                  onClick={() => {
                    history.push("/multiplayer");
                  }}
                >
                  Play Now
                </Button>
                <Button className="button1" onClick={handleInviteFriendsClick}>
                  Invite Friends
                </Button>
              </div>
            </div>
            {isLaptop && (
              <div className="bottom">
                <img src={Multiplayer} alt="" />
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
}


const mapStateToProps = (state) => {
  return {
    categories: state.Categories,
    dispatch: state.dispatch,
  };
};

export default connect(mapStateToProps)(Home);

const DailyQuizCard = ({ classes, history, categories }) => {
  const [todysQuiz, setTodysQuiz] = useState();
  useEffect(() => {
    const fetchTodaysQuiz = async() => {
      try{
        const res = await api.ikcplay.getDailyQuiz();
        setTodysQuiz(res.payload?.[0]);
      }catch(e){}
    }
    fetchTodaysQuiz();
  },[])
  return (
    <>
    {todysQuiz && (
    <div className={classes.dailyQuizCard}>
      <div className={classes.dailyQuizCardBackground}>
        <img
          className={classes.dailyQuizCardBackgroundImage}
          src={DaiyQuizCardBackground}
          alt=""
        />
        <img
          className={classes.dailyQuizCardPersonImage}
          src={DailyQuizCardPerson}
          alt=""
        />
        <div className={classes.dailyQuizCardBlur}></div>
      </div>
      <div className={classes.dailyQuizContentContainer}>
        <Stack
          className={classes.dailyQuizContent}
          justifyContent="space-evenly"
          alignItems="flex-start"
          direction="column"
          height="100%"
        >
          <span className="h1">DAILY QUIZ</span>
          <span className="h2"> {`● ${categories?.[todysQuiz.categoryId] ?? "  "} ●`}</span>
          <span className="h3">Earn Cash Prize {"&"} Gift Vouchers</span>
          <Stack
            direction="row"
            width="60%"
            className={classes.dailyQuizContentButtons}
            spacing={2}
          >
            <button
              onClick={() => {
                history.push(`/dailyquiz/play/${todysQuiz._id}`);
              }}
            >
              <span>PLAY</span>
            </button>
            <button
              onClick={() => {
                history.push("/dailyquiz");
              }}
            >
              <span>EXPLORE</span>
            </button>
          </Stack>
        </Stack>
      </div>
    </div>
    )}
    </>
  );
};
