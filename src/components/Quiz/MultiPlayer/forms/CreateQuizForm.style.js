import { makeStyles } from "@mui/styles";

export const useStyle = makeStyles((theme) => ({
  titleLabel: {
    fontSize: "14px",
    color: "#808080",
    fontWeight: 600,
    margin: "0",
    padding: "0",
  },
  textInput: {
    height: "45px",
    padding: "1rem",
    background: "transparent",
    outline: "none",
    borderRadius: "5px",
    color: "white",
    border: "1px solid #5b5b5b",
    textAlign: "left",
    fontSize: "14px",

    "@media (max-width: 500px)": {
      width: "100%",
    },
  },
  entryFee: {
    display: "flex",
    marginTop: "10px",
    justifyContent: "center",
    alignItems: "center",
    gap: "10px",
    marginBottom: "5px",
    fontSize: "14px",
    color: "#fff",
    fontWeight: 600,
  },
  buttonContainer: {
    width: "100%",
    display: "flex",
    justifyContent: "center",
    gap: "1rem",
    "& button": {
      width: "120px",
      padding: "0.5rem",
      background: "linear-gradient(92.86deg, #E1A200 0%, #FF5C00 100%)",
      fontSize: "14px",
      color: "white",
      fontWeight: 600,
    },
  },
  container: {
    display: "flex",
    flexDirection: "column",
    padding: "1rem",
    gap: "10px",

    "@media (max-width: 500px)": {
      gap: "40px",
    },
  },
  top: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    gap: "10px",
    fontSize: "14px",
    color: "white",
    border: "2px solid #E1A200",
    borderRadius: "5px",
    "& div": {
      margin: "1rem",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      gap: "15px",

      "& img": {
        width: "25px",
        height: "25px",
      },
    },

    "& .button": {
      background: "linear-gradient(92.86deg, #E1A200 0%, #FF5C00 100%)",
      padding: "1rem",
      gap: "5px",
      borderRadius: "10px",
      cursor: "pointer",
    },

    "@media (max-width: 500px)": {
      gap: "10px",
      "& div": {
        gap: "5px",
        fontSize: "11px",
        color: "#808080",

        "& .img": {
          color: "#ffffff",
          fontSize: "18px",
        },
      },
      "& .button": {
        color: "white",
        fontWeight: 600,
      },
    },
  },
  bottom: {
    display: "flex",
    flexDirection: "column",
    // border: '2px solid #E1A200',
    // borderRadius: '10px',
    padding: "1rem",
    gap: "20px",
  },

  details: {
    display: "flex",
    justifyContent: "center",
    gap: "25px",
    "@media (max-width: 500px)": {
      flexDirection: "column-reverse",
      position: "relative",
    },
  },
  header: {
    textAlign: "center",
    paddingTop: "1rem",
    color: "#E1a200",
    "& span": {
      fontSize: "25px",
      fontWeight: 600,
      padding: "0rem 2rem 0.5rem 1rem",
      borderBottom: "1px solid #5b5b5b",
    },

    // '@media (max-width: 500px)': {
    //   display: 'none',
    // },
  },
  header2: {
    textAlign: "center",
    paddingTop: "1rem",
    color: "gray",
    "& span": {
      fontSize: "22px",
      fontWeight: 600,
      padding: "0rem 2rem 0.5rem 1rem",
      borderBottom: "1px solid #5b5b5b",
    },

    // '@media (max-width: 500px)': {
    //   display: 'none',
    // },
  },
  subheader: {
    textAlign: "center",
    paddingTop: "0rem",
    color: "#ccc",
    "& span": {
      fontSize: "16px",
      fontWeight: 600,
      padding: "0rem 2rem 0.5rem 1rem",
    },

    // '@media (max-width: 500px)': {
    //   display: 'none',
    // },
  },
  left: {
    display: "flex",
    flexDirection: "column",
    "@media (max-width: 500px)": {
      marginTop: "5rem",
    },
  },
  input: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "stretch",
    gap: "10px",
    marginBottom: "5px",
    marginTop: "5px",
    // outline: '1px solid red',
    flex: "1",

    "& .label": {
      position: "relative",
      // margin: 'auto',
      display: "flex",
      flexDirection: "column",
      width: "100%",

      "& label": {
        fontSize: "14px",
        color: "#808080",
        fontWeight: 600,
        margin: "0",
        padding: "0",
      },

      // "& input::-webkit-outer-spin-button": {
      //   "-webkit-appearance": "none",
      //   margin: 0,
      // },
      // "& input::-webkit-inner-spin-button": {
      //   "-webkit-appearance": "none",
      //   margin: 0,
      // },

      // '& input[type="datetime-local"]::-webkit-calendar-picker-indicator': {
      //   color: "white",
      //   opacity: 1,
      //   display: "block",
      //   background: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='20' height='20' viewBox='0 0 24 24' stroke-width='1.5' stroke='%23ffffff' fill='none' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath stroke='none' d='M0 0h24v24H0z' fill='none'/%3E%3Crect x='4' y='5' width='16' height='16' rx='2' /%3E%3Cline x1='16' y1='3' x2='16' y2='7' /%3E%3Cline x1='8' y1='3' x2='8' y2='7' /%3E%3Cline x1='4' y1='11' x2='20' y2='11' /%3E%3Cline x1='11' y1='15' x2='12' y2='15' /%3E%3Cline x1='12' y1='15' x2='12' y2='18' /%3E%3C/svg%3E") no-repeat`,
      //   // width: '20px',
      //   // height: '20px',
      //   borderWidth: "thin",
      // },

      "& input": {
        // width: '200px',
        width: "100%",
        height: "45px",
        padding: "1rem",
        background: "transparent",
        outline: "none",
        borderRadius: "5px",
        color: "white",
        border: "1px solid #5b5b5b",
        textAlign: "left",
        fontSize: "14px",

        "@media (max-width: 500px)": {
          width: "100%",
        },
      },
      "& select": {
        width: "200px",
        height: "45px",
        padding: "1rem",
        background: "#000",
        outline: "none",
        borderRadius: "5px",
        color: "white",
        border: "1px solid #5b5b5b",
        textAlign: "left",
        fontSize: "14px",

        "@media (max-width: 500px)": {
          width: "100%",
        },
      },
      "& .span": {
        position: "absolute",
        bottom: 0,
        top: 0,
        display: "flex",
        alignItems: "center",
        left: "5%",
        margin: "auto",
        fontSize: "15px",
        fontWeight: 600,
      },
    },

    "@media (max-width: 500px)": {
      display: "flex",
      flexDirection: "column",
      "& .label": {
        margin: 0,
      },
    },
  },
  box: {
    display: "flex",
    "& input": {
      width: "92px",
      height: "45px",
      padding: "1rem",
      background: "transparent",
      outline: "none",
      borderRadius: "5px",
      color: "white",
      border: "1px solid #5b5b5b",
      textAlign: "right",
      fontSize: "14px",
    },
    justifyContent: "space-around",
    gap: "15px",

    "@media (max-width: 500px)": {
      "& input": {
        width: "100%",
      },
    },
  },
  right: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    gap: "10px",
    "& img": {
      width: "100px",
      height: "100px",
    },

    "& span": {
      color: "#FF6868",
    },

    "@media (max-width: 500px)": {
      position: "absolute",
      top: "-7%",
      left: 0,
      right: 0,
      margin: "auto",
      "& img": {
        width: "50px",
        height: "50px",
      },
    },
  },

  leftBox: {},
  rightBox: {
    "@media (min-width:600px)": {
      minHeight: "50%",
      justifyContent: "center",
      alignItems: "center",
      textAlign: "center",
      display: "flex",
    },
  },
  wrapper: {},
  check: {
    marginTop: "2rem",
    display: "grid",
    gridTemplateColumns: "auto auto",
    gap: "10px",
    rowGap: "20px",
    "& span": {
      color: "#5b5b5b",
      fontSize: "12px",
      fontWeight: 600,
    },

    "& .checkboxCheck": {
      marginLeft: "1rem",
      cursor: "pointer",
      "& .toggle": {
        marginTop: "6px",
        position: "relative",
        height: "10px",
        width: "40px",
        borderRadius: "15px",
        background: "linear-gradient(92.86deg, #E1A200 0%, #FF5C00 100%)",
      },
      "& .toggle-state": {
        display: "none",
      },
      "& .indicator": {
        height: "20px",
        width: "20px",
        background: "#ecf0f3",
        borderRadius: "15px",
        transform: "translate3d(0%, -30%, 0)",
        transition: "transform 0.4s cubic-bezier(0.85, 0.05, 0.18, 1.35)",
        // boxShadow: '-8px -4px 8px 0px #ffffff, 8px 4px 12px 0px #d1d9e6',
      },

      "& .toggle-state:checked ~ .indicator": {
        transform: "translate3d(100%, -30%, 0)",
      },
    },

    "@media (max-width: 500px)": {
      display: "flex",
      flexDirection: "column",
      padding: "0 2rem",
      "& div": {
        display: "flex",
        justifyContent: "space-between",
      },
    },
  },
}));
