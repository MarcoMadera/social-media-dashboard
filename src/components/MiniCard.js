import React from "react";
import arrowUp from "../images/icon-up.svg";
import arrowDown from "../images/icon-down.svg";
import "./css/MiniCard.css";

let MiniCard = (props) => {
  let arrow, socialtag;
  if (props.percent > 0) {
    socialtag = "up";
    arrow = arrowUp;
  } else {
    arrow = arrowDown;
    socialtag = "down";
  }
  return (
    <div className="minicard">
      <div className="minicard__content">
        <div className="minicard__cont">
          <div className="minicard__cont__left">
            <p className="minicard__cont__left__text">{props.topic}</p>
            <p className="minicard__cont__left__title">{props.value}</p>
          </div>
          <div className="minicard__cont__right">
            <div className="minicard__cont_right__socialIcon">
              <img src={props.socialIcon} alt="" />
            </div>
            <div className="minicard__cont_right__container">
              <div className={`minicard__cont_right__percent ${socialtag}`}>
                <img src={arrow} alt="Arrow" />
                <span>&nbsp;</span>
                <span>{Math.abs(props.percent)}%</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MiniCard;
