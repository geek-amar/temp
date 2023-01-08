import Avatar2 from "assets/images/AvtarIcon2.svg";
// import { useStyle } from '../ResultDetails/AccountResult.style';
import { useStyle } from "./AccountResult.style";
const MultiList = ({ report }) => {
  console.info(report)

  const classes = useStyle();
  return (
    <div className={classes.list + " list"}>
      <div className={classes.listContainer} style={{flex:4}}>
        <img src={Avatar2} alt="" />
        <span>{report?.quiz?.[0]?.title}</span>
      </div>
      <span className="points">{Math.max(report.score,0)} pts.</span>
    </div>
  );
};

export default MultiList;