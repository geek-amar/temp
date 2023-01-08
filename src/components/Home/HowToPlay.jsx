import Button from "@mui/material/Button";
import FrontImage from "assets/images/frontImage.svg";
import Ball from "common/ball/Ball";
import React from "react";
import { connect } from "react-redux";
import { useMediaQuery } from "react-responsive";
import FrontWave from "../../assets/images/blackWave.svg";
import BackWave from "../../assets/images/blueWave.svg";
import MobileBackground from "../../assets/images/defaultIconMobile.svg";
import MobileRect from "../../assets/images/homeShadow.svg";
import Win from "../../assets/images/win.svg";
import { useStyle } from "./home.style";

function HowToPlay({ categories, dispatch }) {
  const classes = useStyle({
    how: true,
    button: 1,
  });
  const [activeIdx, setActiveIdx] = React.useState(0);
  const isLaptop = useMediaQuery({
    query: "(min-device-width: 1024px)",
  });

  return (
    <React.Fragment>
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

        <div className={classes.alignMent}>
          <div className="inner">
            <div className={classes.wrapper}>
              <div className={classes.field}>
                <div className={classes.header}>
                  <span className="top">
                    <span className="first">How to Play</span>
                    <img src={Win} alt="" />
                  </span>
                </div>
                {isLaptop && (
                  <div className={classes.right}>
                    <Ball width={20} top={"10%"} left="30%" />
                    <img
                      className="images"
                      src={FrontImage}
                      alt=""
                      width={400}
                    />
                    <Ball width={20} bottom="5%" left="-15%" />
                  </div>
                )}
              </div>
            </div>

            <div className={classes.bottomPartHowToplay}>
              <div className={classes.buttonHeader}>
                {["Single player", "Two Player", "Multiplayer"].map(
                  (item, index) => (
                    <Button
                      className={index === activeIdx ? "color" : ""}
                      key={index}
                      onClick={() => setActiveIdx(index)}
                    >
                      {item}
                    </Button>
                  )
                )}
              </div>
              <div className={classes.content}>
                <div className="header">Intelligence Pays</div>
                <div className="des">
                  {activeIdx === 0 && (
                    <>
                      This is a Free Quiz so you will need to have tokens in
                      your account in order to play.
                      <br />
                      <br />
                      1. Pick any Category of the quizzes you want to tackle and
                      press play. <br />
                      2. You will then face a series of questions with
                      multiple-choice answers which you must answer correctly.
                      <br />
                      3. Each question is time based so it is important to
                      answer quickly to ensure you get as many points as
                      possible. Wrong answer will give you negative points.
                      <br />
                      4. At the end of the quiz, your points are added up. The
                      next level of the Quiz Level is unlocked according to your
                      total points in the respective level of the Quiz.
                      <br />
                      5. According to your Total points, you will be placed in
                      the Leader- Board of respective Quiz.
                    </>
                  )}
                  {activeIdx === 1 && (
                    <>
                      This is a Free Quiz which you can play and enjoy Live with
                      your Friend and test your intelligence.
                      <br />
                      <br />
                      1. Pick any Quiz Category where you want to challenge any
                      of your friend.
                      <br />
                      2. You create a room and share the room code with your
                      friend with whom you like to complete in the Quiz.
                      <br />
                      3. When your friend joins the Quiz room, both of you will
                      be faced with a series of questions at the same time, with
                      multiple-choice answers which you must answer correctly.
                      <br />
                      4. Each question is time based so it is important to
                      answer quickly to ensure you get as many points as
                      possible.
                      <br />
                      5. At the end of the quiz, points of both the players are
                      added up and the higher scorer Wins the respective Quiz.
                      <br />
                    </>
                  )}

                  {activeIdx === 2 && (
                    <>
                      This is a paid quiz so you will need to have IKC in your
                      account in order to play.
                      <br />
                      Our Multi-Player quizzes cover wide-ranging topics like
                      history and geography as well as banking & defence
                      services.
                      <br />
                      <br />
                      1. Every Quiz is active for a specific time period. You
                      need to register yourself before starting of any Quiz.
                      <br />
                      2. Pick any active quizzes you want to tackle and register
                      yourself for the Quiz. <br />
                      3. You should have required number of IKC in your IKC
                      Wallet as the fees of the respective Quiz.
                      <br />
                      4. You will then face a series of questions with
                      multiple-choice answers which you must guess correctly.
                      <br />
                      5. Each question is time based so it is important to
                      answer quickly to ensure you get as many points as
                      possible. Obviously, incorrect answers score zero points.{" "}
                      <br />
                      6. At the end of the quiz, your points are added up and
                      you are awarded a place on the leader-board accordingly –
                      Out of 3 attempts, only your best score counts.
                      <br />
                      7. When the quiz reaches its closing date, the total prize
                      pool is divided amongst the winners.
                      <br />
                      8. The number of winners and the percentage of the prize
                      pool they win changes from quiz to quiz but is clearly
                      marked on all games.
                      <br />
                      9. Every time someone plays a classic quiz, the global
                      prize pool increases adding to the pot we chuck in for
                      starters!
                      <br />
                    </>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}

const mapStateToProps = (state) => {
  return {
    categories: state.Categories,
    dispatch: state.dispatch,
  };
};

export default connect(mapStateToProps)(HowToPlay);
