import React from 'react';
import classes from './MeetingControls.css';
import Chat from '../../assets/Svg/Chat';
import Share from '../../assets/Svg/Share';
import Reactions from '../../assets/Svg/Reactions';
import Participants from '../../assets/Svg/Participants';

import MeetingControl from './MeetingControl/MeetingControl';
function MeetingControls(props) {
  const style = {
    stroke: '#7950f2',
    color: '#7950f2',
    fill: '#7950f2',
    width: '3rem',
    height: '3rem',
  };

  const controls = [
    {
      text: 'Participants',
      icon: <Participants style={style} />,
      clicked: props.toggleParticipant,
    },
    {
      text: 'Chat',
      icon: <Chat style={style} />,
      clicked: props.toggleChat,
    },
    {text: 'Share', icon: <Share />},
    {
      text: 'Reactions',
      icon: (
        <Reactions
          style={{
            stroke: '#e5dbff',
            fill: '#7950f2',
            width: '3.4rem',
            height: '3.4rem',
          }}
        />
      ),
    },
  ];

  const ViewControls = controls.map((control) => (
    <MeetingControl
      text={control.text}
      icon={control.icon}
      clicked={control.clicked}
    />
  ));

  return (
    <div
      className={
        props.toggleControls ? classes.controls : classes.controlsToggle
      }
    >
      {ViewControls}
    </div>
  );
}

export default MeetingControls;
