import { Pagination, PaginationItem, Stack } from "@mui/material";
import api from "api";
import { Spinner } from "assets";
import Avatar from "assets/images/AvtarIcon.svg";
import Avatar2 from "assets/images/AvtarIcon2.svg";
import BlueShadow from "assets/images/blurShadow.svg";
import SinglePlayerMobile from "assets/images/mobileTwoplayer.svg";
import indianHistory from "assets/images/multiPlayerImage.svg";
import Back from "assets/images/MultiPlayerScreen.svg";
import SinglePlayerMobileLogo from "assets/images/MultiplayerTopBar.svg";
import Badge from "assets/images/resultBadge.svg";
import singlePageBackground from "assets/images/singlePageBackground.svg";
import singlePageBackgroundBlue from "assets/images/singlePageBackgroundBlue.svg";
import Ball from "common/ball/Ball";
import NoDataFound from "common/NoDataFound/NoDataFound";
import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useStyle } from "./LeaderboardResult.style";

function paginated(jsonArray, p, perPage = 10) {
  const pageCount = Math.ceil(jsonArray.length / perPage);
  let page = parseInt(p);
  if (!page) {
    page = 1;
  }
  if (page > pageCount) {
    page = pageCount;
  }
  const response = {
    page,
    pageCount,
    posts: jsonArray.slice(page * perPage - perPage, page * perPage),
  };
  return response;
}

const LeaderboardResult = () => {
  const classes = useStyle();
  const [data, setData] = React.useState([]);
  let { id } = useParams();

  const [fetching, setFetching] = React.useState(true);
  const [page, setPage] = React.useState(1);
  const [perPage, setPerPage] = React.useState(10);
  const [totalPages, setTotalPages] = React.useState(0);
  const [pageData, setPageData] = React.useState([]);

  const handlePageChange = (ev, value) => {
    let pgData = paginated(data, value, perPage);
    setPage(value);
    setPageData(pgData.posts);
  };

  useEffect(() => {
    async function fetchLeaderBoard() {
      const data = await api.ikcplay.fetch(`/quiz/${id}/leaderboard`);
      let generated = data.payload.result;

      setData(generated);
      let paginate = paginated(generated, page, perPage);
      setPageData(paginate.posts);
      setTotalPages(paginate.pageCount);
      setFetching(false);
    }

    fetchLeaderBoard();
  }, []);

  return (
    <div className={classes.container}>
      <Ball top="26%" width={80} left={"-3.5%"} />
      <Ball top="0%" width={50} right={"0%"} bottom="0" margin="auto" />

      <img
        className="image"
        src={Back}
        alt=""
        style={{
          position: "absolute",
          top: "60%",
          bottom: "0",
          margin: "auto",
          opacity: "50%",
          left: "-15%",
          zIndex: 10,
          width: "600px",
        }}
      />

      <img
        className="image"
        src={Back}
        alt=""
        style={{
          position: "absolute",
          top: "-10%",
          bottom: "0",
          margin: "auto",
          opacity: "50%",
          right: "0%",
          zIndex: 10,
          width: "300px",
        }}
      />
      <div className={classes.imageContainer}>
        <img className="image1" src={singlePageBackground} alt="" />
        <img className="image2" src={singlePageBackgroundBlue} alt="" />
      </div>
      <div className={classes.mobileImageContainer}>
        <img className="image1" src={SinglePlayerMobile} alt="" />
        <img className="image2" src={SinglePlayerMobileLogo} alt="" />
      </div>
      {!fetching ? (
        <div className={classes.wrapper}>
          <Ball top="-5%" width={30} right={"10%"} />
          <div className={classes.header}>
            <span className={classes.resultHeader}>Result</span>
            <div className={classes.result}>
              <div className={classes.card}>
                <img src={indianHistory} alt="img" width={60} />
                <span>Indian History</span>
              </div>
              { data.length > 0 && (
              <div className={classes.winner}>
                <div className="images">
                  <img
                    style={{
                      zIndex: 1,
                    }}
                    src={Badge}
                    width={30}
                    alt=""
                  />
                  <img
                    style={{
                      zIndex: 1,
                    }}
                    src={Badge}
                    width={50}
                    alt=""
                  />
                  <img
                    style={{
                      zIndex: 1,
                    }}
                    src={Badge}
                    width={30}
                    alt=""
                  />
                </div>
                <div className="images">
                  <img
                    src={BlueShadow}
                    width={100}
                    style={{
                      zIndex: 0,
                    }}
                    className="shadow"
                    alt="shadow"
                  />
                </div>
                {data.slice(0, 3).map((player, i) => (
                  <div key={player._id} className={classes.name}>
                    <div>
                      <span>{i + 1}</span> <span>{player.playerName}</span>
                    </div>
                    <span>{player.points || 0} pts</span>
                  </div>
                ))}
              </div>)}
            </div>
          </div>
          <div className={classes.bottom}>
            <span className="leaderBoard">Leaderboard</span>
            {
              data.length > 0 ? (
            <div className={classes.leader}>
              {pageData.map((player, i) => (
                <div
                  key={i}
                  className={i === 0 ? classes.label : classes.label2}
                >
                  {/* <img width={30} src={UpIcon} /> */}
                  <span>{player.position}</span>
                  {i === 0 ? (
                    <img width={30} src={Avatar} />
                  ) : (
                    <img width={30} src={Avatar2} />
                  )}

                  <span className="name">{player.playerName}</span>
                  <span className="point">{player.points || 0} pts.</span>
                  <span className="ikc">+36 IKC</span>
                </div>
              ))}
              <Stack
                sx={{
                  marginTop: "10px",
                  marginBottom: "10px",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
                // spacing={2}
              >
                <Pagination
                  classes={{ root: classes.pagination }}
                  count={totalPages}
                  page={page}
                  variant="outlined"
                  hidePrevButton
                  hideNextButton
                  onChange={handlePageChange}
                  renderItem={(item) => <PaginationItem {...item} />}
                />
              </Stack>
            </div>
              ) : (
                <NoDataFound message="No player played this quiz" />
              )
          }
          </div>
        </div>
      ) : (
        <Spinner />
      )}
    </div>
  );
};

export default LeaderboardResult;
