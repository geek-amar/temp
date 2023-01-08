import { Share } from "@material-ui/icons";
import CopyIcon from "@mui/icons-material/CopyAllOutlined";
import { Button } from "@mui/material";
import api from "api";
import singlePageBackground from "assets/images/blackWave.svg";
import singlePageBackgroundBlue from "assets/images/blueWave.svg";
import FrontImage from "assets/images/frontImage.svg";
import SinglePlayerMobile from "assets/images/mobileTwoplayer.svg";
import SinglePlayerMobileLogo from "assets/images/mobileTwoplayerIcon.svg";
import Ball from "common/ball/Ball";
import ShareDialog from "common/ShareDialog/ShareDialog";
import { useEffect, useState } from "react";
import { useHistory, withRouter } from "react-router";
import { toast } from "react-toastify";
import { images } from "../../FreeQuiz/Category";
import { useStyle } from "./GamePage.style";
import GAME from "./QuizContainer/GAME";
import { socket } from "./services";

const GamePage = ({ location }) => {
  const classes = useStyle();
  const user = JSON.parse(localStorage.getItem("user"));
  const history = useHistory();
  const [error, setError] = useState(null);
  const [start, setStart] = useState(false);
  const [friend, setFriend] = useState(null);
  const [shareDialogOpen, setShareDialogOpen] = useState(false);
  const [isCreator, setIsCreator] = useState(false);
  const roomDetails = location.state?.roomDetails;
  const selectedCategory = location.state?.selectedCategory;

  useEffect(() => {
    async function fetchIsCreator() {
      const response = await api.ikcplay.twoPlayerQuiz.getIsCreator(
        roomDetails.roomId
      );

      setIsCreator(response?.payload?.proceed);
    }

    if (roomDetails) {
      fetchIsCreator();
    } else {
      history.push("/play-with-friend");
    }

    socket.emit(
      "join",
      {
        socketId: socket?.id,
        userId: user._id,
        roomId: roomDetails?.roomId,
      },
      console.log
    );
    socket.on("connect", console.log);

    socket.on("playerInfo", (data) => {
      setFriend(data?.player2);
    });

    socket.on("start", (res) => {
      setStart(true);
    });
    // eslint-disable-next-line
  }, []);

  const switchContent = () => {
    if (friend) {
      socket.emit("startQuiz", { roomId: roomDetails.roomId });
      setStart(true);
    } else {
      setError("Friend hasn't joined yet");
    }
  };

  useEffect(() => {
    if (!error) return;
    const timer = setTimeout(() => {
      setError(null);
    }, 3000);
    return () => clearTimeout(timer);
  }, [error]);

  return !start ? (
    <div className={classes.container}>
      <Ball width={100} left={"-3.5%"} top="28%" />

      <div className={classes.imageContainer}>
        <img className="image1" src={singlePageBackground} alt="" />
        <img className="image2" src={singlePageBackgroundBlue} alt="" />
      </div>
      <div className={classes.mobileImageContainer}>
        <img className="image1" src={SinglePlayerMobile} alt="" />
        <img className="image2" src={SinglePlayerMobileLogo} alt="" />
      </div>
      <div className={classes.wrapper}>
        <div className={classes.left}>
          <div className={classes.header}>
            <span className="title">Two Player</span>
            <span>
              Invite a friend and compete in an extensive competitive quiz
            </span>
          </div>
        </div>
        <div className={classes.right}>
          <Ball width={25} left={"25%"} top="10%" />
          <img className="img" src={FrontImage} alt="" />
          <Ball width={25} left={"0%"} bottom="0" />
          <Ball width={50} right={"-10%"} bottom="0" />
        </div>
      </div>

      <div className={classes.game}>
        {isCreator && !friend && (
          <>
            <span
              style={{ fontSize: "18px", color: "#fff", marginTop: "10rem" }}
            >
              Invite Your Friends
            </span>
            <div style={{ display: "flex", flexWrap: "wrap" }}>
              <div
                style={{
                  position: "relative",
                  display: "flex",
                  width: "auto",
                  // maxWidth: "300px",
                  // minWidth: "100%",
                }}
              >
                <input
                  value={`${window.location.origin}/#/join/${roomDetails?.roomCode}`}
                  id="invite"
                  type="text"
                  readonly=""
                  style={{
                    flex: "1 1 auto",
                    height: "32px",
                    border: "1px solid #1b1b1b",
                    padding: "0 10px",
                    borderRadius: "2px 0 0 2px",
                    lineHeight: "32px",
                    textAlign: "center",
                    outline: "none",
                    background: "#0f0f0f",
                    color: "#fff",
                    userSelect: "all",
                  }}
                />
              </div>
              <button
                onClick={() => {
                  navigator.clipboard.writeText(
                    `${window.location.origin}/#/join/${roomDetails?.roomCode}`
                  );
                  toast.success("Copied to clipboard");
                }}
                style={{
                  padding: "6px 12px",
                  marginBottom: 0,
                  fontSize: "14px",
                  fontWeight: 400,
                  lineHeight: 1.42857143,
                  textAlign: "center",
                  whiteSpace: "nowrap",
                  verticalAlign: "middle",
                  border: "1px solid transparent",
                  flex: "0 0 auto",
                  height: "32px",
                  borderLeft: 0,
                  borderRadius: "0 2px 2px 0",
                  background:
                    "linear-gradient(92.86deg, #E1A200 0%, #FF5C00 100%)",
                  color: "#000",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  gap: "4px",
                  cursor: "pointer",
                  zIndex: 1,
                }}
                id="inviteCopyButton"
              >
                <CopyIcon />
                Copy Link
              </button>
            </div>
            <div
              style={{
                position: "relative",
                display: "flex",
                // width: "auto",
                maxWidth: "300px",
                minWidth: "100%",
              }}
            >
              <button
                onClick={() => setShareDialogOpen(true)}
                style={{
                  padding: "6px 12px",
                  marginBottom: 0,
                  fontSize: "14px",
                  fontWeight: 400,
                  lineHeight: 1.42857143,
                  textAlign: "center",
                  whiteSpace: "nowrap",
                  verticalAlign: "middle",
                  border: "1px solid transparent",

                  height: "32px",
                  borderLeft: 0,
                  borderRadius: "2px",
                  background:
                    "linear-gradient(92.86deg, #E1A200 0%, #FF5C00 100%)",
                  color: "#000",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  gap: "4px",
                  cursor: "pointer",
                  zIndex: 1,
                  // width: "fiit-comtent",
                }}
                id="inviteCopyButton"
              >
                <Share />
                Share
              </button>
            </div>
          </>
        )}
        <span style={{ marginTop: "2rem" }} className="roomCode">
          Room Code
        </span>
        <Ball width={20} left={"3%"} top="50%" />
        <div className="code">
          <span>{roomDetails?.roomCode}</span>
          <CopyIcon
            onClick={() => navigator.clipboard.writeText(roomDetails.roomCode)}
          />
        </div>
        <div className={classes.card}>
          <img src={images[selectedCategory?.name]} alt="" />
          <span>{selectedCategory?.name}</span>
        </div>
        <span className="status">
          {isCreator ? (
            !friend ? (
              "Waiting for player 2..."
            ) : (
              <span className={classes.friend}>Player 2 joined</span>
            )
          ) : (
            "Waiting for player 1 to start the quiz..."
          )}
        </span>
        {friend && isCreator && (
          <div className={classes.startButton}>
            <Button onClick={() => switchContent()}>Start</Button>
          </div>
        )}
      </div>
      <ShareDialog
        data={{
          url: `${window.location.origin}/#/join/${roomDetails?.roomCode}`,
        }}
        onClose={() => setShareDialogOpen(false)}
        open={shareDialogOpen}
      />
    </div>
  ) : (
    <GAME
      socket={socket}
      isCreator={isCreator}
      userId={user?._id}
      roomId={roomDetails.roomId}
    />
  );
};
/**
 * !start ? (
    <React.Fragment>
      <GameInfo
        friend={isCreator ? (friend ? friend.split(' ')[0] : '') : creator}
        user={user}
        roomDetails={roomDetails}
        isCreator={isCreator}
        roomId={roomDetails.roomId}
        switchContent={switchContent}
        category={selectedCategory}
      />
      {!!error && <ErrorBox>{error}</ErrorBox>}
    </React.Fragment>
  ) : (
    <Game
      socket={socket}
      isCreator={isCreator}
      userId={user?.user?._id}
      roomId={roomDetails.roomId}
    />
  );
 */
export default withRouter(GamePage);
