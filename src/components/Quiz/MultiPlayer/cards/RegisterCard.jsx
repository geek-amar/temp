import React from "react";
import { useStyle } from "./RegisterCard.style";
import { Button } from "@mui/material";
import indianHistory from "assets/images/multiPlayerImage.svg";
import Ikc from "assets/images/ikc.svg";
import WhiteIkc from "assets/images/whiteIkc.svg";
import { useHistory } from "react-router-dom";
import { formatDate } from "utils";
import { images } from "components/Quiz/FreeQuiz/Category";
const RegisterCard = (props) => {
  const { data: item, categories } = props;
  const classes = useStyle();
  const history = useHistory();

  const handleDetailsClick = () => {
    history.push("/multiplayer/details/" + item._id);
  };

  return (
    <div className={classes.card}>
      <div className={classes.left}>
        <img
          src={categories?.[item.categoryId]?.icon ?? indianHistory}
          width={80}
          alt=""
        />
        <span>{item.title || "Headers"}</span>
      </div>
      <div className={classes.right}>
        <div className={classes.header}>
          <span className="first">
            Win <img src={Ikc} alt="" width={12} height={12} />
            40
          </span>
          <span>
            Fees <img src={WhiteIkc} alt="" width={10} height={10} /> 10
          </span>
        </div>

        <Button onClick={handleDetailsClick}>Details</Button>
        <span className="last">
          Deadline : {formatDate(item.lastDateToRegister)}
        </span>
      </div>
    </div>
  );
};

export default RegisterCard;
