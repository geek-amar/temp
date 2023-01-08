import { LOGOUT_SUCCESS, LOGIN_SUCCESS, UPDATE_USER_INFO } from "store/actions";

const Initial_State = {
  isUserLoggedIn:
    localStorage?.getItem("isUserLoggedIn") === "true" ? true : false,
  user: JSON?.parse(localStorage?.getItem("user")) ?? null,
  token: localStorage?.getItem("token") ? localStorage?.getItem("token") : null,
  ikcAmount: 0,
  isFetching: false,
  error: false,
};

const Authreducer = (state = Initial_State, action) => {
  switch (action.type) {
    case UPDATE_USER_INFO:
      return {
        ...state,
        user: action.payload,
      };
    case LOGIN_SUCCESS:
      return {
        ...state,
        user: action.payload.user,
        isUserLoggedIn: true,
        token: action.payload.token,
      };
    case LOGOUT_SUCCESS:
      return {
        ...state,
        isUserLoggedIn: false,
        user: null,
        token: null,
        isFetching: false,
        error: false,
      };
    default:
      return {
        ...state,
      };
  }
};

export default Authreducer;
