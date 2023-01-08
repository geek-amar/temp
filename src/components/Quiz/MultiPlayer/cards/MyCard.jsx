import { Share } from "@material-ui/icons";
import CopyIcon from "@mui/icons-material/CopyAllOutlined";
import { Button } from "@mui/material";
import Ikc from "assets/images/ikc.svg";
import indianHistory from "assets/images/multiPlayerImage.svg";
import WhiteIkc from "assets/images/whiteIkc.svg";
import ShareDialog from "common/ShareDialog/ShareDialog";
import Model from "components/Model/Model";
import { useState } from "react";
import { useHistory } from "react-router-dom";
import { timeLeft } from "utils";
import { useStyle } from "./MyCard.style";
import { images } from "components/Quiz/FreeQuiz/Category";
import { toast } from "react-toastify";

const MyCard = (props) => {
  const { data: item, categories } = props;
  const history = useHistory();

  const classes = useStyle();
  const [open, setOpen] = useState(0);
  const [shareDialogOpen, setShareDialogOpen] = useState(false);
  const goToLeaderboard = () => {
    history.push(`/multiplayer/leaderboard/${item._id}`);
  };
  const timLeft = timeLeft(item.endDate);
  return (
    <>
      <div className={classes.card}>
        <div className={classes.left}>
          <img
            src={categories?.[item.categoryId]?.icon ?? indianHistory}
            width={80}
            style={{maxHeight: "80%"}}
            alt=""
          />
          <span>{item.title || "Header"}</span>
        </div>
        <div className={classes.right}>
          <div className={classes.header}>
            <span className="first">
              Win <img src={Ikc} width={12} height={12} alt={""} />
              40
            </span>
            <span>
              Fees <img src={WhiteIkc} width={10} height={12} alt={""} />{" "}
              {item.poolAmount}
            </span>
          </div>
          {timeLeft(item.endDate).hours >= 0 ? (
            <Button onClick={() => setOpen(!open)}>Play now</Button>
          ) : (
            <Button onClick={goToLeaderboard}>Leader board</Button>
          )}
          <div className={classes.token}>
            <div className="content">
              <span>{item.code}</span>
              <CopyIcon
                color="primary"
                size="large"
                onClick={() => {
                  navigator.clipboard.writeText(item.code);
                  toast.success("Copied to Clipboard");
                }}
              />
              <Share
                color="primary"
                size="large"
                onClick={() => {
                  setShareDialogOpen(true);
                }}
              />
            </div>
          </div>

          <span className="last">
            {timLeft.days > 0
              ? `Time left: ${timLeft.days} days`
              : (timLeft.hours ?? -1) >= 0 && `Time left: ${timLeft.hours} hrs`}
          </span>
        </div>

        {open ? (
          <Model
            header={"1st Attempt"}
            description={"Do you wish to play ?"}
            funOnLeftButton={() => setOpen(!open)}
            funOnRightButton={() =>
              history.push(`/multiplayer/private/quiz/${item.code}/${item._id}`)
            }
            leftButton={"No"}
            rightButton={"Yes"}
            headerDiscription={`Max ${item?.numberOfTimes} Attempts`}
          />
        ) : (
          ""
        )}
      </div>
      <ShareDialog
        copyLink
        data={{
          url: `${window.location.origin}/#/multiplayer/join/${item.code}`,
        }}
        onClose={() => setShareDialogOpen(false)}
        open={shareDialogOpen}
      />
    </>
  );
};

export default MyCard;
