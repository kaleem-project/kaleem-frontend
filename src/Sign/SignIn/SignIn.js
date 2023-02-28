import React from 'react';
import classes from './SignIn.css';

function SignIn(props) {
  const {signIn, renderSignControler} = props;
  return (
    <form className={signIn ? classes.formUp : classes.form}>
      <div className={classes.createText}>Sign In</div>
      <div className={classes.signUpText}>Sign in with email</div>
      <div className={`${classes.signInText} ${classes.sideFlex}`}>
        <div>New user?</div>
        <a href="#" className={classes.signUpButton} onClick={props.disappear}>
          Create an account
        </a>
      </div>

      <div className={classes.labelText}>Email address</div>
      <input type="text" className={classes.input} />
      <div className={classes.labelText}>Password</div>
      <input type="password" className={classes.input} />

      <div className={classes.formButton}>
        <a href="#" className={classes.continue}>
          Sign in
        </a>
      </div>
    </form>
  );
}

export default SignIn;
