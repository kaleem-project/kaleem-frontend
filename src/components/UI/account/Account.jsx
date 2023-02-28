import React from 'react';
import ProfileImg from '../ProfileImgDesign/ProfileImg';
import LeftArrow from '../../../assets/Svg/LeftArrow';
import classes from './Account.css';

function Account(props) {
  return (
    <div className={classes.account}>
      <ProfileImg path={'../../../assets/ProfileImgs/img.jpg'} />
      <div className={classes.box}>
        <div className={classes.name}>ِAhmed El-sharawy</div>
        <div className={classes.msg}>ahmed123mah@yahoo.com</div>
      </div>
      <LeftArrow clicked={props.arrowClicked} />
    </div>
  );
}

export default Account;
