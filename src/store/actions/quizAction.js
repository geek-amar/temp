import api from "api";
import { USER_SERVER } from "config";
import { QUESTION_LOAD_ERROR, QUESTION_LOAD_START, SET_QUESTION } from ".";

export const startQuiz = (quizId) => {
  return async (dispatch) => {
    dispatch({
      type: QUESTION_LOAD_START,
    });

    fetch(
      `${USER_SERVER}/singlePlayerQuiz/start${
        localStorage.getItem("token") ? "" : "/guest"
      }?quizId=${quizId}`,
      {
        headers: localStorage.getItem("token")
          ? {
              "Content-type": "application/json",
              Authorization:
                "Bearer " + JSON.parse(localStorage?.getItem("token")),
            }
          : {},
      }
    )
      .then((response) => response.json())
      .then((response) => {
        dispatch({
          type: SET_QUESTION,
          payload: response.payload,
        });
        return response.payload;
      })
      .catch((error) => {
        dispatch({
          type: QUESTION_LOAD_ERROR,
          payload: error.message,
        });
      });
  };
};

export const startDailyQuiz = (quizId) => {
    return async (dispatch) => {
      dispatch({
        type: QUESTION_LOAD_START,
      });
      try {
        let res = await api.ikcplay.fetch(`/dailyQuiz/start?quizId=${quizId}`);
        if (res.payload) {
          dispatch({
            type: SET_QUESTION,
            payload: res.payload,
          });
  
          return res.payload.data;
        } else {
          dispatch({
            type: QUESTION_LOAD_ERROR,
            payload: res.message,
          });
        }
      } catch (error) {
        dispatch({
          type: QUESTION_LOAD_ERROR,
          payload: error.message
        });
      }
    };
  };



export const startMultiPlayerQuiz = (quizId) => {
  return async (dispatch) => {
    dispatch({
      type: QUESTION_LOAD_START,
    });

    try {
      let res = await api.ikcplay.fetch(`/quiz/start?quizId=${quizId}`);
      if (res.payload) {
        dispatch({
          type: SET_QUESTION,
          payload: res.payload.data,
        });

        return res.payload.data;
      } else {
        dispatch({
          type: QUESTION_LOAD_ERROR,
          payload: res.message,
        });
      }
    } catch (error) {
      dispatch({
        type: QUESTION_LOAD_ERROR,
        payload:
          error.message === "NOTREGISTERED"
            ? "You are not registered"
            : "Something went wrong",
      });
    }
  };
};

export const startPrivateMultiPlayerQuiz = (quizCode, quizId) => {
  return async (dispatch) => {
    dispatch({
      type: QUESTION_LOAD_START,
    });

    try {
      let res = await api.ikcplay.fetch(
        `/quiz/startPrivateQuiz?code=${quizCode}`,
        { method: "POST" }
      );
      if (res.payload) {
        if (res.payload.alreadyRegistered) {
          dispatch({
            type: QUESTION_LOAD_ERROR,
            payload: "Already attempted quiz once",
          });
          return;
        }
        dispatch({
          type: SET_QUESTION,
          payload: res.payload,
        });

        return res.payload;
      } else {
        dispatch({
          type: QUESTION_LOAD_ERROR,
          payload: res.message,
        });
      }
    } catch (error) {
      dispatch({
        type: QUESTION_LOAD_ERROR,
        payload: error.message,
      });
    }
  };
};

export const startPrivateQuiz = (code) => {
  return async (dispatch) => {
    dispatch({
      type: QUESTION_LOAD_START,
    });

    try {
      let res = await api.ikcplay.startPrivateQuiz(code);
      if (!res.payload.alreadyRegistered) {
        dispatch({
          type: SET_QUESTION,
          payload: res.payload,
        });

        return res.payload;
      } else {
        dispatch({
          type: QUESTION_LOAD_ERROR,
          payload: res.message,
        });
      }
    } catch (error) {
      dispatch({
        type: QUESTION_LOAD_ERROR,
        payload: error.message,
      });
    }
  };
};
