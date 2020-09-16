import React from "react";
import SendIcon from '@material-ui/icons/Send';

import classes from "./Input.module.css";

const Input = ({ message, inputMessage, sendMessage }) => (
  <form className={classes.Form}>
    <input
      className={classes.Input}
      placeholder="Start writing a message..."
      value={message}
      onChange={(e) => inputMessage(e)}
      onKeyPress={(e) => (e.key === "Enter" ? sendMessage(e) : null)}
    />
    <button className={classes.SendButton} onClick={(e) => sendMessage(e)}>
      <SendIcon />
    </button>
  </form>
);

export default Input;
