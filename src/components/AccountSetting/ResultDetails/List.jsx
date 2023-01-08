import Avatar2 from "assets/images/AvtarIcon2.svg";
import { useStyle } from "../ResultDetails/AccountResult.style";
const List = ({ report }) => {
  const classes = useStyle();
  const { title, score, level } = report || {};

  return (
    <div className={classes.list + "  list"}>
      <div className={classes.listContainer}>
        <img src={Avatar2} alt="" />
        <span>{title}</span>
      </div>
      <span className="type">Lv.{level}</span>
      <span className="points">{score < 0 ? 0 : score} pts.</span>
    </div>
  );
};

export default List;
