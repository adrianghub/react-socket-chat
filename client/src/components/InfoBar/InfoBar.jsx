import React from "react";

import onlineIcon from "../../images/onlineIcon.png";
import classes from "./InfoBar.module.css";

const InfoBar = ({ room }) => (
  <div className={classes.InfoBar}>
    <div className={classes.LeftInnerContainer}>
      <img
        src={onlineIcon}
        alt="Online presence icon"
        className={classes.OnlineIcon}
      />
      <h3>{room}</h3>
    </div>
    <div className={classes.RightInnerContainer}>
      <a href="/">CLOSE ICON</a>
    </div>
  </div>
);

export default InfoBar;
