import { LinearProgress, Pagination } from "@mui/material";
import api from "api";
import SinglePlayerMobile from "assets/images/mobileTwoplayer.svg";
import MultiPlayerScreen from "assets/images/MultiPlayerScreen.svg";
import SinglePlayerMobileLogo from "assets/images/MultiplayerTopBar.svg";
import Plus from "assets/images/plus.svg";
import NoData from "assets/images/searching-data.svg";
// import singlePageBackground from 'assets/images/blackWave.svg';
// import singlePageBackgroundBlue from 'assets/images/blueWave.svg';
import singlePageBackground from "assets/images/singlePageBackground.svg";
import singlePageBackgroundBlue from "assets/images/singlePageBackgroundBlue.svg";
import Badge from "assets/images/trophy.svg";
import UserIcon from "assets/images/userIcon.svg";
import Ball from "common/ball/Ball";
import ErrorPopup from "common/ErrorPopup/ErrorPopup";
import Model from "components/Model/Model";
import useErrorPopup from "hooks/useErrorPopup";
import React, { useEffect, useRef, useState } from "react";
import { connect } from "react-redux";
import { useHistory, useLocation, useParams } from "react-router-dom";
import { fetchAllCategories } from "store/actions/categoryAction";
import { timeLeft } from "utils";
import LiveCard from "./cards/LiveCard";
import MyCard from "./cards/MyCard";
import Participated from "./cards/Participated";
import RegisterCard from "./cards/RegisterCard";
import { useStyle } from "./MutliPlayer.style";
import _ from "lodash";

function getType(_tab) {
  switch (_tab) {
    case 1:
      return "live";
    case 2:
      return "participated";
    case 3:
      return "private";

    default:
      return "register";
  }
}

