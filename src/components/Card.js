import React from "react";
import "./Card.css";

// This is a wrapper component to apply some css style(a box shadow and rounded corners)
const Card = (props) => {
  const classes = "card " + props.className;
  return <div className={classes}>{props.children}</div>;
};

export default Card;
