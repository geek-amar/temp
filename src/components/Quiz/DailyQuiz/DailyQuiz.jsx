import { Grid, Stack } from "@mui/material";
import { useState, useEffect } from "react";
// import backgroundImage from "assets/images/dailyquizpagebackground.png";
import billboardCardBackground from "assets/images/dailyquizbillboardbackground.png";
import billboardCardIcon from "assets/images/dailyquizbillboardicon.png";
import { useStyle } from "./DailyQuiz.style";
import { useMediaQuery } from "react-responsive";
import { useHistory } from "react-router-dom";
import { connect } from "react-redux";
import api from "api"
import moment from "moment";
import { fetchAllCategories } from "store/actions/categoryAction";
import placeHolderImage from "assets/images/placeholderprizeimage.png"
import MeltingSnowMan from "assets/images/melting-snowman.svg";

const DailyQuiz = (props) => {
  const classes = useStyle();
  const [selected, setSelected] = useState(1);
  const isSmallScreen = useMediaQuery({
    query: "(max-width: 800px)",
  });
  const { dispatch, categories } = props;
  const history = useHistory();
  
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
  const params = { classes, isSmallScreen, categories:cats,history };
  return (
    <div className={classes.container}>
      <div className={classes.banner}>
        <Stack
          className={classes.bannerContent}
          direction="column"
          justifyContent="space-between"
        >
          <span className={classes.bannerTitle}>Quiz details</span>
          <SelectDay
            classes={classes}
            selected={selected}
            setSelected={setSelected}
          />
        </Stack>
      </div>
      <div className={classes.mainContent}>
        {selected === 0 ? (
          <PastQuiz {...params} />
        ) : selected === 1 ? (
          <TodaysQuiz {...params} />
        ) : (
          <UpcomingQuiz {...params} />
        )}
      </div>
    </div>
  );
};


const mapStateToProps = (state) => {
  return {
    categories: state.Categories,
    dispatch: state.dispatch,
  };
};

export default connect(mapStateToProps)(DailyQuiz);

const SelectDay = ({ classes, selected, setSelected }) => {
  const isSmallScreen = useMediaQuery({
    query: "(max-width: 500px)",
  });
  return (
    <Stack direction="row" className={classes.selectContainer}>
      <button
        onClick={() => {
          setSelected(0);
        }}
        className={classes.first + (selected === 0 ? " selectedDay" : "")}
      >
        <span>Past quiz</span>
      </button>
      <button
        onClick={() => {
          setSelected(1);
        }}
        className={selected === 1 ? "selectedDay mid" : "mid"}
        style={isSmallScreen?{width:"110%"}:{}}
      >
        <span>Today's quiz</span>
      </button>
      <button
        onClick={() => {
          setSelected(2);
        }}
        className={classes.last + (selected === 2 ? " selectedDay" : "")}
        style={isSmallScreen?{width:"140%"}:{}}
      >
        <span>Upcoming quiz</span>
      </button>
    </Stack>
  );
};

const BillBoard = ({ classes,data, children }) => {
  const {title, bigTitle, subTitle} = data
  return (
    <div className={classes.billboardCard}>
      <div className={classes.billboardCardBackground}>
        <img
          className={classes.billboardCardBackgroundImage}
          src={billboardCardBackground}
          alt=""
        />
        <img
          className={classes.billboardCardIcon}
          src={billboardCardIcon}
          alt=""
        />
        <div className={classes.billboardCardBlur}></div>
      </div>
      <div className={classes.billboardContentContainer}>
        <Stack
          className={classes.billboardContent}
          justifyContent="space-evenly"
          alignItems="flex-start"
          direction="column"
          height="100%"
        >
          <Stack
            direction="column"
            className={classes.billboardContentText}
            height="80%"
            justifyContent="space-evenly"
          >
            {bigTitle &&
            <span className={classes.billboardBigTitle}>{bigTitle}</span>}
            {title &&
            <span className={classes.billboardTitle}>{title}</span>}
            {subTitle &&
            <span className={classes.billboardSubtitle}>{subTitle}</span>}
          </Stack>
        </Stack>
        {children}
      </div>
    </div>
  );
};


const PastQuiz = ({ classes, isSmallScreen, categories, history }) => {
  const [data, setData] = useState();
  const [loading, setLoading] = useState(true)
  useEffect(() => {
    setLoading(true);
    api.ikcplay.getDailyQuiz("past").then(res => {
      setData(res.payload);
    }).finally(()=>{
      setLoading(false);
    })
  }, []);
  const handleClick = ({_id}) => {
    history.push(`/dailyQuiz/leaderboard/${_id}`);
  }
  const billboardData = {title: "See your progress",bigTitle:"QUIZ RESULTS"}
  return (
    <div className={classes.listQuizContainer}>
      {!isSmallScreen && <BillBoard classes={classes} data={billboardData}/>}
      {loading && <div className={classes.loading}>Loading...</div>}
      {!loading && !data && <Error message='No Past Quizes'/>}
      {!loading && data && <Grid container spacing={3} justifyContent="space-between">
        {data.map((item) => (
          <Grid key={item._id} item xs={12} md={6}>
            <QuizItem classes={classes} data={item} categories={categories} type="Past" handleClick={handleClick}/>
          </Grid>
        ))}
      </Grid>}
    </div>
  );
};

