import { VolumeOff, VolumeUp } from "@material-ui/icons";
import { CircularProgress, IconButton } from "@mui/material";
import api from "api";
import { Spinner } from "assets";
import correct_answer from "assets/audios/Correct-answer.mp3";
import intermediate_answer from "assets/audios/intermediate_answer.mp3";
import music from "assets/audios/music.mp3";
import wrong_answer from "assets/audios/Wrong-answer.mp3";
import Hint from "assets/images/hint.svg";
import Ball from "common/ball/Ball";
import BuyIkc from "common/buyIkc/BuyIkc";
import ErrorPopup from "common/ErrorPopup/ErrorPopup";
import useErrorPopup from "hooks/useErrorPopup";
import React, { useEffect, useRef, useState } from "react";
import { useSelector } from "react-redux";
import { useMediaQuery } from "react-responsive";
import { Prompt } from "react-router-dom";
import { toast } from "react-toastify";
import Model from "../../Model/Model";
import Counter from "components/Quiz/common/CountDown";
import QuizOption from "./OptionContainer/QuizOptions";
import { useStyle } from "./QuizContainer.style";
import ResultContainer from "./ResultContainer/ResultContainer";

function QuizContainer({
  completed,
  isFreebie,
  questions,
  question,
  ResultId,
  setQuestionIdx,
  questionIdx,
  setNextQues,
  quizResult,
}) {
  const countUpRef = useRef(null);
  const { openPopup, closePopup, popupOpen, popRef, message } = useErrorPopup();
  const user = useSelector((state) => state.Auth?.user);
  const [buy, setBuy] = useState(0);
  const [quizEndData, setQuizEndData] = React.useState(null);
  const [correctANswersCount, setCorrectANswersCount] = React.useState(0);
  const [hintPurchasing, setHintPurchasing] = React.useState(false);
  const [timesUp, setTimesUp] = useState(false);
  const [end, setEnd] = useState(false);
  const [score, setScore] = useState(0);
  const [startAfter, setStartAfter] = useState(true);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [currentQuestionData, setCurrentQuestionData] = useState(questions[0]);
  const [options, setOptions] = useState([]);
  const startSound = new Audio(music);
  const [optionNum, setOptionNum] = useState(false);
  const [hint, setHint] = useState(user?.hints || 5);
  const [currentHintCost, setCurrentHintCost] = React.useState(5);
  const [model, setModel] = useState("");
  const [confirmationModal, setConfirmationModal] = useState(""); // end_quiz || try_again || ""
  const [mute, setMute] = useState(false);
  const [loading, setLoading] = React.useState(true);

  useEffect(() => {
    if (currentQuestion >= questions.length) {
      countUpRef.current.stopAll();
      endQuiz();
      return;
    }
    setCurrentQuestionData(questions[currentQuestion]);
    setOptions(questions[currentQuestion].options);
    if(!startAfter) {
      countUpRef.current.start();
    }
  }, [currentQuestion, questions]);

  useEffect(() => {
    const time = setInterval(() => {
      if (!mute) startSound.play();
    }, 4000);

    return () => {
      clearInterval(time);
      startSound.pause();
    };
  }, [mute]);

  useEffect(() => {
    const time = setTimeout(() => {
      setStartAfter(false);
      countUpRef.current.start();
      setLoading(false);
    }, 5000);

    return () => {
      clearTimeout(time);
      endQuiz();
    };
  }, []);

  const endQuiz = async () => {
    setMute(true);
    let token = localStorage.getItem("token");

    try {
      let res = await api.ikcplay.fetch(
        `/singlePlayerQuiz/end${token ? "" : "/guest"}?resultId=${ResultId}`
      );
      setQuizEndData(res.payload);
      setEnd(true);
    } catch (error) {}
  };

  const submit = async (option_id, index) => {
    const score = countUpRef.current.stopAll();
    const selectAudio = new Audio(intermediate_answer);
    const correct = new Audio(correct_answer);
    const wrong = new Audio(wrong_answer);
    selectAudio.play();

    try {
      let res = await api.ikcplay.fetch(
        `/singlePlayerQuiz/submitAnswer${
          localStorage.getItem("token") ? "" : "/guest"
        }?resultId=${ResultId}&quesId=${
          currentQuestionData._id
        }&answer=${option_id}&score=${score}`
      );

      selectAudio.pause();
      setCurrentHintCost(5);

      if (res.payload.isCorrect) {
        correct.play();
        setScore((state) => +res.payload.points);
        setCorrectANswersCount(correctANswersCount + 1);
      }
      if (res.payload.correctOption === option_id) {
        document.getElementById(
          index + currentQuestionData.categoryId + "id"
        ).style.background = "#00AB11";
      } else {
        wrong.play();
        var correctIndex = 0;
        currentQuestionData?.options?.forEach((element, index) => {
          if (element._id === res.payload.correctOption) {
            correctIndex = index;
            return index;
          }
        });
        document.getElementById(
          index + currentQuestionData.categoryId + "id"
        ).style.background = "#FF6868";
        document.getElementById(
          correctIndex + currentQuestionData.categoryId + "id"
        ).style.background = "#00AB11";
      }
    } catch (error) {}

    setTimeout(() => {
      correct.pause();
      wrong.pause();
      if (currentQuestion + 1 < questions.length) {
        setCurrentQuestion(currentQuestion + 1);
      } else {
        endQuiz();
      }
      setOptionNum(false);
      if (currentQuestion + 1 < questions.length) countUpRef.current.start();
    }, 1000);
  };

  const cutHint = async () => {
    setHint(hint - currentHintCost);
    if (currentHintCost >= 20) {
      setCurrentHintCost(5);
    } else {
      setCurrentHintCost(currentHintCost + currentHintCost);
    }
    setModel("");
    setHintPurchasing(true);
    let JSONtoken = localStorage.getItem("token");
    const hints = await api.ikcplay.fetch(
      `/singlePlayerQuiz/hint${JSONtoken ? "" : "/guest"}?quesId=${
        currentQuestionData._id
      }`
    );
    let data = options;
    let correct = data.filter((items) => items._id === hints.payload.answer);
    let incorrect = data.filter((items) => items._id !== hints.payload.answer);
    incorrect.reverse();
    incorrect.shift();
    const arr = incorrect.concat(correct);
    setOptions((prev) => arr);
    setHintPurchasing(false);
    // countUpRef.current.start();
  };
  const handleHintClick = async () => {
    if (options.length !== 1 && hint >= currentHintCost) {
      setModel("hint");
    } else {
      setModel("insuffient");
    }
    // Do not stop time when we open a hint popup
    // countUpRef.current.pause(countUpRef.current.getCount());
  };

  const handleQuizEndClick = async () => {
    setConfirmationModal("end_quiz");
  };
  const handleTryAgainClick = async () => {
    setConfirmationModal("try_again");
  };

  const isLaptop = useMediaQuery({
    query: "(min-device-width: 1024px)",
  });
  const classes = useStyle();
  const MuteAll = () => {
    if (mute) {
      startSound.play();
    } else startSound.pause();
    setMute(!mute);
  };

  const quizPreEnd = () => {
    setOptionNum(true);
    countUpRef.current.stopAll();
  };


  const pauseGame = () => {
    countUpRef.current.stopAll();
    setTimesUp(true);
    if (currentQuestion + 1 === questions.length) {
      setOptionNum(true);
      endQuiz();
      return;
    }
  };

  const handleTimeUp = async () => {
    setOptionNum(true);
    countUpRef.current.stopAllZero();
    try {
      let res = await api.ikcplay.fetch(
        `/singlePlayerQuiz/submitAnswer${
          localStorage.getItem("token") ? "" : "/guest"
        }?resultId=${ResultId}&quesId=${currentQuestionData._id}&score=${0}`
      );

      setCurrentHintCost(5);

      var correctIndex = 0;
      currentQuestionData?.options?.forEach((element, index) => {
        if (element._id === res.payload.correctOption) {
          correctIndex = index;
          return index;
        }
      });
      document.getElementById(
        correctIndex + currentQuestionData.categoryId + "id"
      ).style.background = "#00AB11";
    } catch (error) {}
    pauseGame();
  };

  const handleSetNextQuestion = () => {
    setTimesUp(false);
    setOptionNum(false);
    if (currentQuestion + 1 < questions.length){
      setCurrentQuestion(currentQuestion + 1);
      countUpRef.current.start();
    }
  };

  return (
    <>
      <div className={classes.questionBoard}>
        <Ball width={100} top={"20%"} left={"-4%"} />
        <div className={end ? "innerContainer" : ""}>
          {!end ? (
            <div className={classes.scoreBoard}>
              {isLaptop && (
                <div className={classes.cards}>
                  <span>{`${correctANswersCount}/${questions.length}`}</span>
                  <span>Correct answers</span>
                </div>
              )}
              <div className={classes.cards}>
                <span>{score}</span>
                <span>Current score</span>
              </div>
              <div className={classes.cards + " " + "mid"}>
              <Counter
                  onTimesUp={handleTimeUp}
                  text="Points"
                  count={countUpRef}
              />
              </div>
              <div className={classes.cards}>
                <span>0</span>
                <span>Best score</span>
                <Ball width={25} top="-20%" left={"-5%"} />
              </div>
              {isLaptop && (
                <div className={classes.cards}>
                  <span>{hint}</span>
                  <span>Hints left</span>
                </div>
              )}
            </div>
          ) : null}
          <div className={classes.details}>
            {startAfter ? (
              <Spinner />
            ) : end ? (
              <ResultContainer
                endData={quizEndData}
                score={score}
                twoPlayer={false}
                tryAgain={handleTryAgainClick}
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

                    {/* <img
                      style={{
                        cursor: "pointer",
                      }}
                      onClick={() => setMute(!mute)}
                      src={Sound}
                      alt=""
                    /> */}

                    <div className="number">
                      Question{" "}
                      <span className="first">
                        {Math.min(currentQuestion + 1, questions.length)}
                      </span>{" "}
                      of <span>{questions.length} </span>
                    </div>

                    {hintPurchasing ? (
                      <CircularProgress color="warning" size={14} />
                    ) : (
                      <img
                        className={
                          optionNum || timesUp
                            ? classes.button + " disabled"
                            : options.length > 1
                            ? classes.button
                            : classes.button + " disabled"
                        }
                        style={{
                          cursor: "pointer",
                          height: "30px",
                          width: "30px",
                        }}
                        src={Hint}
                        alt=""
                        onClick={() => {
                          if (optionNum || timesUp) return;
                          if (options.length > 1) {
                            handleHintClick();
                          }
                        }}
                      />
                    )}
                  </div>
                  <div className={classes.questions}>
                    {currentQuestion < questions.length &&
                    questions[currentQuestion] !== null
                      ? questions[currentQuestion].content.question
                      : ""}
                  </div>
                </div>
                <div
                  className={classes.options}
                  key={currentQuestionData.categoryId + options.length}
                >
                  {options?.map((options, index) => {
                    return (
                      <QuizOption
                        disable={timesUp || optionNum}
                        setCurrentQuestion={setCurrentQuestion}
                        data={options}
                        index={index}
                        currentQuestion={currentQuestion}
                        resultId={questions.resultId}
                        submit={submit}
                        setOptionNum={() => setOptionNum(true)}
                        key={options._id + index}
                        id={options._id}
                        categoryId={currentQuestionData.categoryId}
                      />
                    );
                  })}
                </div>

                {timesUp ? (
                  !optionNum ? (
                    <h6
                      style={{
                        color: "red",
                        paddingBottom: "10px",
                        fontSize: "14px",
                      }}
                    >
                      Times up!!
                    </h6>
                  ) : (
                    ""
                  )
                ) : (
                  ""
                )}

                <div className={classes.actions}>
                  <button
                    onClick={() => {
                      handleQuizEndClick();
                    }}
                    className={classes.button}
                  >
                    End Quiz
                  </button>
                  {timesUp && currentQuestion + 1 < questions.length && (
                    <button
                      onClick={handleSetNextQuestion}
                      className={classes.button}
                    >
                      Next
                    </button>
                  )}
                </div>

                <Ball
                  width={50}
                  bottom={0}
                  right={"-10%"}
                  top={0}
                  margin={"auto"}
                />
              </div>
            )}
          </div>

          {!end && (
            <div className={classes.bottomPart}>
              {!isLaptop && (
                <div className={classes.cards + " cards"}>
                  <span>{`${correctANswersCount}/${questions.length}`}</span>
                  <span>Correct answers</span>
                </div>
              )}

              {!isLaptop && (
                <div className={classes.cards + " cards"}>
                  <span>{hint}</span>
                  <span>Hints left</span>
                </div>
              )}
            </div>
          )}
        </div>
      </div>
      <Ball top={"50%"} bottom={0} margin="auto" width={30} />
      {model.length && (
        <Model
          description={
            model === "hint"
              ? `Using ${currentHintCost} hints will remove an option, Do you wish to use ${currentHintCost} hint?`
              : "Do you wish to buy hints ?"
          }
          header={model === "hint" ? "HINT" : "Insufficient Hints"}
          leftButton={"NO"}
          rightButton="YES"
          funOnRightButton={
            model === "hint"
              ? cutHint
              : () => {
                  setBuy(true);
                  setModel("");
                }
          }
          funOnLeftButton={() => {
            // countUpRef.current.start();
            setModel("");
          }}
        />
      )}
      {confirmationModal.length && (
        <Model
          description={
            confirmationModal === "end_quiz"
              ? `Are you sure, You want to end quiz?`
              : "Do you wish to Play again ?"
          }
          header={confirmationModal === "end_quiz" ? "Warning !" : ""}
          leftButton={"NO"}
          rightButton="YES"
          funOnRightButton={
            confirmationModal === "end_quiz"
              ? () => {
                  quizPreEnd();
                  endQuiz().then().finally(setConfirmationModal(""));
                }
              : () => {
                  window.location.reload();
                }
          }
          funOnLeftButton={() => {
            setConfirmationModal("");
          }}
        />
      )}
      {buy && (
        <BuyIkc
          onError={(msg, type) => {
            toast.error(msg, {
              position: "top-center",
              autoClose: 5000,
              hideProgressBar: false,
              closeOnClick: true,
              pauseOnHover: true,
              draggable: true,
              progress: undefined,
            });
          }}
          close={setBuy}
        />
      )}
      <ErrorPopup popRef={popRef} closePopup={closePopup} popupdata={message} />
      <Prompt
        when={!end}
        message="Are you sure you want to leave? Your quiz will end."
      />
    </>
  );
}

export default QuizContainer;
