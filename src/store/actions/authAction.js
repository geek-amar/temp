import api from "api";
import {
  LOGIN_FAILURE,
  LOGIN_SUCCESS,
  LOGOUT_SUCCESS,
  UPDATE_USER_INFO,
} from ".";

export const LogOut = () => {
  return async (dispath) => {
    localStorage.removeItem("user");
    localStorage.removeItem("token");
    localStorage.removeItem("isUserLoggedIn");
    localStorage.removeItem("ikcAmount");
    dispath({ type: LOGOUT_SUCCESS });
  };
};

export const sentOtp = ({ phoneNumber, userCallback }) => {
  return async (dispatch) => {
    try {
      const body = {
        phone: phoneNumber,
      };

      const res = await api.ikcplay.fetch(`/login/phone`, {
        method: "POST",
        body: JSON.stringify(body),
      });

      userCallback(res.payload._id);
    } catch (error) {
      console.log(error);
      alert("Login credentials doesn't match");
      dispatch({ type: LOGIN_FAILURE, payload: error });
    }
  };
};

export const submitOtp = (userID, OTP, loginCallback, OTPfail) => {
  return (dispatch) => {
    api.ikcplay
      .fetch(`/user/${userID}/verify-otp?otp=${OTP}`)
      .then((res) => {
        localStorage.setItem("user", JSON.stringify(res?.payload?.user));
        localStorage.setItem(
          "token",
          JSON.stringify(res?.payload?.token?.token)
        );
        localStorage.setItem("isUserLoggedIn", true);
        dispatch({
          type: LOGIN_SUCCESS,
          payload: {
            user: res.payload?.user,
            token: res.payload?.token,
          },
        });

        loginCallback();
      })
      .catch((error) => {
        OTPfail("OTP doesn't work properly");
      });
  };
};

export const getUserDetails = () => {
  return async (dispatch) => {
    const res = await api.ikcplay.getUser();
    localStorage.setItem("user", JSON.stringify(res.payload));
    dispatch({
      type: UPDATE_USER_INFO,
      payload: res.payload,
    });
  };
};

export const setUserInfo = (useInfo) => (dispatch) => {
  dispatch({
    type: UPDATE_USER_INFO,
    payload: useInfo,
  });
};

export const updateUserInfo = () => async (dispatch) => {
  try {
    const res = await api.ikcplay.fetch("/user");
    dispatch({
      type: UPDATE_USER_INFO,
      payload: res.payload,
    });
  } catch (error) {}
};