const UpcomingQuiz = ({ classes, isSmallScreen, categories, history}) => {
  const [data, setData] = useState();
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    setLoading(true)
    api.ikcplay.getDailyQuiz("future").then(res => {
      setData(res.payload);
    }).finally(()=>{
      setLoading(false);
    })
  }, []);
  const handleClick = ({categoryId}) => {
    history.push(`/quiz/levels/${categoryId}`);
  }
  const billboardData = {title: "Test your intelligence!",bigTitle:"PREPARE YOURSELF"}
  return (
    <div className={classes.listQuizContainer}>
      {!isSmallScreen && <BillBoard classes={classes} data={billboardData}/>}
      {loading && <div className={classes.loading}>Loading...</div>}
      {!loading && !data && <Error message='No Upcoming Quizes'/>}
      {!loading && data && <Grid container spacing={3} justifyContent="space-between">
        {data.map((item) => (
          <Grid key={item._id} item xs={12} md={6}>
            <QuizItem classes={classes} data={item} categories={categories} type="Upcoming" handleClick={handleClick} />
          </Grid>
        ))}
      </Grid>}
    </div>
  );
};

const QuizItem = ({ classes, data, type, categories, handleClick }) => {
  const ButtonName = {
    Past: "Leaderboard",
    Upcoming: "Start Practice",
  };
  return (
    <Stack
      className={classes.quizItem}
      direction="row"
      alignItems="center"
      justifyContent="center"
      spacing={4}
    >
      <Stack className={classes.quizItemContent} direction="column">
        <span className="h1">{moment(data.startDate).format("Do MMM")}</span>
        <span className="h2">{categories[data.categoryId] ?? ""}</span>
      </Stack>
      <div className={classes.quizItemAction}>
        <button onClick={()=>{handleClick(data);}}>
          <span className="h3">{ButtonName[type]}</span>
        </button>
      </div>
    </Stack>
  );
};

const PrizeItemType = {
  horizontal: "prizeItemContentHorizontal",
  vertical: "prizeItemContentVertical",
};

const TodaysQuiz = ({ classes, isSmallScreen, categories, history }) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  
  useEffect(()=>{
    const fetchTodaysQuiz = async() => {
      setLoading(true);
      try{
        const res = await api.ikcplay.getDailyQuiz("present");
        setData(res.payload?.[0] ?? null);
      } catch(err){
      } finally{
        setLoading(false);
      }
    }
    fetchTodaysQuiz()
  },[])
  
  const billboardData = {title: "Test your intelligence!",bigTitle:`${(categories[data?.categoryId ?? ""] ?? "").toUpperCase()} QUIZ`,subTitle:`${data?.questions?.length} Questions`}
  const handleStartQuiz = () => {
    history.push(`/dailyquiz/play/${data._id}`);
  }
  return (
    <div className={classes.todaysQuizContainer}>
      {loading && <div className={classes.loading}>Loading...</div>}
      {!loading && !data && <Error message='No Quiz yet'/>}
      {!loading && data && <>
        <BillBoard classes={classes} data={billboardData}>
          <button onClick={handleStartQuiz}><span>Play</span></button> 
        </BillBoard>
        <Grid container spacing={2} direction="row" sx={{margin:"1em 0px"}}>
          {data.prizes?.map((item,i)=>(
            <Grid item key={item.rank} xs={i === 0 ? 12:6}>
              <PrizeItem classes={classes} data={item} type={i === 0 ? "horizontal":"vertical"} />
            </Grid>
          ))}
        </Grid>
        </>
      }
    </div>
  );
};

const PrizeItem = ({ classes, data, type }) => {
  return (
    <div className={classes.prizeItem}>
      <div className={classes[PrizeItemType[type]]}>
        <img className="prizeImg" src={placeHolderImage} alt="prizeImg" />
        <div className="prizeContent">
          <div className="prizePosition">
            <span className="prizeText">{data.rank}</span>
          </div>
          <div className="prizeReward">
            <span>{data.prize}</span>
          </div>
        </div>
      </div>
    </div>
  );
};


const Error = ({message})=>{
  return (
    <Stack
      sx={{
        width: "100%",
        zIndex: 10,
        alignItems: "center",
        justifyContent: "center",
        color: "red",
      }}
    >
      <img style={{ zIndex: 10 }} width={300} src={MeltingSnowMan} alt="" />
      <h1>{message}</h1>
    </Stack>
  )
}