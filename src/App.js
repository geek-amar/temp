import "base.css";
import Footer from "components/Footer/Footer";
import jwt_decode from "jwt-decode";
import { useEffect } from "react";
import { connect } from "react-redux";
import { useHistory } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import AppRoutes from "routes/AppRoutes";
import { LogOut } from "store/actions/authAction";
import Navbar from "./components/Navbar/Navbar";

function App({ dispatch }) {
  const history = useHistory();

  useEffect(() => {
    async function checkIfTokenExpired() {
      const Token = JSON.parse(localStorage?.getItem("token"));
      if (Token) {
        const decodedJwt = await jwt_decode(Token);
        if (decodedJwt.exp * 1000 < Date.now()) {
          toast.info("Your session has expired. Please login again.");
          localStorage.clear();
          window.location.reload();
          dispatch(LogOut());
          history.push("/");
        }
      }
    }

    checkIfTokenExpired();
  }, []);

  return (
    <>
      <ToastContainer />
      <div style={{ background: "#000000" }}>
        <Navbar />
        <AppRoutes />
        <Footer />
      </div>
    </>
  );
}
const mapDispatchToProps = (dispatch) => {
  return dispatch;
};

export default connect(mapDispatchToProps)(App);
