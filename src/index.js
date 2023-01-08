import { createTheme, ThemeProvider } from "@mui/material/styles";
import App from "App";
import "index.css";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { HashRouter } from "react-router-dom";
import "react-toastify/dist/ReactToastify.min.css";
import store from "store/store";

const darkTheme = createTheme({
  palette: {
    mode: "dark",
  },
});

ReactDOM.render(
  <Provider store={store}>
    <HashRouter>
      <ThemeProvider theme={darkTheme}>
        <App />
      </ThemeProvider>
    </HashRouter>
  </Provider>,
  document.getElementById("root")
);
