import { VolumeOff, VolumeUp } from "@material-ui/icons";
import { IconButton } from "@mui/material";
import { Spinner } from "assets";
import correct_answer from "assets/audios/Correct-answer.mp3";
import music from "assets/audios/music.mp3";
import wrong_answer from "assets/audios/Wrong-answer.mp3";
import Ball from "common/ball/Ball";
import Counter from "components/Quiz/common/CountDown";
import QuizOption from "components/Quiz/SinglePlayerQuizContainer/OptionContainer/QuizOptions";
import { useStyle } from "components/Quiz/SinglePlayerQuizContainer/QuizContainer.style";
import ResultContainer from "components/Quiz/SinglePlayerQuizContainer/ResultContainer/ResultContainer";
import { useEffect, useRef, useState } from "react";
import { useMediaQuery } from "react-responsive";
import { Prompt } from "react-router";
import { toast } from "react-toastify";

const GAME = ({ isCreator, socket, roomId, userId }) => {
  const [mute, setMute] = useState(false);
  const [correctAnswer1, setCorrectAnswer1] = useState(0);
  const [correctAnswer2, setCorrectAnswer2] = useState(0);
  const [currentScore1, setCurrentScore1] = useState(0);
  const [currentScore2, setCurrentScore2] = useState(0);
  const [question, setQuestion] = useState({});
  const [questionNumber, setQuestionNumber] = useState(0);
  const countUpRef = useRef();
  const [isInitialRun, setIsInitialRun] = useState(true);
  const startSound = new Audio(music);
  const wrong = new Audio(wrong_answer);
  const correct = new Audio(correct_answer);
  const [end, setEnd] = useState(false);
  const classes = useStyle();
  const [optionNum, setOptionNum] = useState(false);
  const requestSent = useRef(false);
  const selectedAnswer = useRef(null);

  const [timesUp, setTimesUp] = useState(false);

  useEffect(() => {
    // initial run
    if (!isInitialRun) return;
    setIsInitialRun(false);
    let timer = setTimeout(() => {
      sendNextQuestion();
    }, 3000);
    return () => {
      clearTimeout(timer);
    };
  }, []);

  useEffect(() => {
    const time = setInterval(() => {
      if (!mute) startSound.play();
    }, 3000);

    return () => {
      clearInterval(time);
      startSound.pause();
    };
  }, [mute]);

  // new question
  useEffect(() => {
    socket.on("question", (res) => {
      selectedAnswer.current = null;
      requestSent.current = false;
      try {
        setQuestion(res[0]);
        setQuestionNumber((prev) => prev + 1);
        countUpRef.current.start()
        setTimesUp(false);
        setOptionNum(false);
      } catch (er) {}
    });
  }, []);

  useEffect(() => {
    socket.on("answer", (res) => {
      if (!res) return;
      if (res.hasAnswered === 1 || res.hasAnswered === 2) {
      }
      if (res?.player1?.isCorrect === 1 && res.hasAnswered === 1) {
        setCorrectAnswer1((prev) => prev + 1);
        setCurrentScore1(res.player1.score);
        if (isCreator) {
          setAnswerColor(res)
          correct.play();
          setTimeout(() => {
            correct.pause();
          }, 500);
        }
      } else if (res?.player2?.isCorrect === 1 && res.hasAnswered === 2) {
        setCorrectAnswer2((prev) => prev + 1);
        setCurrentScore2(res.player2.score);
        if (!isCreator) {
          setAnswerColor(res)
          correct.play();
          setTimeout(() => {
            correct.pause();
          }, 500);
        }
      } else if (res?.hasAnswered === 3) {
        countUpRef.current.stopAll()
        if (res?.player1?.isCorrect === 1) {
          setCorrectAnswer1((prev) => prev + 1);
          setCurrentScore1(res?.player1?.score);
          if (isCreator) {
            setAnswerColor(res)
            correct.play();
            setTimeout(() => {
              correct.pause();
            }, 500);
          }
        } else if (res?.player2?.isCorrect === 1) {
          setCorrectAnswer2((prev) => prev + 1);
          setCurrentScore2(res?.player2?.score);
          if (!isCreator) {
            setAnswerColor(res)
            correct.play();
            setTimeout(() => {
              correct.pause();
            }, 500);
          }
        } else {
          if (res?.player1?.isCorrect && isCreator) {
            setAnswerColor(res)
            wrong.play();
            setTimeout(() => {
              correct.pause();
            }, 100);
          }
          if (res.player2?.isCorrect && !isCreator) {
            setAnswerColor(res)
            wrong.play();
            setTimeout(() => {
              correct.pause();
            }, 100);
          }
        }
        setTimeout(() => {
          sendNextQuestion();
        }, 2000);
        // When both player answered then get the next question form the server
      } else {
        if (res?.player1?.isCorrect && isCreator) {
          setAnswerColor(res)
          wrong.play();
          setTimeout(() => {
            correct.pause();
          }, 300);
        }
        if (res.player2?.isCorrect && !isCreator) {
          setAnswerColor(res)
          wrong.play();
          setTimeout(() => {
            correct.pause();
          }, 300);
        }
      }
    });
  }, []);

  const getMyCorrect = (res) => {
    if(isCreator) {
      return res.player1.isCorrect
    } else {
      return res.player2.isCorrect
    }
  }

  const setAnswerColor = (res)=>{
    const correct = getMyCorrect(res)
    const {index,_id} = selectedAnswer.current
    const id = index + _id + "id"
    const elem = document.getElementById(id)
    if(!elem) return;
    if(correct === 1) {
      elem.style.background = "#00AB11"
    } else {
      elem.style.background = "#FF6868"
    }
  }

  // quiz end
  useEffect(() => {
    socket.on("end", (res) => {
      socket.disconnect(true);
      setTimeout(() => {
        startSound.pause();
        setEnd(true);
      }, 1000);
    });
  }, []);

  const submitAnswer = (answer) => {
    const score = countUpRef.current.stopCountdown()
    socket.emit("submitAnswer", {
      roomId,
      userId,
      answer: answer,
      questionId: question._id,
      points: score,
    });
  };

  const handleDisconnect = () => {
    socket.emit("end", function () {
      socket.disconnect(true);
    });
    window.location.pathname = "/";
    window.location.reload();
  };
  const isLaptop = useMediaQuery({
    query: "(min-device-width: 1024px)",
  });

  const handleTimeUp = () => {
    setTimesUp(true);
    countUpRef.current.stopAllZero();
    setOptionNum(true);
    setTimeout(() => {
      sendNextQuestion();
    }, 2000);
  };

  const sendNextQuestion = () => {
    if (!isCreator) return;
    if (requestSent.current) return;
    requestSent.current = true;
    socket.emit("sendQuestion", { roomId }, (data) => {});
  };
  return (
    <>
      <div className={classes.questionBoard}>
        <Ball width="100" top="28%" left={"-3.8%"} />
        <Ball width="30" top="28%" left={"0"} bottom={0} margin="auto" />
        <Ball width="50" top="10%" right={"3%"} bottom={0} margin="auto" />
        <div className={end ? "innerContainer" : ""}>
          {!end ? (
            <div className={classes.scoreBoard}>
              {isLaptop && (
                <div className={classes.cards}>
                  <span>{isCreator ? correctAnswer1 : correctAnswer2}</span>
                  <span>Correct answers</span>
                </div>
              )}
              <div className={classes.cards}>
                <span>{isCreator ? currentScore1 : currentScore2}</span>
                <span>Current score</span>
              </div>
              <div className={classes.cards + " " + "mid"}>
                <Counter
                  onTimesUp={handleTimeUp}
                  text="Points"
                  count={countUpRef}
                />
              </div>

              {!isLaptop && (
                <div className={classes.cards}>
                  <span>{isCreator ? correctAnswer1 : correctAnswer2}</span>
                  {/* {`${0}/${questions.length}`} */}
                  <span>Correct answers</span>
                </div>
              )}

              {isLaptop && (
                <div className={classes.cards}>
                  <span>{isCreator ? correctAnswer2 : correctAnswer1}</span>
                  <span>Player 2 correct answer</span>
                  <Ball width={25} top="-20%" left={"-5%"} />
                </div>
              )}

              {isLaptop && (
                <div className={classes.cards}>
                  <span>{isCreator ? currentScore2 : currentScore1}</span>
                  <span>Player 2 current score</span>
                </div>
              )}
            </div>
          ) : null}
          <div className={classes.details}>
            {isInitialRun || !question?.options ? (
              <Spinner />
            ) : end ? (
              <ResultContainer
                data={
                  currentScore1 === currentScore2
                    ? {
                        title: "Match Tied",
                        class: "tie",
                        titleScore: isCreator ? currentScore1 : currentScore2,
                        opponentScore: isCreator
                          ? currentScore2
                          : currentScore1,
                        opponentText: isCreator
                          ? "Player 2 score"
                          : "Player 1 score",
                      }
                    : currentScore1 > currentScore2
                    ? {
                        title: isCreator ? "You Win" : "You Lose",
                        class: isCreator ? "win" : "lose",
                        titleScore: isCreator ? currentScore1 : currentScore2,
                        opponentScore: isCreator
                          ? currentScore2
                          : currentScore1,
                        opponentText: isCreator
                          ? "Player 2 score"
                          : "Player 1 score",
                      }
                    : {
                        title: isCreator ? "You Lose" : "You Win",
                        class: isCreator ? "lose" : "win",
                        titleScore: isCreator ? currentScore1 : currentScore2,
                        opponentScore: isCreator
                          ? currentScore2
                          : currentScore1,
                        opponentText: isCreator
                          ? "Player 2 score"
                          : "Player 1 score",
                      }
                }
                twoPlayer
              />
            ) : (
              <div className={classes.questionContainer}>
                <div className={classes.header}>
                  <div className={classes.sound}>
                    <IconButton
                      className={classes.button}
                      style={{
                        borderRadius: "5px",
                        height: "30px",
                        width: "30px",
                      }}
                      onClick={() => {
                        setMute(!mute);
                        toast.info(
                          `Sound is being ${!mute ? "muted" : "unmuted"}`,
                          {
                            position: "top-right",
                            autoClose: 4000,
                            hideProgressBar: false,
                            closeOnClick: true,
                            pauseOnHover: true,
                            draggable: true,
                            progress: undefined,
                          }
                        );
                      }}
                      color="primary"
                      component="span"
                    >
                      {mute ? (
                        <VolumeOff
                          style={{
                            height: "20px",
                            width: "20px",
                            fill: "white",
                            pointerEvents: "inherit",
                            cursor: "pointer",
                          }}
                        />
                      ) : (
                        <VolumeUp
                          style={{
                            height: "20px",
                            width: "20px",
                            fill: "white",
                            pointerEvents: "inherit",
                            cursor: "pointer",
                          }}
                        />
                      )}
                    </IconButton>
                    <div className="number">
                      Question <span className="first"> {questionNumber} </span>
                    </div>
                  </div>
                  <div className={classes.questions}>
                    {question?.content?.question}
                  </div>
                </div>

                <div className={classes.options}>
                  {question?.options?.map((options, index) => {
                    return (
                      <QuizOption
                        disable={optionNum}
                        data={options}
                        index={index}
                        currentQuestion={question}
                        submit={(answer)=>{
                          selectedAnswer.current = {index,_id:question.categoryId}
                          submitAnswer(answer)
                        }}
                        setOptionNum={() => setOptionNum(true)}
                        key={options._id + index}
                        id={options._id}
                        categoryId={question.categoryId}
                      />
                    );
                  })}
                </div>

                {!timesUp && optionNum && (
                  <h6
                    style={{
                      color: "#E1A200",
                      paddingBottom: "10px",
                      fontSize: "14px",
                    }}
                  >
                    Please wait for Next Question.
                  </h6>
                )}

                {timesUp && (
                  <h6
                    style={{
                      color: "red",
                      paddingBottom: "10px",
                      fontSize: "14px",
                    }}
                  >
                    Times up!!
                  </h6>
                )}
              </div>
            )}
          </div>
          {!end && (
            <div className={classes.bottomPart}>
              {!isLaptop && (
                <div className={classes.cards}>
                  <span>{isCreator ? correctAnswer2 : correctAnswer1}</span>
                  <span>Player 2 correct answer</span>
                </div>
              )}

              {!isLaptop && (
                <div className={classes.cards}>
                  <span>{isCreator ? currentScore2 : currentScore1}</span>
                  <span>Player 2 current score</span>
                </div>
              )}
            </div>
          )}

          {/* {!end && (
            <div className={classes.bottomPart}>
              {!isLaptop && (
                <div className={classes.cards + ' cards'}>
                  <span>{`${questionRem}/${questions.length}`}</span>
                  <span>Correct answers</span>
                </div>
              )}

              {!isLaptop && (
                <div className={classes.cards + ' cards'}>
                  <span>{hint}</span>
                  <span>Hints left</span>
                </div>
              )}
            </div>
          )} */}
        </div>
      </div>
      <Prompt
        when={!end}
        message="Are you sure you want to leave? Your quiz will end."
      />
    </>
  );
};

export default GAME;