const MultiPlayer = (props) => {
  const { openPopup, closePopup, popRef, message } = useErrorPopup();
  const history = useHistory();
  const [quiz, setQuiz] = React.useState({});
  const { code } = useParams();
  const [quizCode, setQuizCode] = useState(code || "");
  const [open, setOpen] = useState(false);
  const {state} = useLocation();
  const [tab, setTab] = useState(state?.page ?? 0);
  const [page, setPage] = useState(1);
  const [count, setCount] = useState(1);
  const request = useRef(false);

  const categories = props.Categories.category.reduce((acc, cur) => {
    acc[cur._id] = cur
    return acc;
  }, {});
  const { dispatch } = props;
  const classes = useStyle({
    tab: tab,
  });
  useEffect(() => {
    if (request.current) return;
    if (props.Categories.category.length === 0) {
      request.current = true;
      dispatch(fetchAllCategories());
    }
  }, [dispatch, props.Categories.category]);

  const [fetchingCost, setFetchingCost] = React.useState(false);

  const [joinConfirmationModal, setJoinConfirmationModal] =
    React.useState(false);

  const { isUserLoggedIn } = props.Auth;
  let [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (code) handleJoinClick();
  }, []);

  useEffect(() => {
    async function fetchTab(_tab) {
      try {
        setLoading(true);
        setData([]);
        let type = getType(_tab);
        let data = await api.ikcplay.getQuizzes(type);

        if (data.error) {
          openPopup(data.message);
        } else {
          if (type === "private") {
            let pq = _.cloneDeep(data.payload.privateQuiz);
            pq = _.sortBy(pq, [
              function (o) {
                return -Date.parse(o.createdAt);
              },
              ["desc"],
            ]);
            setData(pq);
            setPage(1);
            setCount(data.payload.pageCount);
          } else {
            let pq = _.cloneDeep(data.payload.quizzes);
            pq = _.sortBy(pq, [
              function (o) {
                return -Date.parse(o.createdAt);
              },
            ]);
            setData(pq);
          }
        }
      } catch (error) {
        openPopup(error.message);
      } finally {
        setLoading(false);
      }
    }

    fetchTab(tab);
  }, [tab]);

  useEffect(() => {
    if (tab != 3) return;
    async function fetchPage() {
      try {
        setLoading(true);
        setData([]);
        let type = getType(3);
        let data = await api.ikcplay.getQuizzes(type, page - 1);
        if (data.error) {
          openPopup(data.message);
        } else {
          let pq = _.cloneDeep(data.payload.privateQuiz);
          pq = _.sortBy(pq, [
            function (o) {
              return -Date.parse(o.createdAt);
            },
          ]);
          setData(pq);
        }
      } catch (error) {
        openPopup(error.message);
      } finally {
        setLoading(false);
      }
    }
    fetchPage();
  }, [page]);

  const handleJoinClick = async () => {
    if (!quizCode && !code) return;
    setFetchingCost(true);
    try {
      let data = await api.ikcplay.fetchPrivateQuizFromCode(quizCode);
      if (data.error) {
        openPopup(data.message);
        setOpen(false);
        return;
      }
      if (timeLeft(data.payload.endDate).hours < 0) {
        if (code)
          history.replace(`/multiplayer/leaderboard/${data.payload._id}`);
        if (quizCode)
          history.push(`/multiplayer/leaderboard/${data.payload._id}`);
        return;
      }
      setQuiz(data.payload);
      setOpen(false);
      setJoinConfirmationModal(true);
      setFetchingCost(false);
    } catch (error) {
      openPopup(error.message);
      setOpen(false);
    }
  };

  return (
    <>
      {/* <ResultComponent /> */}
      <div className={classes.container}>
        <Ball width={80} left="-3%" top="20%" />
        <Ball width={30} left="0" top="20%" bottom="0" margin="auto" />
        <Ball width={50} right="3%" top="6%" bottom="0" margin="auto" />
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
              <span className="title">
                <img src={Badge} alt="" width={50} height={50} />
                Multi Player
              </span>
              <span>
                Play multiplayer challenges to find out if you are the best
              </span>
            </div>

            <div className={classes.bottom}>
              <div onClick={() => setOpen(true)} className={classes.card}>
                <img src={Plus} alt="" />
                <span>Join Quiz</span>
              </div>
              <div
                onClick={() => history.push("/multiplayer/create")}
                className={classes.card}
              >
                <img src={UserIcon} alt="" />
                <span>Create Quiz</span>
              </div>

              <Ball width={20} left="-15%" bottom="-20%" margin="auto" />
            </div>
          </div>
          <div className={classes.right}>
            <Ball left="10%" top="5%" width={25} />
            <img className="img" src={MultiPlayerScreen} alt="" />
          </div>
        </div>

        <div className={classes.multiPlayerWrapper}>
          <div className={classes.bottomContainer}>
            <div className={classes.bottomHeader}>
              <span onClick={() => setTab(0)} className="tab1">
                Register
              </span>
              <span onClick={() => setTab(1)} className="tab2">
                Live <div>Quiz</div>
              </span>
              {isUserLoggedIn && (
                <>
                  <span onClick={() => setTab(2)} className="tab3">
                    Participated
                  </span>
                  <span onClick={() => setTab(3)} className="tab4">
                    Private <div>Quiz</div>
                  </span>
                </>
              )}
            </div>

            {!loading ? (
              tab === 0 ? (
                <div className={classes.bottomList} key={1}>
                  {data.map((item) => ( 
                    <RegisterCard 
                      categories={categories} 
                      key={item._id} 
                      data={item} 
                    />
                  ))}
                </div>
              ) : tab === 1 ? (
                <div className={classes.bottomList} key={2}>
                  {data.map((item) => {
                    return (
                      <LiveCard
                        categories={categories}
                        key={item._id}
                        data={item}
                      />
                    );
                  })}
                </div>
              ) : tab === 2 ? (
                <div className={classes.bottomList} key={3}>
                  {data.map((item) => {
                    return (
                      <Participated
                        categories={categories}
                        key={item._id}
                        setResult={history}
                        data={item}
                      />
                    );
                  })}
                </div>
              ) : (
                <div className={classes.paggedContainer} key={44}>
                  <div className={classes.bottomList} key={4}>
                    {data.map((item) => {
                      return (
                        <MyCard
                          categories={categories}
                          key={item._id}
                          data={item}
                        />
                      );
                    })}
                  </div>
                  <Pagination
                    page={page}
                    onChange={(_, v) => {
                      setPage(v);
                    }}
                    count={count}
                  />
                </div>
              )
            ) : (
              <>
                <LinearProgress color="warning" />
              </>
            )}

            {!loading && data.length === 0 && (
              <div className={classes.noData}>
                <img width={300} src={NoData} alt="" />
                <span>No Data</span>
              </div>
            )}
          </div>
        </div>
      </div>
      <ErrorPopup popRef={popRef} closePopup={closePopup} popupdata={message} />
      {open && (
        <Model
          header="Join Private Quiz"
          description={"Enter the code to join the private quiz."}
          isContent
          inputValue={quizCode}
          setInputValue={setQuizCode}
          funOnLeftButton={() => setOpen(false)}
          funOnRightButton={handleJoinClick}
          leftButton={"Close"}
          rightButton={"Join now"}
          input
          busy={fetchingCost}
        />
      )}
      {joinConfirmationModal && (
        <Model
          header="Important"
          description={
            <>
              <div>By continuing {quiz.poolAmount} IKC will be deducted!</div>
              <div>Are you sure you want to join?</div>
              <div>You will be able to play the quiz only once.</div>
            </>
          }
          funOnLeftButton={() => setJoinConfirmationModal(false)}
          funOnRightButton={() =>
            history.push(`/multiplayer/private/quiz/${quizCode}/${quiz._id}`)
          }
          leftButton={"Close"}
          rightButton={"Continue"}
        />
      )}
    </>
  );
};

const mapStateToProps = (state) => {
  return state;
};
export default connect(mapStateToProps)(MultiPlayer);
