import { makeStyles } from "@mui/styles";

export const useStyle = makeStyles((theme) => ({
  container: {
    background: "#000000",
    padding: "2rem 4rem",
    "@media (max-width:460px)": {
      padding: "2rem",
    },
    minHeight: "60vh",
  },
  frontWave: {
    position: "absolute",
    top: (props) => (props.phone ? "-5%" : "-19%"),
    left: 0,
    "& img": {
      width: "100%",
      height: "100%",
    },
  },
  backWave: {
    position: "absolute",
    top: (props) => (props.phone ? "-5%" : "-19%"),
    left: 0,
    "& img": {
      width: "100%",
      height: "100%",
    },
  },
  wrapper: {
    padding: "2rem 6rem",
    "@media (max-width:460px)": {
      padding: "1rem",
    },
    display: "flex",
    justifyContent: "space-between",
    zIndex: 5,
    position: "relative",
  },
  fields: {
    display: "flex",
    flexDirection: "column",
    gap: "20px",
    zIndex: 5,
    "@media (max-width:460px)": {
      justifyContent: "space-between",
      flex: 1,
      "& .secondContainer": {
        margin: "2rem 0 4rem 0",
        "& button::after": {
          position: "absolute",
          bottom: "-100%",
          content: '""',
          width: "100%",
          height: "3px",
          background: "linear-gradient(92.86deg, #E1A200 0%, #FF5C00 100%)",
        },
      },
    },
  },
  header: {
    display: "flex",
    flexDirection: "column",
    padding: "3px",
    fontSize: "16px",
    color: "#ffffff",
    "& :nth-child(1)": {
      fontSize: "30px",
      fontWeight: 700,
      color: "#E1A200",
    },
    marginBottom: "2rem",
    "@media (max-width:460px)": {
      marginBottom: "5rem",
      textAlign: "center",
    },
  },
  bottom: {
    display: "flex",
    flexDirection: "column",
    gap: "8px",

    "@media (max-width:460px)": {
      gap: "15px",
      "&.button": {
        "& :nth-child(2)": {
          alignSelf: "center",
          justifyContent: "center",
        },
      },
      "& :nth-child(2)": {
        justifyContent: (props) => (props.otp ? "center" : "space-between"),
      },
      "& :nth-child(3)": {
        alignSelf: "center",
      },
      padding: "0 3rem",
    },

    "& fieldset": {
      border: "none",
      outline: "none",
    },

    "& input": {
      flex: 1,
      color: "white",
      fontSize: "16px",
      outline: "none",
      border: "1px solid #FF5C00",
      margin: "5px 0",
      borderRadius: "5px",
      "@media (max-width:460px)": {
        textAlign: "center",
        fontWeight: 600,
        color: "#FF5C00 !important",
      },

      "&:hover": {
        outline: "none",
      },
    },
    "& button": {
      width: "120px",
      padding: "0.5rem",
      background: "linear-gradient(92.86deg, #E1A200 0%, #FF5C00 100%)",
      fontSize: "14px",
      color: "white",
      fontWeight: 600,
    },
  },

  imageContainer: {
    position: "absolute",
    top: "10%",
    right: "6%",
    "& .mid": {
      maxWidth: "300px",
    },
    "& .top": {
      position: "absolute",
      right: "8%",
      top: "-2%",
      "& img": {
        maxWidth: "80px",
      },
    },

    "& .left": {
      position: "absolute",
      left: "-30%",
      bottom: 0,
      "& img": {
        maxWidth: "150px",
      },
    },

    "& .right": {
      position: "absolute",
      right: "-7%",
      bottom: "-18%",
      "& img": {
        maxWidth: "150px",
      },
    },
  },
  otp: {
    fontSize: "18px",
    fontWeight: 600,
    color: "#E1A200",
    "@media (max-width: 460px)": {
      textAlign: "center",
    },
  },
  optContainer: {
    display: "flex",
    gap: "14px",

    "& .optInputBox": {
      width: '47px !important',
      height: '53px',
      background: 'transparent',
      margin: '2px 8px',
      "&::-webkit-outer-spin-button": {
        "-webkit-appearance": "none",
        margin: 0,
      },
      "&::-webkit-inner-spin-button": {
        "-webkit-appearance": "none",
        margin: 0,
      },
    },
    "& input[type=number]": {
      "-moz-appearance": "textfield",
    },
    padding: 0,
  },
  waveContainer: {},
  mobileImage: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    "& img": {
      width: "100%",
    },
  },
  mobile: {
    opacity: "50%",
    top: "-2%",
  },
}));
