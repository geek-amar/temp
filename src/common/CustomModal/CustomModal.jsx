import { Box, Card, Modal } from "@mui/material";
import HeadingTypography from "common/HeadingTypography";
import React from "react";
import "./CustomModal.css";

//! pass title, body, footer and [open and onClose eventHandler] props to Modal
const CustomModal = ({ open, onClose, title, body, footer }) => (
  <Modal open={open} onClose={onClose} sx={{ zIndex: "999999" }}>
    <Card
      sx={{
        position: "absolute",
        top: "50%",
        left: "50%",
        transform: "translate(-50%, -50%)",
        p: 3,
        backgroundColor: "transparent",
        border: "none",
        outline: "none",
      }}
      elevation={0}
    >
      <div className="registerContainer">
        <div className="registerWrapper">
          <button className="cancelRegister" onClick={onClose}>
            <strong>X</strong>
          </button>
          <HeadingTypography>{title}</HeadingTypography>
          <Box p={2} pt={0}>
            <Card sx={{ width: "100%" }} elevation={0}>
              {body}
            </Card>
          </Box>

          {footer}
        </div>
      </div>
    </Card>
  </Modal>
);

export default CustomModal;
