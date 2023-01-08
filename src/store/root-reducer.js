import { combineReducers } from "redux";
import Authreducer from "./reducers/authReducer";
import CategoryReducer from "./reducers/categoriesReducer";
import QuizReducer from "./reducers/quizReducer";

const rootReducer = combineReducers({
  Auth: Authreducer,
  Quiz: QuizReducer,
  Categories: CategoryReducer,
});

export default rootReducer;
