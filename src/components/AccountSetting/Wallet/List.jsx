import second from "assets/images/ikc.svg";
import Wallet from "assets/images/wallet.svg";
import { useStyle } from "./List.style";

const List = ({ transaction }) => {
  const { status, amount } = transaction;
  const classes = useStyle();
  return (
    <div className={classes.container}>
      <div className="left">
        <img src={Wallet} alt="" width={30} />
        <span className="type">IKC Purchased</span>
      </div>
      <div className="right">
        <span className="points">
          + <img src={second} alt="" width={10} height={10} />{" "}
          <span className="money">{amount}</span>
        </span>
        <span>
          status: <span className="status"> {status}</span>
        </span>
      </div>
    </div>
  );
};

export default List;
