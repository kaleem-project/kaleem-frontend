import React from 'react';
import classes from './MeetingControl.css';

function MeetingControl(props) {
  let tooltipClass = 'tooltipText';
  if (props.text === 'Share') {
    tooltipClass = 'tooltipTextShare';
  }
  if (props.text === 'Reactions') {
    tooltipClass = 'tooltipTextRect';
  }
  return (
    <div className={classes.tooltip}>
      <span className={classes[tooltipClass]}>{props.text}</span>
      <div onClick={props.clicked}>{props.icon}</div>
    </div>
  );
}

export default MeetingControl;
