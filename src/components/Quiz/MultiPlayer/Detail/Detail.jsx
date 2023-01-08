import React, { useEffect, useState } from "react";
import { useStyle } from "./Detail.style";
import singlePageBackground from "assets/images/singlePageBackground.svg";
import singlePageBackgroundBlue from "assets/images/singlePageBackgroundBlue.svg";

import SinglePlayerMobile from "assets/images/mobileTwoplayer.svg";
import SinglePlayerMobileLogo from "assets/images/MultiplayerTopBar.svg";
import MultiPlayerScreen from "assets/images/MultiPlayerScreen.svg";
import indianHistory from "assets/images/multiPlayerImage.svg";
import { Button } from "@mui/material";
import NewModel from "components/Model/NewModel";
import { useLocation } from "react-router-dom";
import { useParams } from "react-router-dom";
import { timeLeft } from "utils";
import { useHistory } from "react-router-dom";
import { formatDate } from "utils";
import Ikc from "assets/images/ikc.svg";

const Detail = () => {
  const classes = useStyle();
  const history = useHistory();
  const [register, setRegister] = useState(false);
  const [registered, setRegistered] = useState(false);
  const { id } = useParams();
  let [loading, setLoading] = useState(true);
  let [quiz, setQuiz] = useState({});

  const handleShareClick = async () => {
    const shareData = {
      title: quiz.title,
      text: quiz.title,
      url: window.location.href,
    };

    try {
      await navigator.share(shareData);
    } catch (err) {}
  };

  const handleRegisterClick = async () => {
    let token = JSON.parse(await localStorage.getItem("token"));
    let res = await fetch(
      `https://backend.playikc.in/quiz/register?quizId=${id}`,
      {
        method: "POST",
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );

    setRegister(!register);
    setRegistered(true);

    setTimeout(() => {
      history.push("/multiplayer/");
    }, 1000);
    // if (res.status === 200) {
    // }
  };

  useEffect(() => {
    async function fetchQuizById() {
      setLoading(true);
      let token = JSON.parse(await localStorage.getItem("token"));
      let res = await fetch(`https://backend.playikc.in/quiz/${id}/fetch`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      let data = await res.json();
      if (!data.payload) {
        setLoading(false);
        setRegistered(true);
        return;
      }
      setQuiz(data.payload);
      setLoading(false);
    }

    fetchQuizById();
  }, []);

  return (
    !loading && (
      <>
        <div className={classes.container}>
          <div className={classes.imageContainer}>
            <img className="image1" src={singlePageBackground} alt="" />
            <img className="image2" src={singlePageBackgroundBlue} alt="" />
          </div>
          <div className={classes.mobileImageContainer}>
            <img className="image1" src={SinglePlayerMobile} alt="" />
            <img className="image2" src={SinglePlayerMobileLogo} alt="" />
          </div>
          <div className={classes.header}>
            <span>Quiz Details</span>
          </div>
          <div className={classes.wrapper}>
            <div className={classes.left}>
              <img src={indianHistory} alt="img" width={100} height={100} />
              <div className={classes.metaData}>
                <span style={{ fontSize: "20px" }}>{quiz.title}</span>
                <div>
                  <span className={classes.gold}>2 slots left !!</span>
                  <span>
                    {timeLeft(quiz.lastDateToRegister).hours} hours left !!
                  </span>
                </div>
              </div>
            </div>
            <div className={classes.right}>
              <div className={classes.piles}>
                <h2 className={classes.mainText}>
                  <img
                    style={{ marginBottom: 4 }}
                    src={Ikc}
                    alt=""
                    width={16}
                    height={16}
                  />{" "}
                  10
                </h2>
                <span>Entry Fee</span>
              </div>
              <div className={classes.piles}>
                <h2 className={classes.mainText}>
                  {" "}
                  <img
                    style={{ marginBottom: 4 }}
                    src={Ikc}
                    alt=""
                    width={16}
                    height={16}
                  />{" "}
                  {quiz.poolAmount}
                </h2>
                <span>Prize Pool</span>
              </div>
              <div className={classes.piles}>
                <h2 className={classes.mainText}>3</h2>
                <span>Max Attempt</span>
              </div>
              <div className={classes.piles}>
                <h2 className={classes.mainText}>10</h2>
                <span>Max Players</span>
              </div>
              <div className={classes.Bigpiles}>
                <h2 className={classes.mainText}>
                  {formatDate(quiz.startDate)}
                </h2>
                <span>Start Date</span>
              </div>
            </div>
          </div>

          <div className={classes.button}>
            <Button onClick={handleShareClick}>Share</Button>
            {!register ? (
              <Button onClick={() => setRegister(!register)}>Register</Button>
            ) : (
              <Button>Registered</Button>
            )}
          </div>
        </div>

        {register && (
          <NewModel setClose={() => setRegister(!register)}>
            <div className={classes.model}>
              <div className={classes.modelHeader}>
                <span className="gold">
                  10K <span>will be deducted from your wallet.</span>
                </span>
              </div>
              <div className={classes.modelContent}>
                Incase quiz gets lower registerations than required , a refund
                will be initiated.
              </div>
              <div className={classes.better}>Do you wish to proceed?</div>
              <div className={classes.buttonContainer}>
                <Button onClick={() => setRegister(!register)}>No</Button>
                <Button onClick={handleRegisterClick}>Yes</Button>
              </div>
            </div>
          </NewModel>
        )}
        {registered && (
          <NewModel setClose={() => setRegistered(!registered)}>
            <div className={classes.model}>
              <div className={classes.modelHeader}>
                <span className="gold">Thank you for registering.</span>
              </div>
            </div>
          </NewModel>
        )}
      </>
    )
  );
};

export default Detail;
