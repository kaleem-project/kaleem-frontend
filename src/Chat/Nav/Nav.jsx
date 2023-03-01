import React from 'react';
import classes from './Nav.css';
import DrawerToggle from '../../components/UI/DrawerToggle/DrawerToggle';

function Nav(props) {
  return (
    <nav className={classes.nav}>
      <div className={classes.logo}>
        <DrawerToggle clicked={props.toggle} />
        <img
          src={require('../../assets/Logo/logo.svg')}
          className={classes.imgLogo}
          alt="Kaleem logo"
        />
        <div className={classes.kaleem}>KALEEM</div>
      </div>
      <div className={classes.navEnd}>
        <a className={classes.trash} href="/">
          Home
        </a>
      </div>
    </nav>
  );
}

export default Nav;
