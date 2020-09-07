import React from 'react';
import classes from './Input.module.css';

const Input = (props) => {
  return (
    <div className={classes.Input}>
      <label>{props.label}</label>
      <input {...props} />
    </div>
  );
};

export default Input;
