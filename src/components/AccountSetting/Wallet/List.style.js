import { makeStyles } from "@mui/styles";

export const useStyle = makeStyles((theme) => ({
  container: {
    display: "flex",
    padding: "1.5rem",
    border: "1px solid #e1a200",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: "10px",
    color: "white",
    borderRadius: "10px",
    "& .left": {
      display: "flex",
      gap: "10px",
      alignItems: "center",
    },
    "& .right": {
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      "& .points": {
        display: "flex",
        alignItems: "center",

        "& img": {
          marginLeft: "3px",
        },
        "& .money": {
          fontSize: "12px",
          marginBottom: "-2px",
        },
      },
      "& .status": {
        color: "#e1a002",
      },
    },
  },
}));
