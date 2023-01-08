import { makeStyles } from "@mui/styles";

export const useStyle = makeStyles((theme) => ({
  wrapper: {
    // width: '300px',
    // boxSizing: 'border-box',
    // background: 'white',
  },
  container: {
    width: "300px",
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-start",
    gap: "10px",
    background: (props) => (props.blur ? "grey" : "#EFEFEF"),
    height: "100%",
    fontSize: "18px",
    cursor: "pointer",
  },
  list: {
    padding: 10,
    minWidth: "50px",
    textAlign: "center",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    height: "100%",
    fontWeight: 700,
    background: "linear-gradient(92.86deg, #E1A200 0%, #FF5C00 100%)",
    color: "white",
  },
  text: {
    fontWeight: 500,
    flexGrow: 1,
    fontSize: "12px",
    marginRight: "10px",
  },
}));
