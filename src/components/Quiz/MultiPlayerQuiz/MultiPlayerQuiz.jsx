import { Stack } from "@mui/material";
import { Spinner } from "assets";
import MeltingSnowMan from "assets/images/melting-snowman.svg";
import singlePageBackground from "assets/images/singlePageBackground.svg";
import singlePageBackgroundBlue from "assets/images/singlePageBackgroundBlue.svg";
import QuizContainer from "components/Quiz/MultiPlayerQuizContainer/QuizContainer";
import { useEffect, useState } from "react";
import { connect } from "react-redux";
import { useParams, Redirect } from "react-router-dom";
import {
  startMultiPlayerQuiz,
  startPrivateMultiPlayerQuiz,
  startDailyQuiz,
} from "store/actions/quizAction";
import { useStyles } from "./MultiPlayerQuiz.style";

function MultiPlayerQuiz({ dispatch, Quiz }) {
  let { quizId, quizCode, dailyQuizId } = useParams();
  const classes = useStyles();
  // Passed to Quiz Container ARRAY INDEX
  const [questionIdx, setQuestionIdx] = useState(0);

  // QUESTIONS ARRAY
  // const [questions, setQuestions] = useState([...Quiz.questions]);
  // RESULT ID
  useEffect(() => {
    if (quizCode) {
      dispatch(startPrivateMultiPlayerQuiz(quizCode, quizId));
      return;
    }
    if (quizId) {
      dispatch(startMultiPlayerQuiz(quizId));

    }
    if (dailyQuizId) {
      dispatch(startDailyQuiz(dailyQuizId));
    }
  }, [quizId, quizCode, dailyQuizId, dispatch]);

  return (
    <div className={classes.container}>
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

      {!Quiz.loading ? (
        Quiz.questions?.length && questionIdx < Quiz.questions?.length ? (
          <>
            <QuizContainer
              completed={false}
              isFreebie={true}
              isPrivate={quizCode ? true : false}
              maxScore={Quiz.topScore ?? Quiz.bestScore}
              questions={Quiz.questions}
              setQuestionIdx={setQuestionIdx}
              question={Quiz.questions[questionIdx]}
              ResultId={Quiz.resultId}
              questionIdx={questionIdx}
              setNextQues={true}
              quizResult={null}
            />
          </>
        ) : null
      ) : (
        <Stack
          sx={{
            height: 600,
            width: "100%",
            zIndex: 10,
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          {/* <CircularProgress
            style={{ zIndex: '10' }}
            size={40}
            color="warning"
          /> */}
          <Spinner />
        </Stack>
      )}

      {Quiz.error && (
        <Stack
          sx={{
            height: 600,
            width: "100%",
            zIndex: 10,
            alignItems: "center",
            justifyContent: "center",
            color: "red",
          }}
        >
          {Quiz.error === "Registeration Of Quiz Completed" && (
            <Redirect to={`/${dailyQuizId? 'dailyquiz':'multiplayer'}/leaderboard/${dailyQuizId??quizId}`} />
          )}
          <img style={{ zIndex: 10 }} width={300} src={MeltingSnowMan} alt="" />
          <h1>{Quiz.error} !!!</h1>
        </Stack>
      )}
    </div>
  );
}

/** 
 * <div className={classes.questionBoard}>
        <div className={classes.header}>
          <img src={Sound} alt="" />
          <span>{'01 / 05'}</span>
          <img src={Hint} alt="" />
        </div>
        <div className={classes.question}></div>
        <div></div>
      </div>
 */
const mapStateToProps = (state) => {
  return {
    dispatch: state.dispatch,
    Quiz: state.Quiz,
  };
};

export default connect(mapStateToProps)(MultiPlayerQuiz);
