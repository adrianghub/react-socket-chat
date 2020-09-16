import React from "react";

import classes from "./Message.module.css";

const Message = ({ message: { user, text }, name }) => {
  let isSentByCurrentUser = false;
  const trimmedName = name.trim().toLowerCase();

  if (user === trimmedName) {
    isSentByCurrentUser = true;
  }

  return isSentByCurrentUser ? (
    <div className={[classes.MessageContainer, classes.JustifyEnd].join(' ')}>
      <p className={[classes.SentText, classes.PaddingRight].join(' ')}>{trimmedName}</p>
      <div className={[classes.MessageBox, classes.BackgroundBlue].join(' ')}>
        <p className={[classes.MessageText, classes.ColorWhite].join(' ')}>{text}</p>
      </div>
    </div>
  ) : (
    <div className={[classes.MessageContainer, classes.JustifyStart].join(' ')}>
      <div className={[classes.MessageBox, classes.BackgroundLight].join(' ')}>
        <p className={[classes.MessageText, classes.ColorDark].join(' ')}>{text}</p>
      </div>
      <p className={[classes.SentText, classes.PaddingLeft].join(' ')}>{user}</p>
    </div>
  );
};

export default Message;
