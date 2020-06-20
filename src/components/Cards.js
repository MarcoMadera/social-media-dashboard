import React from "react";
import Card from "./Card";
import facebookIcon from "../images/icon-facebook.svg";
import twitterIcon from "../images/icon-twitter.svg";
import instagramIcon from "../images/icon-instagram.svg";
import youtubeIcon from "../images/icon-youtube.svg";
import "./css/Cards.css";

let Cards = () => {
  return (
    <div className="content">
      <Card
        icon={facebookIcon}
        alt="facebookIcon"
        user="@marco.mad.lop"
        followers={15}
        followersToday={12}
      />
      <Card
        icon={twitterIcon}
        alt="twitterIcon"
        user="madera_marco"
        followers={23}
        followersToday={-14}
      />
      <Card
        icon={instagramIcon}
        alt="instagramIcon"
        user="marco.mad.lop"
        followers={1432}
        followersToday={14}
      />
      <Card
        icon={youtubeIcon}
        alt="youtubeIcon"
        user="marcomadera"
        followers={23}
        followersToday={14}
      />
    </div>
  );
};

export default Cards;
