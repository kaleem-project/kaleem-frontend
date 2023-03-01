import React from 'react';
import classes from './SettingElement.css';
function SettingElement(props) {
  return (
    <div
      className={
        props.name === props.clickedName
          ? classes.elementClicked
          : classes.element
      }
      onClick={() => props.clicked(props.name)}
    >
      {props.name === props.clickedName && props.solid !== undefined
        ? props.solid
        : props.icon}
      <p
        className={
          props.name === props.clickedName ? classes.nameClicked : classes.name
        }
      >
        {props.name}
      </p>
    </div>
  );
}

export default SettingElement;
