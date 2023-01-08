import { Button, Drawer } from "@material-ui/core";
import ConnectWithoutContactIcon from "@mui/icons-material/ConnectWithoutContact";
import ContactPageIcon from "@mui/icons-material/ContactPage";
import GroupIcon from "@mui/icons-material/Group";
import LogoutIcon from "@mui/icons-material/Logout";
import PersonIcon from "@mui/icons-material/Person";
import { useEffect } from "react";
import { useLocation } from "react-router";
import { LogOut } from "store/actions/authAction";
import { useStyle } from "./MobileDrawer.style";

const MobileDrawer = ({ user, open, setOpen, login, dispatch, history }) => {
  const classes = useStyle();
  const location = useLocation();

  useEffect(() => {
    const ele = document.getElementById("drawer");
    ele?.addEventListener("focusout", () => {});
  }, []);

  return (
    <div className={classes.container} onClick={() => setOpen(!open)}>
      <Drawer open={open}>
        <div className={classes.Drawer} id={"drawer"}>
          <div
            onClick={() => {
              if (login) {
                history.push("/account");
              } else {
                history.push({ pathname: "/login", state: { from: location } });
              }
            }}
            className={classes.header}
          >
            <div>
              <img
                width={50}
                style={{ 
                  borderRadius: '50%',
                  aspectRatio: '1',
                  objectFit: 'cover'
                }}
                src={
                  user?.avatar ||
                  "https://polbol-media.s3.ap-south-1.amazonaws.com/ic_user_dummy.jpg"
                }
                alt=""
              />
            </div>
            <div className={classes.details}>
              {/* <small>Name</small> */}
              <span>{login ? user?.username : "Guest"}</span>
              <span style={{ fontSize: "16px" }}>
                {login ? user?.phone : "Login"}
              </span>
            </div>
          </div>
          <div className={classes.bottom}>
            <div>
              <PersonIcon />
              <Button onClick={() => history.push("/")}>Home</Button>
            </div>
            <div>
              <ConnectWithoutContactIcon />
              <Button onClick={() => history.push("/quiz/category")}>
                Single Player
              </Button>
            </div>
            <div>
              <ConnectWithoutContactIcon />
              <Button onClick={() => history.push("/play-with-friend")}>
                Two Player
              </Button>
            </div>
            <div>
              <GroupIcon />
              <Button onClick={() => history.push("/multiplayer")}>
                Mutli Player
              </Button>
            </div>
            <div>
              <ContactPageIcon />
              <Button onClick={() => history.push("/howtoplay")}>
                How To Play
              </Button>
            </div>
            {login && (
              <div>
                <LogoutIcon />
                <Button
                  onClick={() => {
                    login
                      ? dispatch(LogOut())
                      : history.push("/login", { state: { from: location } });
                  }}
                >
                  Logout
                </Button>
              </div>
            )}
          </div>
        </div>
      </Drawer>
    </div>
  );
};

export default MobileDrawer;
/**
 *       <div className={classes.drawer}>
        <div className={classes.header}>
          <div>
            <img src="/" />
          </div>
          <div className={classes.details}>
            <span>Name</span>
            <span>Ankur chaurasia</span>
            <span>0987654321</span>
          </div>
        </div>
        <div className={classes.bottom}>
          <div>Home</div>
          <div>Two Player</div>
          <div>Mutli Player</div>
          <div>Duo Player</div>
          <div>Contact Us</div>
          <div></div>
          <div></div>
          <div></div>
        </div>
      </div>
 */
