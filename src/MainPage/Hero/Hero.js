import React from 'react';
import Auxiliary from '../../components/Auxiliary/Auxiliary';
import classes from './Hero.css';
function Hero() {
  return (
    <Auxiliary>
      <header>
        <nav className={classes.container}>
          <div className={classes.logo}>
            <img src={require('../../assets/Logo/logo.svg')} />
            <div className={classes.kaleem}>KALEEM</div>
          </div>
          <div className={classes.main_nav}>
            <ul className={classes.main_nav_list}>
              <li>
                <a className={classes.main_nav_link} href="#">
                  Home
                </a>
              </li>
              <li>
                <a className={classes.main_nav_link} href="#">
                  Documentation
                </a>
              </li>
              <li>
                <a className={classes.main_nav_link} href="/chat">
                  Chat
                </a>
              </li>
              <li>
                <a className={classes.main_nav_link} href="#">
                  Features
                </a>
              </li>
              <li>
                <a
                  className={`${classes.main_nav_link} ${classes.nav_cta}`}
                  href="/sign"
                >
                  Sign up
                </a>
              </li>
            </ul>
          </div>
        </nav>

        <div className={classes.header_container}>
          <div className={classes.header_container_inner}>
            <h1>Text and video conversation app for deaf people</h1>
            <p>
              Being a deaf should not prevent you from making phone and video
              calls, Just do it and our app will take care of the rest
            </p>
            <a href="/sign" className={classes.btn}>
              Sign up now
            </a>
            <a href="/sign" className={`${classes.btn} ${classes.signIn}`}>
              Sign in
            </a>
          </div>
        </div>
      </header>
    </Auxiliary>
  );
}

export default Hero;
