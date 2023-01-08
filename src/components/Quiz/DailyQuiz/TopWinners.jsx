import winnerbackground from "assets/images/winnerbackground.svg"
import coins from "assets/images/pricecoins.png"
import winnercrown from "assets/images/winnercrown.svg"
import { useStyle } from "./TopWinners.style";
import { Avatar, Stack } from "@mui/material";
import AvtarIcon from "assets/images/AvtarIcon.svg";
import { useMediaQuery } from "react-responsive";

const order = [4,2,1,3,5]
const TopWinners = ({data}) => {
  const byOrder = []
  order.forEach((i)=>{
    if(data[i-1]){
      byOrder.push(data[i-1])
    }
  })
  const classes = useStyle();
  return (
    <div className={classes.topWinnerContainer}>
      <img src={winnerbackground} alt="winnerbackground" className={classes.topWinnerBackground} />
      <Stack spacing={2} direction="row" justifyContent='center' sx={{width:"100%"}}>
        {byOrder.map((player)=>(
            <VerticalBox classes={classes} player={player} height={player.rank} />
        ))}
      </Stack>
    </div>
  )
    
}

export default TopWinners;

const VerticalBox = ({classes,player, height}) => {
  const isSmallScreen = useMediaQuery({
    query: "(max-width: 700px)",
  });
  return (
    <Stack direction="column-reverse" className={classes.winnerVerticalBox} alignItems="center">
      <div className={classes.prizeContainer} style={{height:`${isSmallScreen?(100-height*10):(150-height*15)}px`}}>
        <div className={classes.playerRank}>
          <span>
            {player.rank}
          </span>
        </div>
        <img src={coins} alt="player reward" className={classes.playerReward} />
      </div>
      <div className={classes.playerScore}>
        {`${player.score} pt`}
      </div>
      <div className={classes.playerName}>
        {player.playerName}
      </div>
      <div className={classes.winnerAvatar}>
        <Avatar src={AvtarIcon} alt="player avatar" />
      </div>
      {player.rank === 1 && (
        <div className={classes.winnerCrown}>
          <img src={winnercrown} alt="winner crown" />
        </div>
      )}
    </Stack>
  )
}