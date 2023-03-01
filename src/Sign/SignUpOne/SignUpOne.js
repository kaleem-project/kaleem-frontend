import React from 'react';
import classes from './SignUpOne.css';
import SignInput from '../SignInput/SignInput';

function SignUpOne(props) {
  const {
    renderSignControler,
    setInput,
    renderErrorIcon,
    emptyField,
    startCheck,
    passLength,
    email,
  } = props;

  const validateEmail = () => {
    return String(email)
      .toLowerCase()
      .match(
        /^(([^&lt;&gt;()[\]\\.,;:\s@"]+(\.[^&lt;&gt;()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      );
  };

  if (validateEmail() === null && startCheck && email.length !== 0) {
    emptyField[3] = 'Enter valid email';
  } else if (email.length === 0 && startCheck) {
    emptyField[3] = 'Please enter email';
  } else {
    emptyField[3] = '';
  }

  if (passLength < 6 && startCheck && passLength !== 0) {
    emptyField[4] = 'Password less than 6 characters';
  } else if (passLength === 0 && startCheck) {
    emptyField[4] = 'Please enter password';
  } else {
    emptyField[4] = '';
  }

  // if (
  //   (phone.length < 11 || !isNumeric(phone)) &&
  //   startCheck &&
  //   phone.length !== 0
  // ) {
  //   emptyField[5] = 'Enter valid phone';
  // } else if (phone.length === 0 && startCheck) {
  //   emptyField[5] = 'Please enter phone';
  // } else {
  //   emptyField[5] = '';
  // }

  const InputChecker = (id, emptyFieldIndex) => {
    if (id === 'firstName' || id === 'lastName' || id === 'username') {
      return renderErrorIcon(id) === '';
    }
    if (id === 'password') {
      return (
        renderErrorIcon(id) === '' ||
        emptyField[emptyFieldIndex] !== '' ||
        (passLength < 6 && startCheck)
      );
    }

    if (id === 'email') {
      return (
        renderErrorIcon(id) === '' ||
        emptyField[emptyFieldIndex] !== '' ||
        (validateEmail() === null && startCheck)
      );
    }
  };

  const Fields = [
    {
      label: 'First Name',
      id: 'firstName',
    },
    {
      label: 'Sur Name',
      id: 'lastName',
    },
    {
      label: 'Username',
      id: 'username',
    },
    {
      label: 'Email',
      id: 'email',
    },
    {
      label: 'Password',
      id: 'password',
    },
  ];

  const renderFields = Fields.map((field, index) => {
    return (
      <SignInput
        key={field.id}
        id={field.id}
        label={field.label}
        checkMethod={InputChecker}
        emptyIndex={index}
        errorField={emptyField[index]}
        setInputValue={setInput}
      />
    );
  });

  return (
    <form className={props.signIn ? classes.formUp : classes.form}>
      <div className={classes.createText}>Create an account</div>
      <div className={classes.signUpText}>Sign up with email</div>
      <div className={`${classes.signInText} ${classes.sideFlex}`}>
        <div>Already have an account?</div>
        <a onClick={props.signInAppear} className={classes.signInButton}>
          Sign in
        </a>
      </div>

      {renderFields}

      <div className={classes.formButton}>
        <a
          href="#"
          className={classes.continue}
          onClick={(e) => renderSignControler(e, 'SignUpTwo')}
        >
          Sign up
        </a>
      </div>
    </form>
  );
}

export default SignUpOne;
