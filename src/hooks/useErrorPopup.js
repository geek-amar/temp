import { useRef, useState } from "react";

const useErrorPopup = () => {
  const popRef = useRef(null);
  const [message, setMessage] = useState("");
  const [popupOpen, setPopupOpen] = useState(false);

  const openPopup = (_errMsg, type = "error") => {
    if (!_errMsg) return;

    setMessage({
      message: _errMsg,
      type: type,
    });

    popRef.current.classList.toggle("open");
    setPopupOpen(!popupOpen);
  };

  const closePopup = () => {
    popRef.current.classList.toggle("open");
    setPopupOpen(!popupOpen);
  };

  return {
    openPopup,
    closePopup,
    popRef,
    message,
    popupOpen,
  };
};

export default useErrorPopup;
