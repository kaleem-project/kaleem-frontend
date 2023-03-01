import React from 'react';
import classes from './SignInput.css';
import Auxiliary from '../../components/Auxiliary/Auxiliary';
function SignInput(props) {
  const check = props.checkMethod(props.id, props.emptyIndex);
  return (
    <Auxiliary>
      <div className={classes.labelText}>{props.label}</div>
      <div className={classes.flexErrorBig}>
        <input
          type="text"
          className={check ? classes.inputError : classes.inputName}
          onChange={(e) => props.setInputValue(e, props.id)}
        />
        {check ? <i className="fa fa-warning"></i> : null}
        <div className={classes.errorMsg}>
          {check ? props.errorField : null}
        </div>
      </div>
    </Auxiliary>
  );
}

export default SignInput;
