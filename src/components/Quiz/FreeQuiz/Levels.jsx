// import "../styles/components/PlayNow.css";
import { Button } from "@material-ui/core";
import { CircularProgress, Stack } from "@mui/material";
import LinearProgress from "@mui/material/LinearProgress";
import api from "api";
import Bulb from "assets/images/bulb.svg";
import Lock from "assets/images/lock.svg";
import SinglePlayerMobileLogo from "assets/images/mobileSingleLogo.svg";
import SinglePlayerMobile from "assets/images/mobileSinglePlayer.svg";
import Play from "assets/images/play.svg";
import singlePageBackground from "assets/images/singlePageBackground.svg";
import singlePageBackgroundBlue from "assets/images/singlePageBackgroundBlue.svg";
import SinglePlayer from "assets/images/singleQuizLogo.svg";
import Level1 from "assets/levels/1.webp";
import Level10 from "assets/levels/10.webp";
import Level2 from "assets/levels/2.webp";
import Level3 from "assets/levels/3.webp";
import Level4 from "assets/levels/4.webp";
import Level5 from "assets/levels/5.webp";
import Level6 from "assets/levels/6.webp";
import Level7 from "assets/levels/7.webp";
import Level8 from "assets/levels/8.webp";
import Level9 from "assets/levels/9.webp";
import Ball from "common/ball/Ball";
import BuyIkc from "common/buyIkc/BuyIkc";
import ErrorPopup from "common/ErrorPopup/ErrorPopup";
import Model from "components/Model/Model";
import useErrorPopup from "hooks/useErrorPopup";
import React, { useEffect, useState } from "react";
import { connect, useDispatch } from "react-redux";
import { useHistory, useLocation, useParams } from "react-router-dom";
import { updateUserInfo } from "store/actions/authAction";
import { useStyle } from "./Level.style";

const icons = [
  Level1,
  Level2,
  Level3,
  Level4,
  Level5,
  Level6,
  Level7,
  Level8,
  Level9,
  Level10,
  Level10,
  Level10,
  Level10,
];

