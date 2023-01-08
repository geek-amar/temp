import Avatar2 from "assets/images/AvtarIcon2.svg";
import SinglePlayerMobile from "assets/images/mobileTwoplayer.svg";
import SinglePlayerMobileLogo from "assets/images/MultiplayerTopBar.svg";
import singlePageBackground from "assets/images/singlePageBackground.svg";
import singlePageBackgroundBlue from "assets/images/singlePageBackgroundBlue.svg";
import Ball from "common/ball/Ball";
import React, { useState } from "react";
import { connect } from "react-redux";
import { useStyle } from "./Account.style";
import AccountDetails from "./AccountDetails/AccountDetails";
import AccountResult from "./ResultDetails/AccountResult";
import Wallet from "./Wallet/Wallet";
const Account = (props) => {
  const classes = useStyle();
  const { user } = props.Auth;
  const [tab, setTab] = useState(0);
  const [balance, setBalance] = React.useState(0);

  React.useEffect(() => {
    async function fetchUserBalance() {
      let res = await fetch("https://backend.playikc.in/user/wallet", {
        headers: {
          Authorization: `Bearer ${JSON.parse(localStorage.getItem("token"))}`,
        },
      });
      let data = await res.json();
      setBalance(data.payload.balance);
    }

    fetchUserBalance();
  }, []);

  return (
    <div className={classes.container}>
      <Ball top={"28%"} width={100} left="-4%" />
      <Ball bottom={"0%"} margin="auto" top={"50%"} width={30} />
      <Ball right={"3%"} top="0" bottom="0" margin="auto" width={50} />
      <div className={classes.imageContainer}>
        <img className="image1" src={singlePageBackground} alt="" />
        <img className="image2" src={singlePageBackgroundBlue} alt="" />
      </div>
      <div className={classes.mobileImageContainer}>
        <img className="image1" src={SinglePlayerMobile} alt="" />
        <img className="image2" src={SinglePlayerMobileLogo} alt="" />
      </div>
      <div className={classes.section}>
        <div className={classes.account}>
          <span>My Account</span>
        </div>
        <div className={classes.header}>
          <img src={Avatar2} alt="" />
          <span>{user.username}</span>
        </div>
        <div className={classes.accountContainer}>
          <div className={classes.left}>
            <div className="leftHeader">
              <span>Player Account</span>
            </div>
            <div className={"leftOption"}>
              <span
                onClick={() => setTab(0)}
                className={tab === 0 ? "color" : ""}
              >
                Account Dashboard
              </span>
              <span
                onClick={() => setTab(1)}
                className={tab === 1 ? "color" : ""}
              >
                Result Report
              </span>
              <span
                onClick={() => setTab(2)}
                className={tab === 2 ? "color" : ""}
              >
                Wallet
              </span>
            </div>
          </div>
          <div className={classes.right}>
            <div className="rightHeader">
              <span>
                {tab === 0
                  ? "Player Account Dashboard"
                  : tab === 1
                  ? "Results Report"
                  : "Wallet"}
              </span>
            </div>
            <div className="rightContainer">
              {tab === 0 ? (
                <AccountDetails balance={balance} />
              ) : tab === 1 ? (
                <AccountResult />
              ) : (
                <Wallet />
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return state;
};
export default connect(mapStateToProps)(Account);
