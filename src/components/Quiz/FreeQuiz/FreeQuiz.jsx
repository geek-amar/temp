import { Stack } from "@mui/material";
import { Spinner } from "assets";
import MeltingSnowMan from "assets/images/melting-snowman.svg";
import QuizContainer from "components/Quiz/SinglePlayerQuizContainer";
import { useEffect, useState } from "react";
import { connect } from "react-redux";
import { useParams } from "react-router-dom";
import { startQuiz, startDailyQuiz } from "store/actions/quizAction";
import singlePageBackground from "../../../assets/images/singlePageBackground.svg";
import singlePageBackgroundBlue from "../../../assets/images/singlePageBackgroundBlue.svg";
import { useStyles } from "./FreeQuiz.style";

function FreeQuiz({ dispatch, Quiz }) {
  let { quizId } = useParams();
  const classes = useStyles();
  const [questionIdx, setQuestionIdx] = useState(0);
  const [resultId, setResultId] = useState();
  const [result, setResult] = useState(null);
  const [end, setEnded] = useState(false);

  useEffect(() => {
    if (quizId) {
      dispatch(startQuiz(quizId));
    }
  }, [quizId]);

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
              questions={Quiz.questions}
              setQuestionIdx={setQuestionIdx}
              question={Quiz.questions[questionIdx]}
              ResultId={Quiz.resultId}
              questionIdx={questionIdx}
              setNextQues={true}
              quizResult={result}
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
          <img style={{ zIndex: 10 }} width={300} src={MeltingSnowMan} alt="" />
          <h1>{Quiz.error} !!!</h1>
        </Stack>
      )}
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    dispatch: state.dispatch,
    Quiz: state.Quiz,
  };
};

export default connect(mapStateToProps)(FreeQuiz);
