import { makeStyles } from "@mui/styles";

export const useStyle = makeStyles((theme) => ({
  wrapper: {},
  connect: {
    "@media (max-width: 500px)": {
      fontSize: "14px",
    },
  },
  icons: {
    margin: "10px auto",
    position: "relative",
    display: "flex",
    justifyContent: "end",
    flexDirection: "row !important",
    // outline: "1px solid blue",
    width: "100%",

    "& div": {
      overflow: "hidden",
      // background: "blue",
      maxHeight: "32px",
      maxWidth: "32px",
      flexDirection: "row",
      justifyContent: "flex-end",
      alignItems: "flex-end",
      display: "flex",
      // padding: '10px',
    },
  },
  yellow: {
    color: "#E1A200",
  },
  detailsText: {
    fontWeight: "normal",
    fontSize: "14px",

    "@media (max-width: 500px)": {
      fontSize: "12px",
    },
  },
  top: {
    display: "flex",
    justifyContent: "space-between",
    padding: "10px",
    background: "#000000",
    position: "relative",
    "& img:first-child": {
      maxWidth: "200px",
      objectFit: "contain",
      zIndex: 5,
      "@media (max-width: 500px)": {
        display: "block",
        maxWidth: "120px",
      },
    },
    "& img": {
      maxWidth: "200px",
      objectFit: "contain",
      zIndex: 5,
      "@media (max-width: 500px)": {
        display: "none",
      },
    },
    "&::after": {
      content: '""',
      position: "absolute",
      bottom: 0,
      left: 0,
      width: "100%",
      height: "75px",
      "@media (max-width: 500px)": {
        height: "20px",
      },
      background: "linear-gradient(92.86deg, #E1A200 0%, #FF5C00 100%)",
    },
  },
  details: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    fontSize: "18px",
    letterSpacing: "1px",
    color: "white",
    fontWeight: 600,
    "& div": {
      display: "flex",
      flexDirection: "column",

      gap: "10px",

      "& span": {
        cursor: "pointer",
      },
    },
  },
  bottom: {
    padding: "20px",
    background: "#000000",
  },

  end: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    fontSize: "20px",
    color: "white",
    marginTop: "1rem",

    "& span": {
      alignSelf: "flex-end",
    },

    "@media (max-width: 500px)": {
      fontSize: "14px",
    },
  },
}));
