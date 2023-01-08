import { Button } from "@mui/material";
import Ikc from "assets/images/ikc.svg";
import indianHistory from "assets/images/multiPlayerImage.svg";
import WhiteIkc from "assets/images/whiteIkc.svg";
import Model from "components/Model/Model";
import { useState } from "react";
import { useHistory } from "react-router-dom";
import { timeLeft } from "utils";
import { useStyle } from "./RegisterCard.style";
import { images } from "components/Quiz/FreeQuiz/Category";

const LiveCard = (props) => {
  const { data: item, categories } = props;
  const history = useHistory();

  const classes = useStyle();
  const [open, setOpen] = useState(0);

  return (
    <div className={classes.card}>
      <div className={classes.left}>
        <img
          src={categories?.[item.categoryId]?.icon ?? indianHistory}
          width={80}
          style={{ marginHeight: "100%" }}
          alt=""
        />
        <span>{item.title || "Header"}</span>
      </div>
      <div className={classes.right}>
        <div className={classes.header}>
          <span className="first">
            Win <img src={Ikc} width={12} height={12} alt={""} />
            &nbsp;{item?.maxPrize}
          </span>
          <span>
            Fees <img src={WhiteIkc} width={10} height={12} alt={""} /> 10
          </span>
        </div>

        <Button onClick={() => setOpen(!open)}>Play now</Button>
        <span className="last">
          Time left: {timeLeft(item.lastDateToRegister).hours ?? 0} hrs
        </span>
      </div>

      {open ? (
        <Model
          header={"1st Attempt"}
          description={"Do you wish to play ?"}
          funOnLeftButton={() => setOpen(!open)}
          funOnRightButton={() => history.push(`multiplayer/quiz/${item._id}`)}
          leftButton={"No"}
          rightButton={"Yes"}
          headerDiscription={`Max ${item?.numberOfTimes} Attempts`}
        />
      ) : (
        ""
      )}
    </div>
  );
};

export default LiveCard;
