import React, { useEffect } from "react";
import { useStyle } from "./Model.style";
const NewModel = (props) => {
  const classes = useStyle();
  useEffect(() => {
    const event = document.getElementById("modal");
    event.addEventListener("click", () => {
      props.setClose();
    });
  }, []);
  return (
    <>
      <div className={classes.backdrop} id="modal"></div>
      <div className={classes.modelContent}>{props.children}</div>
    </>
  );
};

export default NewModel;
