import React from "react";
import { useStyle } from "./Result.style";
import Badge from "assets/images/resultBadge.svg";
import SinglePlayer from "assets/images/resultIcon.svg";
import SinglePlayerMobile from "assets/images/mobileSinglePlayer.svg";
import SinglePlayerMobileLogo from "assets/images/mobileSingleLogo.svg";
import BlueShadow from "assets/images/blurShadow.svg";
import { Button } from "@material-ui/core";
import { Link } from "react-router-dom";
import UpIcon from "assets/images/upIcon.svg";
import Avatar from "assets/images/AvtarIcon.svg";
import Avatar2 from "assets/images/AvtarIcon2.svg";
import Ball from "common/ball/Ball";

const ResultContainer = ({ score }) => {
  const classes = useStyle();
  return (
    <div className={classes.container}>
      <div className={classes.ResultContainer}>
        <div className="mobileLogos">
          <img alt="" className="imageMobile1" src={SinglePlayerMobile} />
          <img alt="" className="imageMobile" src={SinglePlayerMobileLogo} />
        </div>
        <div className={classes.wrapper}>
          <div className={classes.imageContainer}>
            <img
              alt=""
              className="image"
              width={300}
              height={300}
              src={SinglePlayer}
            />
          </div>
          <div className={classes.header}>
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
                  <span className="titleScore">{score}123</span>
                  <span>Total Score</span>
                </div>
              </div>
              <div className="buttonContainer">
                <div className={classes.bottomScore}>
                  <span className="titleScore">545</span>
                  <span>Best score</span>
                </div>
                <div className={classes.bottomScore}>
                  <span className="titleScore">14056</span>
                  <span>Top score</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className={classes.bottom}>
        <span className="leaderBoard">Leaderboard</span>
        <div className={classes.leader}>
          <div className={classes.label}>
            <img width={30} src={UpIcon} alt="" />
            <span>1</span>
            <img width={30} src={Avatar} alt="" />
            <span className="name">Ankur</span>
            <span className="point">2019 pts.</span>
            <span className="ikc">+36 IKC</span>
          </div>

          <div className={classes.label2}>
            <img width={30} src={UpIcon} alt="" />
            <span>2</span>
            <img width={30} src={Avatar2} alt="" />
            <span className="name">Imran</span>
            <span className="point">2019 pts.</span>
            <span className="ikc">+35 IKC</span>
          </div>
          <div className={classes.label2}>
            <img width={30} src={UpIcon} alt="" />
            <span>2</span>
            <img width={30} src={Avatar2} alt="" />
            <span className="name">Imran</span>
            <span className="point">2019 pts.</span>
            <span className="ikc">+35 IKC</span>
          </div>
          <div className={classes.label2}>
            <img width={30} src={UpIcon} alt="" />
            <span>2</span>
            <img width={30} src={Avatar2} alt="" />
            <span className="name">Imran</span>
            <span className="point">2019 pts.</span>
            <span className="ikc">+35 IKC</span>
          </div>

          <div className={classes.label2}>
            <img width={30} src={UpIcon} alt="" />
            <span>2</span>
            <img width={30} src={Avatar2} alt="" />
            <span className="name">Imran</span>
            <span className="point">2019 pts.</span>
            <span className="ikc">+35 IKC</span>
          </div>

          <div className={classes.label2}>
            <img width={30} src={UpIcon} alt="" />
            <span>2</span>
            <img width={30} src={Avatar2} alt="" />
            <span className="name">Imran</span>
            <span className="point">2019 pts.</span>
            <span className="ikc">+35 IKC</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ResultContainer;
