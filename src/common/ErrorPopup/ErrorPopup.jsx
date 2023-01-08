import Model from "components/Model/Model";
import "./ErrorPopup.css";

const ErrorPopup = ({ popupdata, closePopup, popRef, onclose }) => (
  <div ref={popRef} className="popup">
    <Model
      description={popupdata.message || "Something went wrong"}
      header={popupdata.type || "Error"}
      leftButton="CLOSE"
      // rightButton="REFRESH"
      funOnLeftButton={closePopup}
      // funOnRightButton={() => window.location.reload()}
    />
  </div>
);

export default ErrorPopup;
