import api from "api";
import {
  CATEGORY_LOAD_FAILED,
  CATEGORY_LOAD_START,
  CATEGORY_SUCCESSFULL,
} from "../actions/index";

export const fetchAllCategories = (onError = () => {}) => {
  return async (dispatch) => {
    dispatch({
      type: CATEGORY_LOAD_START,
    });

    try {
      const response = await api.ikcplay.fetch("/quiz/fetchAllCategories");
      if (response.error) {
        dispatch({
          type: CATEGORY_LOAD_FAILED,
          payload: response.message || "something went wrong",
        });

        onError(response.error);
      } else {
        dispatch({
          type: CATEGORY_SUCCESSFULL,
          payload: response.payload,
        });
      }
      return response.payload;
    } catch (error) {
      dispatch({
        type: CATEGORY_LOAD_FAILED,
        payload: error.message || "something went wrong",
      });

      onError(error.message);
    }
  };
};
