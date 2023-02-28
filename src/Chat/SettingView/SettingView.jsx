import React from 'react';
import classes from './SettingView.css';
import Meeting from './Meeting/Meeting';
import createImg from '../../assets/Images/createImg.svg';
import shedule from '../../assets/Images/shedule.svg';
import join from '../../assets/Images/join.svg';

import Join from '../../assets/Svg/Join';
import Create from '../../assets/Svg/Create';
import Clock from '../../assets/Svg/Clock';

function SettingView(props) {
  return (
    <div
      className={classes.container}
      style={{
        transform: props.toggle ? 'translateX(0)' : 'translateX(-310px)',
        transition: 'all 0.4s',
      }}
    >
      <div className={classes.MeetingRow}>
        <Meeting
          image={createImg}
          title="New Meeting"
          icon={<Create />}
          href="/room"
        />
        <Meeting
          image={join}
          translate="translateY(-64.5%)"
          title="Join Meeting"
          icon={<Join />}
        />
      </div>
      <Meeting image={shedule} title="Sheduled Meeting" icon={<Clock />} />
    </div>
  );
}

export default SettingView;
