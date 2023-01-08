const Initial_state = {
  resultId: null,
  questions: [],
  loading: true,
  error: "",
};

const QuizReducer = (state = Initial_state, action) => {
  switch (action.type) {
    case "SET_QUESTION":
      return {
        resultId: action.payload.resultId,
        questions: action.payload.questions,
        topScore: action.payload.topScore,
        loading: false,
      };
    case "QUESTION_LOAD_START":
      return {
        ...state,
        loading: true,
        questions: [],
        error: "",
        resultId: null,
      };
    case "QUESTION_LOAD_ERROR":
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};
export default QuizReducer;
