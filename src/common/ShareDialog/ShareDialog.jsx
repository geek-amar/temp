import { Facebook, Link, Twitter, WhatsApp } from "@material-ui/icons";
import { Box, ListItemButton, ListItemIcon } from "@mui/material";
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import PropTypes from "prop-types";
import { toast } from "react-toastify";

const platforms = [
  {
    name: "WhatsApp",
    url: "https://api.whatsapp.com/send?text=",
    icon: <WhatsApp style={{ fontSize: "18px" }} />,
  },
  {
    name: "Facebook",
    icon: <Facebook style={{ fontSize: "18px" }} />,
    url: "https://www.facebook.com/sharer/sharer.php?u=",
  },
  {
    name: "Twitter",
    icon: <Twitter style={{ fontSize: "18px" }} />,
    url: "https://twitter.com/intent/tweet?text=",
  },
];

function ShareDialog(props) {
  const { onClose, open } = props;

  const handleClose = () => {
    onClose();
  };

  const handleListItemClick = (value) => {
    onClose(value);
  };

  return (
    <Dialog onClose={handleClose} open={open} style={{ width: "100%" }}>
      <DialogTitle
        style={{
          textAlign: "center",
          width: "100%",
          background: "linear-gradient(92.86deg, #E1A200 0%, #FF5C00 100%)",
        }}
      >
        <span
          style={{
            fontSize: "16px",
          }}
        >
          Share to Platform
        </span>
      </DialogTitle>
      {/* <Card elevation={0}> */}
      <Box
        sx={{
          width: "100%",
          maxWidth: 360,
          bgcolor: "background.paper",
        }}
      >
        <nav aria-label="main mailbox folders">
          <List>
            {platforms.map((platform, index) => (
              <ListItem
                onClick={() =>
                  window.open(platform.url + encodeURIComponent(props.data.url))
                }
                key={index}
                style={{
                  fontSize: "18px",
                  textAlign: "center",
                  padding: "0px 2rem",
                }}
                disablePadding
              >
                <ListItemButton>
                  <ListItemIcon>{platform.icon}</ListItemIcon>
                  <span style={{ fontSize: "14px", fontWeight: "300" }}>
                    Share to {platform.name}
                  </span>
                </ListItemButton>
              </ListItem>
            ))}

            {props.copyLink && (
              <ListItem
                onClick={() => {
                  navigator.clipboard.writeText(props.data.url);
                  toast.success("Copied to Clipboard");
                }}
                style={{
                  fontSize: "18px",
                  textAlign: "center",
                  padding: "0px 2rem",
                }}
                disablePadding
              >
                <ListItemButton>
                  <ListItemIcon>
                    <Link />
                  </ListItemIcon>
                  <span style={{ fontSize: "14px", fontWeight: "300" }}>
                    Copy Link
                  </span>
                </ListItemButton>
              </ListItem>
            )}
          </List>
        </nav>
      </Box>
      {/* </Card> */}
    </Dialog>
  );
}

ShareDialog.propTypes = {
  onClose: PropTypes.func.isRequired,
  open: PropTypes.bool.isRequired,
};

export default ShareDialog;
