import { useEffect, useState } from "react";
import { connect } from "react-redux";
import { useHistory } from "react-router";
import { fetchAllCategories } from "../../../../store/actions/categoryAction";
import { useStyle } from "./Category.style";
// import IconButton from '@mui/material/IconButton';
import singlePageBackground from "assets/images/blackWave.svg";
import singlePageBackgroundBlue from "assets/images/blueWave.svg";

import api from "api";
import { Spinner } from "assets";
import FrontImage from "assets/images/frontImage.svg";
import SinglePlayerMobile from "assets/images/mobileTwoplayer.svg";
import SinglePlayerMobileLogo from "assets/images/mobileTwoplayerIcon.svg";
import Ball from "common/ball/Ball";
import Model from "components/Model/Model";
import { images } from "../../FreeQuiz/Category";

const Categories = (props) => {
  const classes = useStyle();
  const history = useHistory();
  const { dispatch, Categories: categories, IsLoading } = props;
  const [busy, setBusy] = useState(false);

  const [roomDetails, setRoomDetails] = useState({
    roomCode: null,
    roomId: null,
  });

  const [selectedCategory, setSelectedCategory] = useState(null);
  const [open, setOpen] = useState(false);

  // Handle Category Card click
  const handleClickOpen = async (category) => {
    setSelectedCategory(category);
    setRoomDetails({ roomCode: null, roomId: null });
    setBusy(true);

    try {
      const response = await api.ikcplay.twoPlayerQuiz.create(category._id);
      // setRoomDetails({
      //   roomCode: response?.payload?.code,
      //   roomId: response?.payload?.roomId,
      // });
      history.push({
        pathname: "/play-with-friend/gamepage",
        state: {
          roomDetails: {
            roomCode: response?.payload?.code,
            roomId: response?.payload?.roomId,
          },
          selectedCategory: category,
        },
      });
    } catch (error) {
    } finally {
      setBusy(false);
      // setOpen(true);
    }
  };

  // Handle next step
  const handleContinue = () => {
    setOpen(false);
    history.push({
      pathname: "/play-with-friend/gamepage",
      state: { roomDetails, selectedCategory },
    });
  };

  // Close dialog
  const handleClose = () => {
    setOpen(false);
  };

  // Fetch categories from backend
  useEffect(() => {
    if (!categories || categories.length === 0) {
      dispatch(fetchAllCategories());
    }
  }, []);

  return (
    <>
      <div className={classes.container}>
        <Ball width={80} left="-3.5%" top="20%" />
        <Ball width={30} left="-0%" top="30%" bottom="0" margin="auto" />
        <Ball width={50} right="2%" top="0%" bottom="0" margin="auto" />
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
            <Ball width={25} left="0%" top="10%" margin="auto" />
            <img className="img" src={FrontImage} alt="" />
          </div>
        </div>
        <div className={classes.category}>
          {!IsLoading && !busy ? (
            categories?.map((item) => {
              return (
                <div
                  className={classes.card}
                  onClick={() => handleClickOpen(item)}
                >
                  <div className={classes.content}>
                    <img src={item.icon} alt="" width={100} style={{maxHeight:"100%"}}/>
                    <span>{item?.name}</span>
                  </div>
                </div>
              );
            })
          ) : (
            <Spinner />
          )}
        </div>
      </div>
      {open && (
        <Model
          header={"Share"}
          description={"Share this code with your friend to play together"}
          inputValue={roomDetails.roomCode}
          leftButton={"Close"}
          rightButton={"Continue"}
          funOnLeftButton={() => setOpen(false)}
          funOnRightButton={handleContinue}
          isContent
        />
      )}
    </>
  );
};

const mapStateToProps = (props) => {
  return {
    Categories: props?.Categories?.category,
    IsLoading: props?.Categories?.isLoading,
    Auth: props.Auth,
    dispatch: props.dispatch,
  };
};

export default connect(mapStateToProps)(Categories);
