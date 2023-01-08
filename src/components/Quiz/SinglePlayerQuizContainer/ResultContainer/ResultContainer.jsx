import { Button } from "@material-ui/core";
import BlueShadow from "assets/images/blurShadow.svg";
import SinglePlayerMobileLogo from "assets/images/mobileSingleLogo.svg";
import SinglePlayerMobile from "assets/images/mobileSinglePlayer.svg";
import Badge from "assets/images/resultBadge.svg";
import SinglePlayer from "assets/images/resultIcon.svg";
import Ball from "common/ball/Ball";
import { Link, useHistory, useParams } from "react-router-dom";
import { useStyle } from "./ResultContainer.style";
import ShareDialog from "common/ShareDialog/ShareDialog";
import { useState } from "react";

const ResultContainer = ({ data, twoPlayer, score, tryAgain, endData }) => {
  const history = useHistory();
  const { quizId } = useParams();
  const classes = useStyle();
  const [shareDialogOpen, setShareDialogOpen] = useState(false);
  return (
    <div className={classes.container}>
      <Ball width={50} right={"3%"} top={"10%"} bottom={0} margin="auto" />

      <div className={classes.ResultContainer}>
        <div className="mobileLogos">
          <img alt="" className="imageMobile1" src={SinglePlayerMobile} />
          <img alt="" className="imageMobile" src={SinglePlayerMobileLogo} />
        </div>
        <div className={classes.wrapper}>
          <div className={classes.imageContainer}>
            <img alt="" className="image" src={SinglePlayer} />
          </div>
          <div className={classes.header}>
            <Ball width={30} top="0" margin="auto" />
            {<span className="title_result">Result</span>}
            <div className={classes.scoreContainer}>
              <div className="score">
                <div className={classes.resultImages}>
                  <img src={Badge} alt="" width={60} />
                  <img src={Badge} alt="" width={80} />
                  <img src={Badge} alt="" width={60} />
                </div>
                <div className="shadow">
                  <img src={BlueShadow} className="shadow" alt="shadow" />
                </div>
                <div className="innerScore">
                  <span className="titleScore">
                    {twoPlayer ? data.titleScore : endData.score}
                  </span>
                  <span>Total Score</span>
                  {twoPlayer && (
                    <span className={data.class}>{data.title}</span>
                  )}
                </div>
              </div>
              {!twoPlayer && (
                <div className="buttonContainer">
                  <div className={classes.bottomScore}>
                    <span className="titleScore">545</span>
                    <span>Best score</span>
                  </div>
                  <div className={classes.bottomScore}>
                    <span className="titleScore">{endData?.topScore}</span>
                    <span>Top score</span>
                  </div>
                </div>
              )}
              {twoPlayer && (
                <>
                  <div className={classes.player2Info}>
                    <span>{data.opponentText}</span>
                    <span>{data.opponentScore}</span>
                  </div>
                  <div className={classes.rematch}>
                    <Button>
                      <Link to={"/"}>Exit</Link>
                    </Button>
                    <Button>
                      <Link to={"/play-with-friend"}>Rematch</Link>
                    </Button>
                  </div>
                </>
              )}

              {!twoPlayer && (
                <div className={classes.share}>
                  <Button
                    onClick={() => {
                      setShareDialogOpen(true);
                    }}
                  >
                    Share
                  </Button>
                  <Button onClick={() => tryAgain()}>Retry</Button>
                  <Button onClick={() => history.push("/quiz/category")}>
                    Menu
                  </Button>
                  <ShareDialog
                    data={{
                      url: `${window.location.origin}/#/quiz/play/${quizId}`,
                    }}
                    onClose={() => setShareDialogOpen(false)}
                    open={shareDialogOpen}
                  />
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ResultContainer;
