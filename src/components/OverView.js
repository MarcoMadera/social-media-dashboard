import React from "react";
import MiniCard from "./MiniCard";
import "./css/OverView.css";
import facebookIcon from "../images/icon-facebook.svg";
import twitterIcon from "../images/icon-twitter.svg";
import youtubeIcon from "../images/icon-youtube.svg";
import instagramIcon from "../images/icon-instagram.svg";

let OverView = () => {
  return (
    <div className="overView">
      <div className="overView__content">
        <h1 className="overView__title">Overview - Today</h1>
      </div>
      <MiniCard
        topic="Page Views"
        value={87}
        socialIcon={facebookIcon}
        percent={3}
      />
      <MiniCard
        topic="Likes"
        value={52}
        socialIcon={facebookIcon}
        percent={-2}
      />
      <MiniCard
        topic="Likes"
        value={5462}
        socialIcon={instagramIcon}
        percent={2257}
      />
      <MiniCard
        topic="Profile Views"
        value={52000}
        socialIcon={instagramIcon}
        percent={1375}
      />
      <MiniCard
        topic="Retweets"
        value={117}
        socialIcon={twitterIcon}
        percent={303}
      />
      <MiniCard
        topic="Likes"
        value={507}
        socialIcon={twitterIcon}
        percent={553}
      />
      <MiniCard
        topic="Likes"
        value={107}
        socialIcon={youtubeIcon}
        percent={-19}
      />
      <MiniCard
        topic="Total Views"
        value={1407}
        socialIcon={youtubeIcon}
        percent={-12}
      />
    </div>
  );
};

export default OverView;
