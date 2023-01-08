import { VolumeOff, VolumeUp } from "@material-ui/icons";
import { IconButton } from "@mui/material";
import { Spinner } from "assets";
import correct_answer from "assets/audios/Correct-answer.mp3";
import intermediate_answer from "assets/audios/intermediate_answer.mp3";
import music from "assets/audios/music.mp3";
import wrong_answer from "assets/audios/Wrong-answer.mp3";
import Ball from "common/ball/Ball";
import { useEffect, useRef, useState } from "react";
import { useMediaQuery } from "react-responsive";
import { Prompt, useHistory, useParams } from "react-router";
import { toast } from "react-toastify";
import Model from "../../Model/Model";
import { useStyle } from "../SinglePlayerQuizContainer/QuizContainer.style";
import Counter from "components/Quiz/common/CountDown";
import QuizOption from "./OptionContainer/QuizOptions";
import ResultContainer from "./ResultContainer/ResultContainer";
import api from "api";
function QuizContainer({
  completed,
  isFreebie,
  isPrivate,
  maxScore,
  questions,
  question,
  ResultId,
  setQuestionIdx,
  questionIdx,
  setNextQues,
  quizResult,
}) {
  const countUpRef = useRef(null);
  const { quizId, dailyQuizId } = useParams();
  const history = useHistory();
  const [quizEndData, setQuizEndData] = useState(null);
  const [correctANswersCount, setCorrectANswersCount] = useState(0);
  const [timesUp, setTimesUp] = useState(false);
  const [end, setEnd] = useState(false);
  const [score, setScore] = useState(0);
  const [startAfter, setStartAfter] = useState(true);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [currentQuestionData, setCurrentQuestionData] = useState(questions[0]);
  const [options, setOptions] = useState([]);
  const startSound = new Audio(music);
  const [optionNum, setOptionNum] = useState(false);
  const [confirmationModal, setConfirmationModal] = useState(""); // end_quiz
  const [mute, setMute] = useState(false);

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

  // initial quiz start
  useEffect(() => {
    const time = setTimeout(() => {
      setStartAfter(false);
      countUpRef.current.start();
    }, 5000);

    return () => {
      clearTimeout(time);
    };
  }, []);

  const endQuiz = async () => {
    setMute(true);
    let token = localStorage.getItem("token");
    try {
      api.ikcplay
        .fetch(`/${dailyQuizId ?"dailyQuiz":"quiz"}/end/${token ? "" : "guest"}?resultId=${ResultId}`)
        .then((res) => {
          setQuizEndData(res.payload);
          setEnd(true);
          if(dailyQuizId) return history.push(`/dailyquiz/leaderboard/${dailyQuizId}`);
        })
        .catch((err) => {
          if(dailyQuizId) return history.push(`/dailyquiz/leaderboard/${dailyQuizId}`);
          history.push(`/multiplayer/leaderboard/${quizId}`);
        });
    } catch (e) {
      if(dailyQuizId) return history.push(`/dailyquiz/leaderboard/${dailyQuizId}`);
      history.push(`/multiplayer/leaderboard/${quizId}`);
    }
  };

  const handleQuizEndClick = async () => {
    setConfirmationModal("end_quiz");
  };

  const submit = async (option_id, index) => {
    const score = countUpRef.current.stopAll();
    const selectAudio = new Audio(intermediate_answer);
    const correct = new Audio(correct_answer);
    const wrong = new Audio(wrong_answer);
    selectAudio.play();

    let token = localStorage.getItem("token");
    const response = await fetch(
      `https://backend.playikc.in/${dailyQuizId ? "dailyQuiz":"quiz"}/submitAnswer${
        token ? "" : "/guest"
      }?resultId=${ResultId}&quesId=${
        currentQuestionData._id
      }&answer=${option_id}&score=${score}`,
      {
        headers: token
          ? {
              Authorization: `Bearer ${JSON.parse(token)}`,
            }
          : {},
      }
    )
      .then((res) => {
        selectAudio.pause();
        return res.json();
      })
      .then((res) => {
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
      })
      .catch((err) => {});

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
      let token = localStorage.getItem("token");
      const resp = await fetch(
        `https://backend.playikc.in/${dailyQuizId ? "dailyQuiz" : "quiz"}/submitAnswer${
          token ? "" : "/guest"
        }?resultId=${ResultId}&quesId=${
          currentQuestionData._id
        }&score=${0}`,
        {
          headers: token
            ? {
                Authorization: `Bearer ${JSON.parse(token)}`,
              }
            : {},
        }
      );
      const res = await resp.json();
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
    } catch (e) {}

    pauseGame();
  };

  const handleSetNextQuestionClick = () => {
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
              {(dailyQuizId ||isLaptop) && (
                <div className={classes.cards}>
                  <span>{`${correctANswersCount}/${questions.length}`}</span>
                  <span>Correct answers</span>
                </div>
              )}
              {dailyQuizId && isLaptop && <div className={classes.palceholderCard}/>}
              <div className={classes.cards}>
                <span>{score}</span>
                <span>Current score</span>
              </div>
              {dailyQuizId && isLaptop && <div className={classes.palceholderCard}/>}
              <div className={classes.cards + " " + "mid"}>
                <Counter
                  onTimesUp={handleTimeUp}
                  text="Points"
                  count={countUpRef}
                  />
              </div>
              {!dailyQuizId && <div className={classes.cards}>
                <span>{maxScore ?? 0}</span>
                <span>{isPrivate ? "Top " : "Best "}score</span>
                <Ball width={25} top="-20%" left={"-5%"} />
              </div>}
            </div>
          ) : null}
          <div className={classes.details}>
            {startAfter ? (
              <Spinner />
            ) : end ? (
              <ResultContainer endData={quizEndData ?? {}} score={score} />
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
                      Question{" "}
                      <span className="first">
                        {Math.min(currentQuestion + 1, questions.length)}{" "}
                      </span>{" "}
                      of <span> {questions.length} </span>
                    </div>
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
                        disable={optionNum}
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
                      onClick={handleSetNextQuestionClick}
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
              {(!dailyQuizId && !isLaptop) && (
                <div className={classes.cards + " cards"}>
                  <span>{`${correctANswersCount}/${questions.length}`}</span>
                  <span>Correct answers</span>
                </div>
              )}
            </div>
          )}
        </div>
      </div>
      {confirmationModal.length && (
        <Model
          description="Are you sure, You want to end quiz?"
          header="Warning !"
          leftButton="NO"
          rightButton="YES"
          funOnLeftButton={() => {
            setConfirmationModal("");
          }}
          funOnRightButton={() => {
            quizPreEnd();
            endQuiz().then().finally(setConfirmationModal(""));
          }}
        />
      )}
      <Ball top={"50%"} bottom={0} margin="auto" width={30} />
      <Prompt
        when={!end}
        message="Are you sure you want to leave? Your quiz will end."
      />
    </>
  );
}

export default QuizContainer;
