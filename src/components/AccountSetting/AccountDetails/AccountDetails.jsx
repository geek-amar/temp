import LoadingButton from "@mui/lab/LoadingButton";
import {
  Button,
  FormControl,
  InputAdornment,
  InputLabel,
  LinearProgress,
  OutlinedInput,
  useTheme,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
} from "@mui/material";
import PlusIcon from "assets/images/accountPlus.svg";
import Star from "assets/images/accountStar.svg";
import User from "assets/images/AccountUser.svg";
import Camera from "assets/images/camera.svg";
import IKC from "assets/images/ikc.svg";
import Wallet from "assets/images/wallet.svg";
import moment from "moment";
import React from "react";
import { toast } from "react-toastify";
import { useStyle } from "./AccountDetails.style";
import api from "api";
import { useDispatch } from "react-redux";
import { updateUserInfo } from "store/actions/authAction";
import { setUserInfo } from "store/actions/authAction";

const AccountDetails = ({ balance }) => {
  const theme = useTheme();
  // for dialog
  const [open, setOpen] = React.useState(false);
  const [amount, setAmount] = React.useState(100);
  const dispatch = useDispatch();

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const classes = useStyle();

  const [firstName, setFirstName] = React.useState("");
  const [lastName, setLastName] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [DOB, setDOB] = React.useState(new Date());
  const [gender, setGender] = React.useState("");
  const [avatar, setAvatar] = React.useState("");
  const [purchaseLoading, setPurchaseLoading] = React.useState(false);

  const [busy, setBusy] = React.useState(true);

  React.useEffect(() => {
    setBusy(true);
    async function getUserInfo() {
      try {
        const response = await api.ikcplay.getUser();
        const data = response;
        setFirstName(data.payload.firstName);
        setLastName(data.payload.lastName);
        setEmail(data.payload.email);
        setDOB(data.payload.dateOfBirth);
        setGender(data.payload.gender);
        setAvatar(data.payload.avatar);
      } catch (e) {
        console.log(e);
      } finally {
        setBusy(false);
      }
    }
    getUserInfo();
  }, []);

  const handleUpdateClick = async () => {
    setBusy(true);
    try {
      const response = await api.ikcplay.updateUser({
        userDetails: {
          firstName,
          lastName,
          email,
          gender,
          dateOfBirth: DOB,
          avatar,
        },
      });
      dispatch(setUserInfo(response.payload));
      toast.info("Profile Updated Successfully")
    } catch (e) {
      toast.error("Profile Update Failed")
    } finally {
      setBusy(false);
    }
  };

  const handleImageUpload = async (ev) => {
    setBusy(true);
    try {
      const formData = new FormData();
      formData.append("file", ev.target.files[0]);
      let res = await fetch("https://backend.playikc.in/common/image", {
        method: "POST",
        headers: {
          Authorization: `Bearer ${JSON.parse(localStorage.getItem("token"))}`,
        },
        body: formData,
      });
      const data = await res.json();
      setAvatar(data.payload.location);
    } catch (e) {
    } finally {
      setBusy(false);
    }
  };

  const handleBalanceAdd = async () => {
    let type = "IKC";
    setPurchaseLoading(true);

    if (amount > 0) {
      try {
        let res = await fetch(
          `https://backend.playikc.in/wallet/initiatePaytmTransaction?amount=${amount}&type=${type}`,
          {
            headers: {
              Authorization: `Bearer ${JSON.parse(
                localStorage.getItem("token")
              )}`,
            },
          }
        );

        const data = await res.text();
        var newWindow = window.open();
        newWindow.document.write(data);

        setPurchaseLoading(false);
        handleClose();
      } catch (error) {}
    }
  };

  const onAmmountChange = (ev) => {
    const val = ev.target.value;
    if (val === '') setAmount(null);
    if (+val > 0) setAmount(+val);
    if (+val < 0) setAmount(0);
  }

  return (
    <>
      {busy && <LinearProgress color="warning" />}
      <div className={classes.container}>
        <div className={classes.top}>
          <div>
            <span className="img">
              <img src={Wallet} alt="" /> {balance}
            </span>
            <span>Token Balance</span>
          </div>
          <div>
            <span className="img">
              <img src={Star} alt="" /> 256
            </span>
            <span>Winnings Balance</span>
          </div>
          <div onClick={handleClickOpen} className="button">
            <img src={PlusIcon} alt="" />
            <span>Buy Tokens</span>
          </div>
        </div>
        <div className={classes.bottom}>
          <div className={classes.header}>
            <span>My Account Details</span>
          </div>

          <div className={classes.details}>
            <div className={classes.left}>
              <div className={classes.input}>
                <div className="label">
                  <input
                    placeholder="firstName"
                    value={firstName}
                    onChange={(ev) => setFirstName(ev.target.value)}
                  />
                </div>
                <div className="label">
                  <input
                    placeholder="lastName"
                    value={lastName}
                    onChange={(ev) => setLastName(ev.target.value)}
                  />
                </div>
              </div>
              <div className={classes.input}>
                <div className="label">
                  <input
                    placeholder="Email ID"
                    value={email}
                    onChange={(ev) => setEmail(ev.target.value)}
                  />
                </div>
                <div className="label">
                  <select
                    style={{ color: "white" }}
                    value={gender || ""}
                    name="gender"
                    id="gender"
                    onChange={(ev) => setGender(ev.target.value)}
                  >
                    <option style={{ color: "grey" }} disabled value="">
                      Select a gender
                    </option>
                    {["male", "female", "other"].map((v, i) => (
                      <option key={i} value={v}>
                        {v}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              <div className={classes.input}>
                <div className="label">
                  <input
                    value={moment(DOB).format("YYYY-MM-DD")}
                    onChange={(ev) => setDOB(moment(ev.target.value).format())}
                    placeholder="Date Of Birth"
                    type="date"
                  />
                </div>
              </div>
            </div>
            <div className={classes.right}>
              <img src={avatar || User} alt="" />
              <label htmlFor="avatar">
                <span>
                  <img
                    src={Camera}
                    style={{
                      width: "20px",
                      height: "20px",
                    }}
                    alt=""
                  />{" "}
                  Upload a photo
                </span>
              </label>
              <input
                type="file"
                accept=".png, .jpg, .jpeg"
                name="avatar"
                id="avatar"
                style={{ display: "none" }}
                onChange={handleImageUpload}
              />
            </div>
          </div>
        </div>
        <div className={classes.buttonContainer}>
          <Button onClick={handleUpdateClick}>Update</Button>
        </div>
      </div>

      <Dialog open={open} onClose={handleClose}>
        <DialogTitle
          color={theme.palette.warning.main}
          sx={{ textAlign: "center", fontSize: "20px" }}
        >
          Buy Tokens
        </DialogTitle>
        <DialogContent>
          <DialogContentText sx={{ fontSize: "18px", marginBottom: "10px" }}>
            Please fill in amount of tokens you wish to buy.
          </DialogContentText>
          <FormControl fullWidth>
            <InputLabel
              style={{ fontSize: "16px" }}
              htmlFor="outlined-adornment-amount"
            >
              Amount
            </InputLabel>
            <OutlinedInput
              id="outlined-adornment-amount"
              value={amount}
              style={{ fontSize: "14px" }}
              type="number"
              onChange={onAmmountChange}
              startAdornment={
                <InputAdornment position="start">
                  <img src={IKC} height={20} width={20} alt="ikc" />
                </InputAdornment>
              }
              label="Amount"
            />
          </FormControl>
          {/* <TextField
            autoFocus
            // margin="dense"
            id="amount"
            // label="Enter Amount"
            startAdornment={<InputAdornment position="start">$</InputAdornment>}
            type="number"
            color="warning"
            fullWidth
            variant="outlined"
            sx={{ fontSize: '18px' }}
            value={amount}
            onChange={(ev) => setAmount(ev.target.value)}
          /> */}
        </DialogContent>
        <DialogActions sx={{ alignItems: "center", justifyContent: "center" }}>
          <Button size="large" color="warning" onClick={handleClose}>
            Cancel
          </Button>
          <LoadingButton
            size="large"
            loading={purchaseLoading}
            onClick={handleBalanceAdd}
            loadingIndicator="Loading..."
            variant="contained"
            color="warning"
          >
            Continue to Buy
          </LoadingButton>
        </DialogActions>
      </Dialog>
    </>
  );
};

export default AccountDetails;
