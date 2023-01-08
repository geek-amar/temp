import React from "react";
import Balls from "assets/images/ball.svg";

const Ball = ({ top, left, right, bottom, height, width, margin }) => {
  return (
    <img
      src={Balls}
      alt=""
      width={width}
      height={height}
      style={{
        zIndex: 1000,
        position: "absolute",
        top: top,
        left: left,
        right: right,
        bottom: bottom,
        margin: margin,
      }}
      className="balls"
    />
  );
};

export default Ball;
