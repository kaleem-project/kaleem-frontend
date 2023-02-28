import React from 'react';
import classes from './SettingsList.css';
import Person from '../Person/Person';
import Account from '../../components/UI/account/Account';
import SettingElement from './SettingElement/SettingElement';

import Settings from '../../assets/Svg/Settings';
import People from '../../assets/Svg/People';
import Loc from '../../assets/Svg/Loc';
import User from '../../assets/Svg/User';
import Switch from '../../assets/Svg/Switch';
import Out from '../../assets/Svg/Out';

import LocSolid from '../../assets/SvgSolid/Loc';
import UserSolid from '../../assets/SvgSolid/User';
import SettingsSolid from '../../assets/SvgSolid/Settings';
import PeopleSolid from '../../assets/SvgSolid/People';

function SettingsList(props) {
  const {friends, onMouseOver, onMouseLeave, settingClicked, settingName} =
    props;

  console.log(settingName);
  const SettingsList = [
    {
      name: 'Meeting',
      icon: <People />,
      solid: <PeopleSolid />,
    },
    {
      name: 'My Profile',
      icon: <User />,
      solid: <UserSolid />,
    },
    {
      name: 'Settings',
      icon: <Settings />,
      solid: <SettingsSolid />,
    },
    {
      name: 'Work loation & Status',
      icon: <Loc />,
      solid: <LocSolid />,
    },
    {
      name: 'Switch Account',
      icon: <Switch />,
      solid: <Switch color="#fff" />,
    },
    {
      name: 'Logout',
      icon: <Out />,
      solid: <Out color="#f03e3e" />,
    },
  ];

  const SettingsJSX = SettingsList.map((setting, index) => (
    <SettingElement
      clicked={settingClicked}
      clickedName={settingName}
      name={setting.name}
      icon={setting.icon}
      solid={setting.solid}
      key={index}
    />
  ));

  return (
    <div
      className={classes.section}
      style={{
        transform: props.appear ? 'translateX(0)' : 'translateX(-100vh)',
      }}
    >
      <Account arrowClicked={props.toggle} />
      {SettingsJSX}
    </div>
  );
}

export default SettingsList;
