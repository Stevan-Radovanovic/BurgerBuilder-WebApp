import React from 'react';
import classes from './Input.module.css';

const Input = (props) => {
  return (
    <div className={classes.Input}>
      <label>{props.elementConfig.label}</label>
      <input {...props.elementConfig} value={props.value} />
    </div>
  );
};

export default Input;
