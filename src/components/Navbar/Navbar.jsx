import { Avatar, Box, Menu, MenuItem } from "@mui/material";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import { styled } from "@mui/material/styles";
import Tooltip, { tooltipClasses } from "@mui/material/Tooltip";
import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { useMediaQuery } from "react-responsive";
import { useHistory, useLocation } from "react-router";
import { toast } from "react-toastify";
import { LogOut } from "store/actions/authAction";
import LOGO from "../../assets/images/logo.png";
import Drawer from "../../assets/images/mobileDrawer.svg";
import User from "../../assets/images/user.svg";
import MobileDrawer from "../../common/MobileDrawer/MobileDrawer";
import Links from "./Links";
import { useStyle } from "./Navbar.style";

const HtmlTooltip = styled(({ className, ...props }) => (
  <Tooltip {...props} classes={{ popper: className }} />
))(({ theme }) => ({
  [`& .${tooltipClasses.tooltip}`]: {
    backgroundColor: "#f5f5f9",
    color: "rgba(0, 0, 0, 0.87)",
    maxWidth: 220,
    fontSize: theme.typography.pxToRem(12),
    border: "1px solid #dadde9",
  },
}));

const LINKS = [
  {
    name: "Home",
    path: "/",
  },
  {
    name: "Single player",
    path: "/quiz/category",
    match: "/quiz",
  },
  {
    name: "Two player",
    path: "/play-with-friend",
  },
  {
    name: "Multiplayer",
    path: "/multiplayer",
  },
  {
    name: "How To Play",
    path: "/howtoplay",
  },
];

function Navbar(props) {
  const { isUserLoggedIn, user, token, ikcAmount } = props.Auth;
  const location = useLocation();

  const history = useHistory();
  const classes = useStyle(props);

  const isLaptop = useMediaQuery({
    query: "(min-device-width: 1024px)",
  });

  const [open, setOpen] = useState(false);
  const [activeLink, setActiveLink] = useState(0);
  const [anchorEl, setAnchorEl] = React.useState(null);
  const openmenu = Boolean(anchorEl);

  useEffect(() => {
    const path = history.location.pathname;
    LINKS.forEach((link, index) => {
      if (path.indexOf(link.match ? link.match : link.path) > -1) {
        setActiveLink(index);
      }
    });
  }, [history.location.pathname]);

  const handleLogOut = () => {
    if (window.location.href.indexOf("/quiz/play") > -1) {
      toast.warn("You are in a quiz, please finish it first");
    } else {
      props.dispatch(LogOut());
      // history.push("/login", { state: { from: location } });
    }
  };

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <>
      <div className={classes.container}>
        <div className={classes.wrapper}>
          <div className={classes.image}>
            <img src={LOGO} alt="" className="company_logo" width={120} />
          </div>
          <div className={classes.links}>
            {LINKS.map((link, index) => (
              <Links
                onClick={() => setActiveLink(index)}
                key={index}
                to={link.path}
                active={activeLink === index ? 1 : 0}
              >
                {link.name}
              </Links>
            ))}
          </div>
          <div className={classes.profile}>
            <HtmlTooltip
              style={{ padding: 0, margin: 0 }}
              title={
                <React.Fragment>
                  <List disablePadding>
                    <ListItem
                      onClick={() => {
                        if (isUserLoggedIn) {
                          history.push("/account");
                        }
                      }}
                      style={{ cursor: "pointer" }}
                    >
                      <ListItemIcon
                        style={{
                          minWidth: 45,
                        }}
                      >
                        <Avatar
                          sx={{ width: 30, height: 30 }}
                          alt="Remy Sharp"
                          src={(user && user.avatar) ?? User}
                        />
                      </ListItemIcon>
                      <span style={{ fontSize: "14px", color: "#E1A200" }}>
                        {isUserLoggedIn ? "Profile" : "Guest"}
                      </span>
                    </ListItem>
                    <ListItem
                      onClick={() => {
                        if (isUserLoggedIn) {
                          handleLogOut();
                        } else {
                          history.push({
                            pathname: "/login",
                            state: { from: location },
                          });
                        }
                      }}
                      disablePadding
                    >
                      <button className={classes.button}>
                        {isUserLoggedIn ? "LOGOUT" : "LOGIN"}
                      </button>
                    </ListItem>
                  </List>
                </React.Fragment>
              }
            >
              <img
                width={30}
                height={30}
                style={{ borderRadius: "50%", objectFit: "cover" }}
                src={isLaptop ? (user && user.avatar) ?? User : Drawer}
                alt="user"
                onClick={(event) => {
                  if (!isLaptop) {
                    setOpen(!open);
                  } else {
                    // handleClick(event);
                  }
                }}
                aria-controls={openmenu ? "basic-menu" : undefined}
              />
            </HtmlTooltip>

            <Menu
              id="basic-menu"
              anchorEl={anchorEl}
              open={openmenu}
              onClose={handleClose}
              MenuListProps={{
                "aria-labelledby": "basic-button",
                onMouseLeave: handleClose,
              }}
            >
              <Box sx={{ paddingLeft: 2, paddingRight: 8, fontSize: "14px" }}>
                {isUserLoggedIn ? user?.username : "Guest"}
              </Box>
              {isUserLoggedIn ? (
                [
                  <MenuItem
                    style={{ fontSize: "18px" }}
                    onClick={() => {
                      history.push("/account");
                      handleClose();
                    }}
                    key={"account"}
                  >
                    Profile
                  </MenuItem>,
                  <MenuItem
                    key={"logout"}
                    style={{ fontSize: "18px" }}
                    onClick={handleLogOut}
                  >
                    Logout
                  </MenuItem>,
                ]
              ) : (
                <MenuItem
                  style={{ fontSize: "18px" }}
                  onClick={() => {
                    history.push({
                      pathname: "/login",
                      state: { from: location },
                    });
                    handleClose();
                  }}
                >
                  Login
                </MenuItem>
              )}
            </Menu>
          </div>
        </div>
      </div>
      <MobileDrawer
        user={user}
        open={open}
        setOpen={setOpen}
        login={isUserLoggedIn}
        dispatch={props.dispatch}
        history={history}
      />
    </>
  );
}

const mapStateToProps = (state) => {
  return state;
};

export default connect(mapStateToProps)(Navbar);
