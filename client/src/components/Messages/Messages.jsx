import React from "react";
import ScrollToBottom from 'react-scroll-to-bottom'
import Message from "./Message/Message";

import classes from "./Messages.module.css";

const Messages = ({messages, name}) => (
  <ScrollToBottom className={classes.Messages}>
    {messages.map((message, id) => <div key={id}><Message message={message} name={name}/></div>)}
  </ScrollToBottom>
);

export default Messages;
