import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { Button, Input } from '@material-ui/core';
import PlayCircleOutlineIcon from '@material-ui/icons/PlayCircleOutline';

import logoImage from './logo.png';
import classes from './Join.module.css';

const Join = () => {
  const [ name, setName ] = useState('')
  const [ room, setRoom ] = useState('')

  return (
    <>
      <div className={classes.Login}>
        <div className={classes.LoginContainer}>
          <img src={logoImage} alt="Logo describes author's creativity" />
          <h1>
            Join
          </h1>
          <div><Input type="text" placeholder="Name"/></div>
          <div><Input type="text" placeholder="Room"/></div>
          <Button color="primary" variant="contained"><PlayCircleOutlineIcon /></Button>
        </div>
      </div>
    </>
  );
};

export default Join