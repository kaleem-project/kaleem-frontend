import React from 'react';
import classes from './TempProfile.css';

function TempProfile(props) {
  return (
    <img className={classes.imgStyle} src={props.path} alt="Profile Image" />
  );
}

export default TempProfile;