function ClassicLevels(props) {
  const dispatch = useDispatch();
  const [unlocking, setUnlocking] = React.useState(false);
  const [unlockData, setunlockData] = React.useState({});
  const { openPopup, closePopup, popupOpen, popRef, message } = useErrorPopup();
  const { user } = props.Auth || {};
  const { categoryId } = useParams();
  const classes = useStyle();
  const location = useLocation();
  const history = useHistory();
  const [levels, setLevels] = useState([]);
  const [access, setAccess] = useState(0);
  const [loader, setLoader] = useState(false);
  const [buy, setBuy] = useState(0);
  const [scoreToUnlockNextLevel, setScoreToUnlockNextLevel] = useState({
    toUnlock: 150000,
    neededScore: 150000,
  });

  React.useEffect(() => {
    if (!buy) {
      dispatch(updateUserInfo());
    }
  }, [buy, dispatch]);

  useEffect(() => {
    setLoader(true);
    api.ikcplay
      .getLevelsForCategory(categoryId)
      .then((res) => {
        let data = res.payload;
        setAccess(data.maxLevelUnolocked - 1);
        setLevels(data.quizzes);
        setScoreToUnlockNextLevel({
          toUnlock: data.scoreToUnlockNextLevel,
          neededScore: data.totalScoreToUnlockNextLevel,
        });
        setLoader(false);
      })
      .catch((error) => {
        openPopup(error.message);
        setLevels([]);
        setLoader(false);
      });
  }, []);

  // useEffect(() => {
  //   openPopup({ title: 'Error', message: 'Something went wrong' });
  // }, []);

  const handleLevelClick = (item, idx) => {
    if (access + 1 >= item.level) {
      history.push(`/quiz/play/${item._id}`);
    } else {
      setunlockData({ ...item, index: idx });
      setUnlocking(true);
    }
  };

  const handleLevelUnlock = async () => {
    setUnlocking(false);
    setunlockData({});

    setLoader(true);

    try {
      let res = await api.ikcplay.fetch(
        `/singlePlayerQuiz/unlockLevel?categoryId=${categoryId}`
      );

      openPopup(res.message, "Success");

      if (!res.error) {
        api.ikcplay
          .getLevelsForCategory(categoryId)
          .then((res) => {
            let data = res.payload;
            setAccess(data.maxLevelUnolocked - 1);
            setScoreToUnlockNextLevel({
              toUnlock: data.scoreToUnlockNextLevel,
              neededScore: data.totalScoreToUnlockNextLevel,
            });
            setLevels(data.quizzes);
          })
          .catch((error) => {
            openPopup(error.message);
            setLevels([]);
          });
      }
    } catch (error) {
      openPopup(error.message);
    } finally {
      setLoader(false);
    }
  };

  return (
    <div className={classes.container}>
      <Ball width={100} left={"-4%"} top={"20%"} />
      <img
        src={singlePageBackground}
        className="front"
        alt="singlePageBackground"
      />
      <img
        src={singlePageBackgroundBlue}
        className="back"
        alt="singlePageBackgroundBlue"
      />
      <div className="mobileLogos">
        <img alt="" className="imageMobile1" src={SinglePlayerMobile} />
        <img alt="" className="imageMobile" src={SinglePlayerMobileLogo} />
      </div>
      <div className={classes.wrapper}>
        <div className={classes.header}>
          <span className="title">Select Level</span>
          <span>Play and unlock levels to receive more rewards</span>
        </div>
        <div className={classes.imageContainer}>
          <Ball width={30} />
          <img alt="" className="image" src={SinglePlayer} />
        </div>

        <Ball width={40} right={"5%"} bottom={0} />
      </div>
      <div className={classes.highlightwrapper}>
        <div className={classes.hightlight}>
          <div>
            <img
              src={icons[access + 1]}
              alt=""
              style={{ margin: "auto 1rem" }}
              width={"auto"}
              height={80}
            />
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
              height: "100%",
              flexGrow: 1,
            }}
          >
            <div className={classes.heading}>Level {access + 1} unlocked</div>
            <div className={classes.subheading}>
              Score {scoreToUnlockNextLevel.toUnlock} points to unlock the{" "}
              {access + 2}
              <sup>{getSuffix(access + 2)}</sup> level
            </div>
            <div>
              <LinearProgress
                style={{
                  height: 10,
                  borderRadius: 5,
                }}
                variant="determinate"
                value={
                  100 -
                  (scoreToUnlockNextLevel.toUnlock /
                    scoreToUnlockNextLevel.neededScore) *
                    100
                }
              />
            </div>
          </div>
        </div>
      </div>
      <div className={classes.cards}>
        <div className={classes.topbar}>
          <span className={classes.button} onClick={() => setBuy(1)}>
            <img src={Bulb} width={25} alt="" />
            {user?.hints}
          </span>
          <span>Select Level</span>
          <span style={{ minWidth: "50px" }}></span>
        </div>
        <Ball width={30} left="0.3%" />
        {!loader ? (
          levels.map((items, index) => {
            return (
              <div
                key={items._id + index}
                onClick={() => handleLevelClick(items, index)}
                className={classes.card}
              >
                <div className="imageSide">
                  <img
                    src={icons[index]}
                    alt="unlock"
                    height={70}
                    width={"auto"}
                  />
                </div>
                {/**{access + 1 >= items.level ? (
                  <img src={Unlock} alt="unlock" />
                ) : (
                  <img src={Lock} alt="lock" />
                )} */}

                <div className={classes.bottomContainer}>
                  <div
                    className={`description  ${
                      access + 1 >= items.level ? "colorTitle" : ""
                    }`}
                  >
                    {access + 1 === index ? (
                      <small className={classes.unlockText}>
                        Click to unlock
                      </small>
                    ) : (
                      ""
                    )}
                    <span className="title">Level {items.level}</span>
                    <span className="subtitle">
                      {items?.metadata?.maxQuestions} Questions
                    </span>
                  </div>
                  <Button
                    className={
                      "buttoncontainer" +
                      " " +
                      (access + 1 >= items.level ? "unlock" : "lock")
                    }
                  >
                    <img
                      src={access + 1 >= items.level ? Play : Lock}
                      alt=""
                      width={20}
                      height={20}
                    />
                  </Button>
                </div>
              </div>
            );
          })
        ) : (
          <>
            <Stack
              sx={{
                minWidth: "350px",
                minHeight: "100px",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <CircularProgress color="warning" size={40} />
            </Stack>
          </>
        )}
      </div>

      {unlocking ? (
        <Model
          description={
            access + 1 === unlockData.index
              ? `Do you wish to unlock this level using IKC?`
              : `Unlock Level ${access + 2} first !`
          }
          header={"Unlock Level " + (unlockData.index + 1)}
          rightButton={access + 1 === unlockData.index && "UNLOCK"}
          leftButton={"CLOSE"}
          funOnRightButton={handleLevelUnlock}
          funOnLeftButton={() => {
            setUnlocking(false);
            setunlockData(null);
          }}
        />
      ) : null}

      {buy && <BuyIkc onError={openPopup} close={setBuy} />}
      <ErrorPopup popRef={popRef} closePopup={closePopup} popupdata={message} />
    </div>
  );
}

function getSuffix(index) {
  switch (index) {
    case 1:
      return "st";
    case 2:
      return "nd";
    case 3:
      return "rd";
    default:
      return "th";
  }
}

const mapStateToProps = (state) => {
  return state;
};
export default connect(mapStateToProps)(ClassicLevels);
