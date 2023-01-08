import React from "react";
import { useStyle } from "./Participated.style";
import { Button } from "@mui/material";
import indianHistory from "assets/images/multiPlayerImage.svg";

const Participated = ({ setResult, data: item, categories }) => {
  const classes = useStyle();
  return (
    <div className={classes.card}>
      <div className={classes.header}>
        <img
          src={categories?.[item.categoryId]?.icon ?? indianHistory}
          width={80}
          style={{ marginHeight: "100%" }}
          alt="images"
        />
        <span>{item.title || "Header"}</span>
      </div>
      <div className={classes.footer}>
        <Button
          onClick={() => setResult.push("/multiplayer/leaderboard/" + item._id)}
        >
          Results
        </Button>
      </div>
    </div>
  );
};

export default Participated;
