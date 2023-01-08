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
  },
  imageContainer: {
    zIndex: 5,
    "& img": {
      width: "100%",
      position: "absolute",
      top: "-5%",
      left: 0,
    },
    "& .image1": {
      zIndex: 10,
    },
    "& .image2": {},

    "@media (max-width: 500px)": {
      display: "none",
    },
  },
  mobileImageContainer: {
    zIndex: 5,
    display: "none",
    "@media (max-width: 500px)": {
      display: "block",
    },
    "& img": {
      width: "100%",
      position: "absolute",
      top: 0,
      left: 0,
    },
    "& .image1": {
      zIndex: 10,
      opacity: "50%",
    },
  },
  container: {
    display: "flex",
    justifyContent: "center",
    minHeight: "max-content",
    alignItems: "center",

    "@media (max-width: 500px)": {
      "& .image": {
        display: "none",
      },
    },
  },
  wrapper: {
    position: "relative",
    zIndex: 100,
    marginTop: "10rem",

    "@media (max-width: 500px)": {
      marginTop: "4rem",
    },
  },
  header: {
    position: "relative",
    // minHeight: '100%',
    marginTop: "10rem",
    display: "flex",
    flexDirection: "column",
    justifyContent: "flex-end",
    "@media (max-width: 500px)": {
      minHeight: "max-content",
      marginTop: "8rem",
    },
  },
  result: {
    width: "100%",
    height: "100%",
    // outline: '1px solid #E1A200',

    "@media (max-width: 500px)": {
      width: "350px",
      height: "100%",
      display: "flex",
      position: "relative",
      marginBottom: "5rem",
    },
  },
  card: {
    width: "250px",
    height: "130px",
    background: "#0F0F0F",
    borderRadius: "10px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    padding: "1.5rem 0",
    fontSize: "15px",
    color: "white",
    gap: "10px",
    margin: "auto",
    "& img": {
      alignSelf: "center",
      // marginLeft: '2rem',
    },
    "& span": {
      marginLeft: "1rem",
      marginTop: "1rem",
    },

    marginBottom: "2rem",

    "@media (max-width: 500px)": {
      width: "250px",
      height: "180px",
      justifyContent: "flex-start",
      flexDirection: "column",
      // padding: '2rem 0 1rem 2rem',
      gap: 0,
      marginBottom: "5rem",
    },
  },
  winner: {
    width: "100%",
    height: "150px",
    background: "#0f0f0f",
    position: "relative",
    top: "-50%",
    border: "1px solid #E1A200",
    marginTop: "-7%",
    margin: "auto",
    borderRadius: "10px",
    paddingTop: "3.5rem",
    "& .images": {
      position: "absolute",
      top: "-15%",
      display: "flex",
      justifyContent: "center",
      width: "100%",
    },

    "@media (max-width: 500px)": {
      marginTop: 0,
      position: "absolute",
      top: "60%",
      right: "0%",
    },
  },
  resultHeader: {
    fontSize: "20px",
    color: "#E1A200",
    fontWeight: 700,
    textAlign: "center",
    padding: "1rem",
    position: "absolute",
    top: "-30%",
    left: "0",
    right: "0",

    "@media (max-width: 500px)": {
      top: "-90%",
      left: 0,
      textAlign: "left",
      fontSize: "25px",
    },
  },

  name: {
    display: "flex",
    justifyContent: "space-between",
    padding: "0.5rem 1rem",
    fontSize: "15px",
    color: "white",
    fontWeight: 600,
    "& div": {
      color: "#E1A200",
      display: "flex",
      gap: "10px",
    },
  },

  bottom: {
    marginTop: "2rem",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",

    "& .leaderBoard": {
      fontSize: "20px",
      color: "white",
      fontWeight: 600,
      paddingBottom: "2rem",
    },
  },
  leader: {
    position: "relative",
    display: "flex",
    flexDirection: "column",
    gap: "10px",
    // outline: '1px solid #E1A200',
    width: "500px",
    "@media (max-width: 500px)": {
      gap: "4px",
      width: "350px",
    },
  },
  label: {
    // minWidth: '380px',
    display: "flex",
    gap: "10px",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "1rem",
    borderRadius: "50px",
    background: "linear-gradient(92.86deg, #E1A200 0%, #FF5C00 100%)",
    "& span": {
      color: "white",
      fontSize: "15px",
    },

    "& .name": {
      color: "#000",
      fontWeight: 700,
      flex: "1",
      paddingLeft: "1rem",
    },

    "@media (max-width: 500px)": {
      "& span": {
        color: "white",
        fontSize: "11px",
      },

      "& .name": {
        color: "#000",
        fontWeight: 700,
        flex: "1",
        paddingLeft: "1rem",
      },
    },
  },

  label2: {
    "&:hover": {
      borderColor: "#E1A200",
    },
    border: "1px solid #000",
    // minWidth: '380px',
    display: "flex",
    gap: "10px",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "1rem",
    borderRadius: "50px",
    "& span": {
      color: "white",
      fontSize: "15px",
    },

    "& .name": {
      color: "#E1A200",
      fontWeight: 700,
      flex: "1",
      paddingLeft: "1rem",
    },
    marginTop: "1rem",

    "@media (max-width: 500px)": {
      "& span": {
        color: "white",
        fontSize: "11px",
      },

      "& .name": {
        color: "#E1A200",
        fontWeight: 700,
        flex: "1",
        paddingLeft: "1rem",
      },
    },
  },
}));
