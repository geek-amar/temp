import { makeStyles } from "@mui/styles";

export const useStyle = makeStyles((theme) => ({
  pagination: {
    padding: 5,
    borderRadius: 5,
    // outline: '1px solid #ccc',
    display: "flex",
    justifyContent: "center",
    alignItems: "center",

    "& :not(.Mui-selected)": {
      backgroundColor: "transparent",
      color: "#fff",
    },
    "& .Mui-selected": {
      color: "#fff",
      fontWeight: "bold",
      background: "#E1A200 !important",
    },
    "& .Mui-selected:disabled": {
      background: "gray !important",
    },
  },
  header: {
    display: "flex",
    justifyContent: "center",
    gap: "1rem",
    borderBottom: "1px solid #5b5b5b",
    "& span": {
      // margin: '0 1rem',
      padding: "0.5rem 1rem 0 1rem",
      fontSize: "14px",
      color: "#5B5B5B",
      fontWeight: 500,
      cursor: "pointer",
      paddingBottom: "0.5rem",
      boxSizing: "border-box",
    },
    "& .color": {
      borderBottom: "3px solid #e1a200",
      color: "#e1a200",
    },
  },
  duoContainer: {
    flexGrow: 1,
    border: "1px solid #E1A200",
    display: "flex",
    flexDirection: "column",
    // gap: '10px',
    flex: 0,
    paddingBottom: "1rem",
    // maxWidth: '380px',
    justifyContent: "space-around",
    alignItems: "center",
    padding: "0 1rem",
    borderRadius: "10px",
    "& .list": {
      width: "100%",
      "& img": {
        marginLeft: 0,
      },
    },

    "@media (max-width: 500px)": {
      // padding: '2rem 3rem',
      // maxWidth: '330px',
    },
  },
  duo: {
    width: "100%",
    display: "flex",
    justifyContent: "space-between",
    // padding: '0 0rem 1rem 0.5rem',

    "& .winner": {
      fontSize: "14px",
      color: "#00AB11",
      fontWeight: 600,
    },

    "& .score": {
      fontSize: "10px",
      color: "#E1A200",
      display: "flex",
      gap: "10px",
      "& .points": {
        fontSize: "11px",
        color: "white",
        fontWeight: 600,
      },
    },
  },
  list: {
    padding: "0 0.5rem",
    marginTop: "1.5rem",
    display: "flex",
    justifyContent: "space-between",
    width: "100%",
    fontSize: "16px",
    alignItems: "center",
    gap: "10px",
    "& .type": {
      flex: 1,
      // textAlign: 'right',
      color: "#5B5B5B",
      fontWeight: 600,
    },
    "& .points": {
      flex: 1,
      whiteSpace: "nowrap",
      overflow: "hidden",
      textOverflow: "ellipsis",
      color: "#ffffff",
      fontWeight: 500,
    },
    margin: 0,

    "@media (max-width: 500px)": {
      width: "100%",
      padding: 0,
    },
  },
  listContainer: {
    flex: 1,
    whiteSpace: "nowrap",
    overflow: "hidden",
    textOverflow: "ellipsis",
    width: "auto",
    color: "#E1A200",
    fontWeight: 600,
    "& img": {
      marginRight: "10px",
      width: "35px",
      height: "35px",
    },
  },
  bottom: {
    position: "relative",
    padding: "1rem 2rem",
    display: "flex",
    gap: "10px",
    flexDirection: "column",
  },
}));
