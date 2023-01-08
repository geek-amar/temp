import { makeStyles } from "@mui/styles";

export const useStyle = makeStyles((theme) => ({
  actions: {
    position: "relative",
    width: "100%",
    display: "flex",
    justifyContent: "center",
    gap: "15px",
    marginBottom: "1rem",
    "& button": {
      width: "100px",
      cursor: "pointer",
      color: "white",
      fontWeight: "700",
      background: "linear-gradient(92.86deg, #E1A200 0%, #FF5C00 100%)",
      borderRadius: "5px",
      padding: "0.75rem 1rem",
      "& a": {
        textDecoration: "none",
        color: "white",
      },
      "& span": {
        fontSize: "12px !important",
        margin: 0,
      },
    },
  },
  button: {
    border: 0,
    outline: 0,
    // padding: "0 10px",
    minWidth: "30px",
    textAlign: "center",
    fontWeight: 700,
    background: "linear-gradient(92.86deg, #E1A200 0%, #FF5C00 100%)",
    color: "white",
    borderRadius: "5px",

    "&.disabled": {
      background:
        "linear-gradient(92.86deg, lightgray 0%, #CCCCCC 100%) !important",
      cursor: "not-allowed",
    },
  },

  scoreBoard: {
    display: "flex",
    justifyContent: "center",
    gap: "10px",
    marginTop: "3rem",
    zIndex: 10,
    position: "relative",
    padding: "0 1rem",
    "& .mid": {
      width: "280px",
      maxWidth: "100%",
      "@media (max-width: 500px)": {
        width: "100%",
      },
    },
  },
  palceholderCard: {
    minWidth: "45px",
    maxWidth: "55px",
  },
  cards: {
    minWidth: "140px",
    maxWidth: "160px",
    position: "relative",
    "@media (max-width: 500px)": {
      minWidth: "110px",
      maxWidth: "110px",
    },
    "@media (max-width: 360px)": {
      minWidth: "98px",
      maxWidth: "98px",
    },
    minHeight: "90px",
    maxHeight: "100px",
    background: "#0F0F0F",
    zIndex: 10,
    border: "2px solid",
    borderColor: "#FF5C00",
    borderRadius: "10px",
    boxSizing: "border-box",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    textAlign: "center",
    "& span": {
      color: "#5b5b5b",
      fontSize: "15px",
      fontWeight: 600,
      "@media (max-width: 500px)": {
        fontSize: "12px",
      },
    },

    "& :nth-child(1)": {
      color: "#ff5c00",
      fontSize: "18px",
      textOverflow: "ellipsis",
      overflow: "hidden",
      width: "100%",
      padding: "0 5px",
    },
  },

  questionBoard: {
    display: "flex",
    justifyContent: "center",
    flexDirection: "column",
    alignItems: "center",
    minHeight: "60vh",
    width: "100%",

    "& .innerContainer": {
      width: "100%",
      "@media (max-width: 500px)": {
        padding: "0",
      },
      padding: "0 10rem",
    },
  },

  details: {
    marginTop: "2rem",
    "@media (max-width: 500px)": {
      padding: "0 1rem",
      margin: "2rem 0",
    },
  },

  questionContainer: {
    background: "#0f0f0f",
    zIndex: 100,
    position: "relative",
    right: 0,
    left: 0,
    margin: "auto",
    border: "2px solid",
    borderColor: "#FF5C00",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    gap: "10px",
    borderRadius: "10px",
    marginTop: "2px",
  },
  header: {
    // background: 'red',
    flex: 1,
    width: "100%",
    padding: "10px 32px",
    maxWidth: "700px",
    textAlign: "start",

    "@media (max-width: 500px)": {
      // padding: '2rem 3rem',
    },
  },
  footer: {
    padding: "2rem 5rem",
    maxWidth: "700px",

    "@media (max-width: 500px)": {
      padding: "2rem 3rem",
      textAlign: "center",
    },
  },
  sound: {
    display: "flex",
    width: "100%",
    justifyContent: "space-between",
    alignItems: "center",
    "& .number": {
      color: "#3a3f41",
      fontSize: "18px",
      fontWeight: 600,
      "& .first": {
        fontSize: "23px",
        color: "#FF5C00",
      },
    },
  },
  questions: {
    // background: 'red',
    userSelect: "none !important",
    color: "white",
    fontSize: "17px",
    paddingTop: "10px",
    "@media (max-width: 500px)": {
      // width: '330px',
      // padding: '0',
    },
  },
  options: {
    display: "grid",
    gridTemplateColumns: "auto auto",
    gap: "30px",
    paddingBottom: "3rem",
    "@media (max-width: 500px)": {
      gridTemplateColumns: "auto",
    },
  },
  bottomPart: {
    display: "flex",
    justifyContent: "space-between",
    padding: "0 1rem",
    marginBottom: "3rem",
    gap: "10px",
    "& .cards": {
      flex: 1,
    },
  },
}));
