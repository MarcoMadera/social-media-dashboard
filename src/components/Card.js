import React from "react";
import "./css/Card.css";
import upArrow from "../images/icon-up.svg";
import downArrow from "../images/icon-down.svg";

const Card = (props) => {
  let arrow, arrowtag;
  if (props.followersToday > 0) {
    arrow = upArrow;
    arrowtag = "up";
  } else {
    arrow = downArrow;
    arrowtag = "down";
  }
  return (
    <div className={`card ${props.alt}`}>
      <div className="card-cont">
        <div className="card-content">
          <div className="card-social">
            <img src={props.icon} alt={props.alt} />
            <span>&nbsp;&nbsp;&nbsp;</span>
            <p> {props.user}</p>
          </div>
          <h1 className="card-followers-count">{props.followers}</h1>
          <p className="card-followers">FOLLOWERS</p>
          <div className={`card-followers-today ${arrowtag}`}>
            <img src={arrow} alt="arrow" />
            <span>&nbsp;</span>
            <p>{Math.abs(props.followersToday)} Today</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
