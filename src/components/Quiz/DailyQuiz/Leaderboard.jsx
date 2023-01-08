import { useEffect, useState } from "react";
import api from "api";
import { useParams } from "react-router";
import { Avatar, Grid, Pagination, Stack } from "@mui/material";
import { useStyle } from "./Leaderboard.style";
import AvtarIcon from "assets/images/AvtarIcon.svg";
import TopWinners from "./TopWinners";
import { connect } from "react-redux";
import moment from "moment";
import { fetchAllCategories } from "store/actions/categoryAction";

const ITEMS_PER_PAGE = 15;
const LeaderBoard = (props) => {
  const classes = useStyle();
  const {dailyQuizId} = useParams() 
  const [result, setResult] = useState()
  const [loading, setLoading] = useState(true)
  const [page, setPage] = useState(1)
  const [totalPages, setTotalPages] = useState(1)
  const { dispatch, categories } = props;
  
  useEffect(() => {
    if (categories.category.length === 0) {
      dispatch(fetchAllCategories());
    }
    // eslint-disable-next-line
  }, [dispatch]);
  const cats = categories.category.reduce((acc, cur) => {
    acc[cur._id] = cur.name;
    return acc;
  }, {});

  useEffect(()=>{
    if(!dailyQuizId) return;
    const getResult = async(id)=>{
      setLoading(true)
      try{
        const res = await api.ikcplay.getLeaderBoard(id)
        if(res.payload.myRank){ // TODO: remove once the api is fixed
          if(Array.isArray(res.payload.myRank)){
            res.payload.myRank = res.payload.myRank[0]
          }
        }
        setResult(res.payload)
        setTotalPages(Math.ceil(res.payload.leaderboard.length/ITEMS_PER_PAGE))
      } catch(e){
        console.warn(e)
      } finally{
        setLoading(false)
      }
    }
    getResult(dailyQuizId)
  },[dailyQuizId])
  const myCss = {
    background: 'rgba(255, 92, 0, 0.16)',
    border: '0'
  }
  return (
    <div className={classes.container}>
      <div className={classes.banner}>
        <div className={classes.bannerContent}>
          <span>LeaderBoard</span>
          <QuizDetailBox data={result?.quiz} categories={cats} classes={classes} />
        </div>
      </div>
      {loading && <div className={classes.loading}>Loading...</div>}
      {!loading && !result && <div className={classes.loading}>No Data</div>}
      {!loading && result && <>
        {result.leaderboard && page === 1 && <TopWinners data={result.leaderboard.slice(0,result.quiz.totalWinners ?? 1)} />}
        <Grid container direction="column" alignItems="center" sx={{marginTop:'20px'}} >
          {result.myRank && page === 1 && result.myRank.rank !== 1  && <PlayerCard classes={classes} style={myCss} player={result.myRank} />}
          {
            result.leaderboard?.sort((a,b)=>(a.rank>=b.rank)).slice((page-1)*ITEMS_PER_PAGE,page*ITEMS_PER_PAGE).map((player)=>(
              <PlayerCard classes={classes} player={player} key={player._id} />
            ))
          }
        </Grid>
        <Pagination
          className={classes.pagination}
          count={totalPages} 
          page={page} 
          onChange={(e,value)=>setPage(value)} 
          variant="outlined" 
          shape="rounded" 
          color="secondary"
          size="large"
        />
      </>}
    </div>
  );
}


const mapStateToProps = (state) => {
  return {
    categories: state.Categories,
    dispatch: state.dispatch,
  };
};

export default connect(mapStateToProps)(LeaderBoard);

const PlayerCard = ({player,classes,style}) => {
  return (
    <Grid item justifyContent="space-around" className={classes.playerCard}   >
      <Stack direction="row" justifyContent="space-between" className={classes.playerContent} sx={style}>
        {/* <Avatar src={player.playerPic ?? AvtarIcon} /> */}
        <div className={classes.playerRank}><span>{player.rank}</span></div>
        <div className={classes.playerAvatar}><Avatar src={AvtarIcon} alt="player avatar" /></div>
        <div className={classes.playerName}><span>{player.playerName}</span></div>
        <div className={classes.playerScore}><span>{player.score} pt</span></div>
      </Stack>
    </Grid>
  );
}

const QuizDetailBox = ({data, categories,classes}) => {
  if(!data) return <></>
  return (
    <div className={classes.bannerQuizDetails}>
      <Stack direction="row" alignItems="center" sx={{height:"100%",width:"100%",textAlign:"center"}}>
        <div className={classes.bannerQuizDate}>{moment(data.startDate).format("Do MMM")}</div>
        <div className="line"/>
        <Stack direction="column" justifyContent="center" className={classes.bannerQuizCategory}>
          <div className={classes.bannerQuizCategoryText}>{categories[data.categoryId] ?? ""}</div>
          <div className={classes.bannerQuizCategoryCount}>{`${data.metadata?.maxQuestions ?? 0} Questions`}</div>
        </Stack>
      </Stack>
    </div>
  );
}