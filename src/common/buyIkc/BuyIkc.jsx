import { Button } from "@material-ui/core";
import { LinearProgress } from "@mui/material";
import api from "api";
import Bulb from "assets/images/buyBulb.svg";
import IKC from "assets/images/ikc.svg";
import ikc from "assets/images/whiteIkc.svg";
import Model from "components/Model/Model";
import CustomModel from "components/Model/NewModel";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { updateUserInfo } from "store/actions/authAction";
import { useStyle } from "./buyikc.style";

const BuyIkc = ({ close, onError }) => {
  const classes = useStyle();
  const dispatch = useDispatch();
  const balance = useSelector((state) => state.Auth.user?.balance || 0);
  const [loading, setLoading] = React.useState(false);
  const [hints, setHints] = React.useState([]);
  const [modelText, setModelText] = React.useState("");
  const [purchaseMessage, setPurchaseMessage] = React.useState("");
  const [selectedHint, setSelectedHint] = React.useState(null);
  // const [buyLoading, setBuyLoading] = React.useState(false);

  const getBalance = async () => {
    setLoading(true);

    try {
      dispatch(updateUserInfo());
      const dataHints = await api.ikcplay.fetch("/offer/hintBundles");
      setHints(dataHints.payload);
    } catch (error) {
      onError(error.message || "Something went wrong");
      close();
    }

    setLoading(false);
  };

  React.useEffect(() => {
    getBalance();
  }, []);

  const handleBuyHint = async (hintBundleId) => {
    setLoading(true);
    try {
      let data = await api.ikcplay.fetch(
        `/singlePlayerQuiz/buyHint?hintBundleId=${hintBundleId}`
      );
      if (data.payload.success) {
        setPurchaseMessage(data.message);
      } else {
        setPurchaseMessage("You don't have enough balance");
      }
    } catch (_err) {}
  };

  const handleHintClick = (hint) => {
    setSelectedHint(hint);
    setModelText(
      "Are you sure you want to buy " +
        hint.numHints +
        " hints worth K " +
        hint.cost
    );
  };
  return (
    <>
      <CustomModel
        setClose={() => {
          close();
        }}
      >
        <div className={classes.modelHeader}>
          <span className="buy">Buy Hints</span>
          <div className="ikc">
            <span>
              <img src={IKC} alt="" width={20} height={20} />
              {balance || "loading..."}
            </span>
            <span className="total">Total balance</span>
          </div>
        </div>
        {!loading ? (
          hints.map((hint, index) => (
            <div key={hint._id} className={classes.list}>
              <div className="bulb">
                <img src={Bulb} alt="" width={25} height={25} />
                <span>{hint.numHints} hints</span>
              </div>
              <Button onClick={() => handleHintClick(hint)}>
                <img src={ikc} alt="" width={15} height={15} />
                {hint.cost}
              </Button>
            </div>
          ))
        ) : (
          <>
            <LinearProgress color="warning" />
          </>
        )}
        {/* <div className={classes.list}>
        <div className="bulb">
          <img src={Bulb} alt="" width={25} height={25} />
          <span>2 hints</span>
        </div>
        <Button>
          <img src={ikc} alt="" width={15} height={15} />4
        </Button>
      </div>
      <div className={classes.list}>
        <div className="bulb">
          <img src={Bulb} alt="" width={25} height={25} />
          <span>2 hints</span>
        </div>
        <Button>
          <img src={ikc} alt="" width={15} height={15} />4
        </Button>
      </div>
      <div className={classes.list}>
        <div className="bulb">
          <img src={Bulb} alt="" width={25} height={25} />
          <span>2 hints</span>
        </div>
        <Button>
          <img src={ikc} alt="" width={15} height={15} />4
        </Button>
      </div> */}
      </CustomModel>
      {modelText.length && (
        <Model
          description={modelText}
          header={"Confirm"}
          leftButton={"NO"}
          rightButton="YES"
          funOnRightButton={() => {
            handleBuyHint(selectedHint._id);
            setModelText("");
            setSelectedHint(null);
          }}
          funOnLeftButton={() => {
            setModelText("");
            setSelectedHint(null);
          }}
        />
      )}
      {purchaseMessage.length && (
        <Model
          description={purchaseMessage}
          header={"Message"}
          leftButton={"CLOSE"}
          rightButton="OK"
          funOnRightButton={() => {
            getBalance();
            setPurchaseMessage("");
          }}
          funOnLeftButton={() => {
            getBalance();
            setPurchaseMessage("");
          }}
        />
      )}
    </>
  );
};

export default BuyIkc;
