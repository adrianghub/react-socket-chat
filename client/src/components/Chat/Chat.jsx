import React, { useState, useEffect } from "react";
import queryString from "query-string";
import io from "socket.io-client";

import classes from './Chat.module.css'
import InfoBar from "../InfoBar/InfoBar";
import Input from "../Input/Input";

let socket;

const Chat = ({ location }) => {
  const [name, setName] = useState("");
  const [room, setRoom] = useState("");
  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState([]);

  const ENDPOINT = "localhost:5000";

  useEffect(() => {
    const { name, room } = queryString.parse(location.search);

    socket = io(ENDPOINT);

    setName(name);
    setRoom(room);

    socket.emit("join", { name, room }, (error) => {
      if(error) {
        alert(error);
      }
    });

    return () => {
      socket.emit("disconnect");
      socket.off();
    };
  }, [ENDPOINT, location.search]);

  useEffect(() => {
    socket.on("message", (message) => {
      setMessages([...messages, message]);
    });
  }, [messages]);

  const handleInputMessage = (e) => {
    setMessage(e.target.value);
  };

  const handleSendMessage = (e) => {
    e.preventDefault();

    if (message) {
      socket.emit("messageByUser", message, () => setMessage(""));
    }
  };

  console.log(message, messages);

  return (
    <>
      <div className={classes.OuterContainer}>
        <div className={classes.Container}>
          <InfoBar room={room} />
          <Input 
            message={message}
            inputMessage={handleInputMessage} 
            sendMessage={handleSendMessage}
          />
        </div>
      </div>
    </>
  );
};

export default Chat;
