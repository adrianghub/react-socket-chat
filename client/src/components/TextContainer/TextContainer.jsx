import React from 'react';

import onlineIcon from '../../images/onlineIcon.png'
import classes from './TextContainer.module.css'

const TextContainer = ({ users }) => (
  <div className={classes.TextContainer}>
    {users ? (
      <div>
        <h1>Online chatters: </h1>
        <div className={classes.ActiveContainer}>
          <h2>
            {users.map(({ name }, id) => (
              <div key={id} className={classes.ActiveItem}>
                {name}
                <img src={onlineIcon} alt=""></img>
              </div>
            ))}
          </h2>
        </div>
      </div>
    )
    : null
  }
  </div>
)

export default TextContainer;