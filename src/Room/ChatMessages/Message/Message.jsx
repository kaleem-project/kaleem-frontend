import React from 'react';
import classes from './Message.css';

function Message(props) {
  let display = (
    <div className={classes.noImg}>
      <span>{props.fname.charAt(0) + props.lname.charAt(0)}</span>
    </div>
  );
  if (props.path !== undefined) {
    display = (
      <img src={props.path} className={classes.profileImg} alt="Profile" />
    );
  }
  return (
    <div className={classes.Message}>
      {display}
      <div className={classes.messageText}>
        <span className={classes.name}>{props.fname + ' ' + props.lname}</span>
        <span className={classes.text}>{props.message}</span>
      </div>
    </div>
  );
}

export default Message;
