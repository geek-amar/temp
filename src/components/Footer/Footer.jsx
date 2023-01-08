import { IconButton } from "@mui/material";
import { TNC_URL } from "config";
import { useHistory } from "react-router";
import Cartoon from "../../assets/images/cartoon.svg";
import Game from "../../assets/images/game.svg";
import { useStyle } from "./Footer.style";

export default function Footer(props) {
  const history = useHistory();
  const classes = useStyle(props);
  return (
    <div className={classes.wrapper}>
      <div className={classes.top}>
        <img src={Game} alt="" />
        <img src={Cartoon} alt="" />
      </div>
      <div className={classes.bottom}>
        <div className={classes.details}>
          <div className={classes.detailsText}>
            <span>Customer Support</span>
            <span onClick={() => window.open(TNC_URL)}>Terms & Conditions</span>
            <span onClick={() => history.push("/howtoplay")}>How to Play</span>
          </div>
          <div>
            <span className={classes.connect}>
              <span className={classes.yellow}>Connect</span> with us
            </span>
            <div className={classes.icons}>
              <IconButton>
                {/* Instagram */}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  // className="icon icon-tabler icon-tabler-brand-instagram"
                  width="28"
                  height="28"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="#fff"
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                  <rect x="4" y="4" width="16" height="16" rx="4" />
                  <circle cx="12" cy="12" r="3" />
                  <line x1="16.5" y1="7.5" x2="16.5" y2="7.501" />
                </svg>
              </IconButton>
              {/* Facebook */}
              <div>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  // className="icon icon-tabler icon-tabler-brand-facebook"
                  width="28"
                  height="28"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="#ffffff"
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                  <path d="M7 10v4h3v7h4v-7h3l1 -4h-4v-2a1 1 0 0 1 1 -1h3v-4h-3a5 5 0 0 0 -5 5v2h-3" />
                </svg>
              </div>
            </div>
          </div>
        </div>
        <div className={classes.end}>
          <span>IKC Digital Services LLP</span>
          {/* <img src={LOGO} alt="" width={100} /> */}
        </div>
      </div>
    </div>
  );
}

/**
 * <div className="footer_cont">
        <div className="contact_section">
          <h2>Connect with us</h2>
          <div className="social_icons">
            <TwitterIcon />
            <FacebookIcon />
            <InstagramIcon />
          </div>
          <Link to="/">
            <h3> Customer Support </h3>
          </Link>
          <Link to="/">
            <h3> Terms {' & '} Conditions </h3>
          </Link>
          <Link to="/">
            <h3> Learn more </h3>
          </Link>
        </div>
        <div className="company_section">
          <h2>IKC Digital Service LLP</h2>
          <img src={LOGO} className="company_logo" />
        </div>
      </div>
 */
