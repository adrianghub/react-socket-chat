import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Button, Input } from "@material-ui/core";
import PlayCircleOutlineIcon from "@material-ui/icons/PlayCircleOutline";

import logoImage from "../../images/logo.png";
import classes from "./Join.module.css";

const Join = () => {
  const [name, setName] = useState("");
  const [room, setRoom] = useState("");

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handleRoomChange = (e) => {
    setRoom(e.target.value);
  };

  const handleJoinSubmit = (e) => {
    return !name || !room ? e.preventDefault() : null;
  };

  return (
    <>
      <div className={classes.Login}>
        <div className={classes.LoginContainer}>
          <img src={logoImage} alt="Logo describes author's creativity" />
          <h1>Join Room</h1>
          <div>
            <Input
              type="text"
              placeholder="Type chat username..."
              onChange={(e) => handleNameChange(e)}
              classes={{
                root: classes.InputJoin,
              }}
            />
          </div>
          <div>
            <Input
              type="text"
              placeholder="Type chat room..."
              onChange={(e) => handleRoomChange(e)}
              classes={{
                root: classes.InputJoin,
              }}
            />
          </div>
          <Link
            onClick={(e) => handleJoinSubmit(e)}
            to={`/chat?name=${name}&room=${room}`}
          >
            <Button
              fullWidth
              color="primary"
              variant="contained"
              classes={{
                root: classes.ButtonSubmit,
              }}
            >
              <PlayCircleOutlineIcon />
            </Button>
          </Link>
        </div>
      </div>
    </>
  );
};

export default Join;
