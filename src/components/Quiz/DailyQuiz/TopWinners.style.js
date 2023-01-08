import { makeStyles } from "@mui/styles";
export const useStyle = makeStyles((theme) => ({
  topWinnerContainer: {
    maxHeight: '500px',
    minHeight: '300px',
    width: '100%',
    aspectRatio: 2,
    overflow: 'hidden',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'relative',
  },
  topWinnerBackground: {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    height: '100%',
  },
  winnerVerticalBox:{
    width: '15%',
    maxWidth: '150px',
    "@media (max-width: 768px)": {
      width: '20%',
    }
  },
  prizeContainer: {
    width: '100%',
    border: '2px solid #FF5C00',
    position: 'relative',
    borderRadius: '5px 5px 0px 0px'
  },
  playerRank: {
    left: '50%',
    width: '30px',
    height: '30px',
    position: 'absolute',
    transform: 'translate(-53%, -50%)',
    textAlign: 'center',
    justifyContent: 'inherit',
    borderRadius: '50%',
    backgroundColor: '#FE6000',
    "& span": {
      fontFamily: 'Poppins',
      fontStyle: 'normal',
      fontWeight: '600',
      fontSize: '20px',
      lineHeight: '30px',
      color: '#FFF'
    }
  },
  playerReward:{
    bottom: '0',
    height: '90%',
    position: 'absolute',
    left: '50%',
    transform: 'translate(-50%, 0px)'
  },
  playerScore: {
    marginBottom: '10px',
    fontFamily: 'Poppins',
    fontStyle: 'normal',
    fontWeight: '600',
    fontSize: '200%',
    lineHeight: '30px'
  },
  playerName: {
    fontFamily: 'Poppins',
    fontStyle: 'normal',
    fontWeight: '400',
    fontSize: '170%',
    lineHeight: '30px'
  },
  winnerAvatar: {
    marginBottom: '10px',
  },
  winnerCrown: {
    height: '50px',
    width: '27%',
    "& img": {
      width: '100%',
    }
  }
}));