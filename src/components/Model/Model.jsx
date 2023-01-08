import CopyIcon from "@mui/icons-material/CopyAllOutlined";
import { Button, LinearProgress } from "@mui/material";
import { useEffect } from "react";
import { useStyle } from "./Model.style";
const Model = ({
  headerDiscription,
  header,
  description,
  input,
  setInputValue,
  funOnLeftButton,
  funOnRightButton,
  leftButton,
  rightButton,
  inputValue,
  isContent,
  busy = false,
}) => {
  const classes = useStyle();
  useEffect(() => {
    const event = document.getElementById("modal");
    event.addEventListener("click", () => {
      funOnLeftButton();
    });
  }, []);
  return (
    <>
      <div className={classes.backdrop} id="modal"></div>
      <div className={classes.modelContent}>
        {header && (
          <span className="Mtitle">
            {header}
            <div className="hd">{headerDiscription}</div>
          </span>
        )}

        {busy ? <LinearProgress color="warning" /> : null}

        <span style={!header ? { flex: 0.3, paddingTop: 10 } : {}}>
          {description || <description />}
        </span>
        {isContent && (
          <div className={classes.token}>
            <div className="content">
              {input ? (
                <input
                  id=""
                  label=""
                  value={inputValue}
                  onChange={(e) => setInputValue(e.target.value)}
                />
              ) : (
                <>
                  <span>{inputValue}</span>
                  <CopyIcon
                    color="primary"
                    size="large"
                    onClick={() => {
                      navigator.clipboard.writeText(inputValue);
                    }}
                  />
                </>
              )}
            </div>
          </div>
        )}
        <div className={classes.buttonContainer}>
          {leftButton && (
            <Button onClick={() => funOnLeftButton()}>{leftButton}</Button>
          )}
          {rightButton && (
            <Button onClick={() => funOnRightButton()}>{rightButton}</Button>
          )}
        </div>
      </div>
    </>
  );
};

export default Model;
