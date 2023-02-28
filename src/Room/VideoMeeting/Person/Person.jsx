import React from 'react';
import classes from './Person.css';
import TempProfile from '../../TempProfile/TempProfile';
import Auxiliary from '../../../components/Auxiliary/Auxiliary';

function Person(props) {
  let display = (
    <Auxiliary>
      <TempProfile path={props.profileImg} />
    </Auxiliary>
  );

  if (props.profileImg === undefined)
    display = (
      <div className={classes.noImg}>
        {props.fname.charAt(0) + props.lname.charAt(0)}
      </div>
    );

  return (
    <div
      className={
        props.id === props.effect
          ? classes.clickedPersonComponent
          : classes.personComponent
      }
      onClick={() => props.clicked(props.id)}
    >
      {display}
      <div>{props.fname + ' ' + props.lname}</div>
    </div>
  );
}

export default Person;
