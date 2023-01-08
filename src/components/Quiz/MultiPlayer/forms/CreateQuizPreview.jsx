import { Share } from "@material-ui/icons";
import CopyIcon from "@mui/icons-material/CopyAllOutlined";
import { Box, Button, Grid } from "@mui/material";
import ShareDialog from "common/ShareDialog/ShareDialog";
import moment from "moment";
import { useState } from "react";
import { useHistory } from "react-router";
import { toast } from "react-toastify";
import { useStyle } from "./CreateQuizForm.style";

const CreateQuizPreview = ({
  setActiveStep,
  title,
  poolAmount,
  startDate,
  endDate,
  handleCreateQuiz,
  createdQuiz,
}) => {
  const classes = useStyle();
  const history = useHistory();
  const [shareDialogOpen, setShareDialogOpen] = useState(false);

  return (
    <>
      <Grid container className={classes.container} direction="row">
        <Grid item xs={12} sm={5} className={classes.leftBox}>
          <div className={classes.bottom}>
            <div className={classes.header}>
              <span>My Quiz Preview</span>
            </div>
            <div className={classes.header2}>
              <span>Quiz Details</span>
            </div>
            <div className={classes.subheader}>
              <span>Title: {title}</span>
            </div>
            <div className={classes.subheader}>
              <span>
                Start Date: {moment(startDate).format("DD-MM-YY hh:mm A")}
              </span>
            </div>
            <div className={classes.subheader}>
              <span>
                End Date: {moment(endDate).format("DD-MM-YY hh:mm A")}
              </span>
            </div>
            <div className={classes.subheader}>
              <span>Entry Fee: {poolAmount}</span>
            </div>

            <div className={classes.header2}>
              <span>Prize Distribution</span>
            </div>
            <div className={classes.subheader}>
              <span>1st Prize: {poolAmount * (50 / 100)}</span>
            </div>
            <div className={classes.subheader}>
              <span>2nd Prize: {poolAmount * (20 / 100)}</span>
            </div>
            <div className={classes.subheader}>
              <span>3rd Prize: {poolAmount * (10 / 100)}</span>
            </div>
          </div>
        </Grid>

        {/* <div className={classes.details}>
          <div className={classes.left}>
            <div className={classes.right}>
              <img src={avatar || User} alt="" />
              <label for="avatar">
                <span>
                  <img
                    src={Camera}
                    style={{
                      width: '20px',
                      height: '20px',
                    }}
                    alt=""
                  />{' '}
                  Upload a photo
                </span>
              </label>
              <input
                type="file"
                accept=".png, .jpg, .jpeg"
                name="avatar"
                id="avatar"
                style={{ display: 'none' }}
                onChange={handleImageUpload}
              />
            </div> 
          </div>
        </div>*/}

        <Grid item xs={12} sm={5}>
          <div className={classes.rightBox}>
            {createdQuiz ? (
              <Box
                flexDirection="column"
                justifyContent="center"
                alignItems="center"
                textAlign="center"
                display="flex"
                gap={2}
              >
                <span
                  style={{
                    textAlign: "center",
                    fontSize: "18px",
                    color: "#fff",
                    margin: "2rem 0",
                  }}
                >
                  Invite Your Friends
                </span>
                <div
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    flexWrap: "nowrap",
                  }}
                >
                  <div
                    style={{
                      position: "relative",
                      display: "flex",
                      width: "auto",
                      // maxWidth: "300px",
                      // minWidth: "100%",
                    }}
                  >
                    <input
                      value={`${window.location.origin}/#/multiplayer/join/${createdQuiz.code}`}
                      id="invite"
                      type="text"
                      readonly=""
                      style={{
                        flex: "1 1 auto",
                        height: "32px",
                        border: "1px solid #1b1b1b",
                        padding: "0 10px",
                        borderRadius: "2px 0 0 2px",
                        lineHeight: "32px",
                        textAlign: "center",
                        outline: "none",
                        background: "#0f0f0f",
                        color: "#fff",
                        userSelect: "all",
                      }}
                    />
                  </div>
                  <button
                    onClick={() => {
                      navigator.clipboard.writeText(
                        `${window.location.origin}/#/multiplayer/join/${createdQuiz.code}`
                      );
                      toast.success("Copied to clipboard");
                    }}
                    style={{
                      padding: "6px 12px",
                      marginBottom: 0,
                      fontSize: "14px",
                      fontWeight: 400,
                      lineHeight: 1.42857143,
                      textAlign: "center",
                      whiteSpace: "nowrap",
                      verticalAlign: "middle",
                      border: "1px solid transparent",
                      flex: "0 0 auto",
                      height: "32px",
                      borderLeft: 0,
                      borderRadius: "0 2px 2px 0",
                      background:
                        "linear-gradient(92.86deg, #E1A200 0%, #FF5C00 100%)",
                      color: "#000",
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                      gap: "4px",
                      cursor: "pointer",
                      zIndex: 1,
                    }}
                    id="inviteCopyButton"
                  >
                    <CopyIcon />
                    Copy Link
                  </button>
                </div>
                <div className={classes.buttonContainer}>
                  <Button onClick={() => setShareDialogOpen(true)}>
                    <Share /> &nbsp; Share
                  </Button>
                  <Button onClick={() => history.push({pathname:`/multiplayer`,state:{page:3}})}>
                    Continue
                  </Button>
                </div>
              </Box>
            ) : (
              <div className={classes.buttonContainer}>
                <Button onClick={() => setActiveStep(1)}>Prev</Button>
                <Button onClick={handleCreateQuiz}>Create</Button>
              </div>
            )}
          </div>
        </Grid>
      </Grid>
      <ShareDialog
        data={{
          url: `${window.location.origin}/#/multiplayer/join/${createdQuiz?.code}`,
        }}
        onClose={() => setShareDialogOpen(false)}
        open={shareDialogOpen}
      />
    </>
  );
};

export default CreateQuizPreview;
