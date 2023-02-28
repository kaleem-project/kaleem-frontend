import React from 'react';
import classes from './Meeting.css';
function Meeting(props) {
  return (
    <a className={classes.main} href={props.href} target="_blank">
      <div className={classes.meeting}>
        <h3 className={classes.header}>{props.title}</h3>
        <img
          className={classes.createImg}
          src={props.image}
          alt="Create Meeting"
          style={{transform: props.translate}}
        />
        {props.icon}
        <div className={classes.back}>
          <p>{props.title}</p>
        </div>
      </div>
    </a>
  );
}

export default Meeting;
