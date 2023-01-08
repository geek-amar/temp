import { makeStyles } from "@mui/styles";

export const useStyles = makeStyles((theme) => ({
  container: {
    "& .front": {
      position: "absolute",
      top: "0%",
      width: "100%",
      objectFit: "cover",
      zIndex: 5,
    },
    "& .back": {
      position: "absolute",
      top: "0%",
      width: "100%",
      objectFit: "cover",
      zIndex: 1,
    },
    "@media (max-width: 500px)": {
      "& .front": {
        display: "none",
      },
      "& .back": {
        display: "none",
      },
    },
  },
  wrapper: {},
}));
