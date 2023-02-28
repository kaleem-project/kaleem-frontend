import React from 'react';
import classes from './ProfileImg.css';

function ProfileImg(props) {
  console.log(props.path);
  return (
    <img
      className={classes.profileImg}
      src={require(`../../../assets/ProfileImgs/img.jpg`)}
      alt="Profile Image"
    />
  );
}

export default ProfileImg;
