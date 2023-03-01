import React from 'react';
import classes from './VideoMeeting.css';
import Person from './Person/Person';
import TopArrow from '../../assets/Svg/TopArrow';

function VideoMeeting(props) {
  const personsRender = props.persons.map((person, index) => (
    <Person
      key={index}
      id={index}
      fname={person.Fname}
      lname={person.Lname}
      profileImg={person.img}
      clicked={props.personClicked}
      effect={props.focusEffect}
    />
  ));
  return (
    <div
      className={
        props.participants ? classes.container : classes.containerHidden
      }
    >
      {personsRender}
      <TopArrow clicked={props.toggleParticipant} />
    </div>
  );
}

export default VideoMeeting;
