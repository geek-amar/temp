/* eslint-disable no-unused-vars */
import { Button, createTheme, TextField } from "@mui/material";
import FrontWave from "assets/images/blackWave.svg";
import BackWave from "assets/images/blueWave.svg";
import Left from "assets/images/left.svg";
import Middle from "assets/images/Middle.svg";
import MobileBackground from "assets/images/mobileIcon.svg";
import MobileRect from "assets/images/mobileRect.svg";
import Right from "assets/images/rightIcon.svg";
import Top from "assets/images/top.svg";
import Ball from "common/ball/Ball";
import { useEffect, useState } from "react";
import { connect } from "react-redux";
import { useMediaQuery } from "react-responsive";
import { useHistory, useLocation } from "react-router";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import {
  sentOtp,
  submitOtp as submitOtpFunction,
} from "store/actions/authAction";
import { useStyle } from "./Login.style";
import OtpInput from "./OtpInput";

const theme = createTheme({
  palette: {
    facebook: {
      main: "var(--darkblue)",
    },
    google: {
      main: "var(--light)",
    },
    twitter: {
      main: "var(--sblue)",
    },
    ASKGAMBLERS: {
      main: "var(--sred)",
    },
    button_color: {
      main: "var(--ored)",
    },
  },
});

function Login(props) {
  const isLaptop = useMediaQuery({
    query: "(min-device-width: 1024px)",
  });
  const { isUserLoggedIn } = props.Auth;
  const [PhoneNumber, setNumber] = useState(0);
  const [isOtp, setIsOtp] = useState(0);
  const [userId, setUserId] = useState(0);
  const history = useHistory();
  const classes = useStyle({
    phone: isOtp ? false : true,
  });
  const location = useLocation();
  const [otp, setOtp] = useState('');

  let { from } = location.state || { from: { pathname: "/" } };

  useEffect(() => {
    if (isUserLoggedIn) {
      history.replace(from);
    }
  }, [isUserLoggedIn, history, from]);

  useEffect(()=>{
    localStorage.removeItem('isUserLoggedIn');
    localStorage.removeItem('user');
    localStorage.removeItem('token');
  },[])

  const OTPsuccess = () =>
    toast.success("OTP Send", {
      position: "top-center",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
  const OTPfail = () => toast("Wrong OTP!");
  const WrongNumber = () =>
    toast.error("Please Enter Correct Mobile Number", {
      position: "top-center",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });

  const LoginSuccess = () =>
    toast.success("Login Success", {
      position: "top-center",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });

  function userCallback(userID, OTPstatus) {
    OTPsuccess();
    setUserId(userID);
    setIsOtp(true);
  }

  function loginCallback() {
    LoginSuccess();
  }

  // OTP REQUEST
  const handlePhone = (e) => {
    setIsOtp(false);
    setOtp('')
    if (PhoneNumber.length !== 10) {
      WrongNumber();
      return 1;
    }
    props.dispatch(
      sentOtp({
        phoneNumber: PhoneNumber,
        userCallback,
      })
    );
  };

  // VERIFY OTP
  const handleLogin = (e) => {
    if (otp.length !== 4) {
      toast.error("please enter OTP to login");
      return
    }
    props.dispatch(submitOtpFunction(userId, otp, loginCallback, OTPfail));
  };

  return (
    <>
      <div className={classes.container}>
        <Ball top={"25%"} width={100} left={"-4%"} />
        {isLaptop ? (
          <div>
            <div className={classes.backWave}>
              <img src={BackWave} alt="" />
            </div>
            <div className={classes.frontWave}>
              <img src={FrontWave} alt="" />
            </div>
          </div>
        ) : (
          <div>
            <div className={classes.mobileImage}>
              <img src={MobileBackground} alt="" />
            </div>
            <div className={classes.mobileImage + " " + classes.mobile}>
              <img src={MobileRect} alt="shadow" />
            </div>
          </div>
        )}

        <div className={classes.wrapper}>
          <div className={classes.fields}>
            <div className={classes.header}>
              <span>Welcome</span>
              <span>Login with play IKC to play and win rewards</span>
            </div>
            {isOtp ? (
              <div
                className={
                  classes.bottom + " " + (isOtp ? "secondContainer" : "")
                }
              >
                <span className={classes.otp}>
                  {isLaptop ? "OTP" : "Enter OTP"}
                </span>
                <div className={classes.optContainer}>
                  <OtpInput
                    inputStyle="optInputBox"
                    value={otp}
                    onChange={(v) => setOtp(v)}
                    numInputs={4}
                    isInputNum={true}
                  />
                </div>
                <Button onClick={handleLogin}>Submit</Button>
              </div>
            ) : null}
            <div className={classes.bottom + " " + "button"}>
              <TextField
                placeholder="Enter Your Number"
                onChange={(e) => setNumber(e.target.value)}
              ></TextField>
              <Button onClick={handlePhone}>
                {isOtp ? "Resend OTP" : "Send OTP"}
              </Button>
              <Ball left={0} width={30} bottom={"-15%"} />
            </div>
          </div>
          {isLaptop && (
            <div className={classes.imageContainer}>
              <div className="top">
                <img src={Top} alt="top" />
              </div>
              <div className="mid">
                <Ball left={"30%"} width={20} top={"-10%"} />
                <img src={Middle} className="mid" alt="middle" />
              </div>
              <div className="left">
                <img src={Left} alt="middle" />
                <Ball left={"-30%"} width={20} bottom={"-15%"} />
              </div>
              <div className="right">
                <img src={Right} alt="middle" />
                <Ball right={"-50%"} width={50} top={"50%"} />
              </div>
            </div>
          )}
        </div>
        <div
          style={{
            display: "flex",
            padding: "0 6rem",
            alignItems: !isLaptop ? "center" : "flex-start",
            justifyContent: !isLaptop ? "center" : "start",
            gridGap: "10px",
            gap: "10px",
            margin: "30px 2px 25px",
            color: "#fff",
            zIndex: 5,
          }}
        >
          <p
            style={{
              textAlign: isLaptop ? "initial" : "center",
              fontSize: "1.3em",
            }}
          >
            {/* We are not storing any private information. <br />  */}
            By continuing you agree to our{" "}
            <span class="Modal_cond__2SP82">
              <a
                style={{ textDecoration: "none", color: "#E1A200" }}
                target="_blank"
                href="https://polbol-media.s3.ap-south-1.amazonaws.com/ToS.pdf"
                rel="noreferrer"
              >
                Terms and Conditions
              </a>
            </span>
          </p>
        </div>
      </div>
    </>
  );
}

export const mapStateToProps = (state) => {
  return state;
};

export const mapDispatchToProps = (dispatch) => {
  return {
    dispatch: dispatch,
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);
