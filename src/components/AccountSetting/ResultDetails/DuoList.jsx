import Avatar2 from "assets/images/AvtarIcon2.svg";
// import { useStyle } from '../ResultDetails/AccountResult.style';
import { useStyle } from "./AccountResult.style";
const DuoList = ({ report }) => {
  let { won, draw, opponentScore, category, myScore } = report || {};

  const classes = useStyle();
  return (
    <div className={classes.duoContainer}>
      <div className={classes.list + "  list"}>
        <div className={classes.listContainer}>
          <img src={Avatar2} alt="" />
          {/* <span>{title}</span> */}
        </div>
        <span className="type">{category}</span>
        <span className="points">You scored {myScore} pts.</span>
      </div>
      <div className={classes.duo}>
        <span className="winner">
          {won ? "You Won" : draw ? "Draw" : "Lost"}
        </span>
        <span className="score">
          Player 2 Score <span className="points">{opponentScore} pts.</span>
        </span>
      </div>
    </div>
  );
};

export default DuoList;
