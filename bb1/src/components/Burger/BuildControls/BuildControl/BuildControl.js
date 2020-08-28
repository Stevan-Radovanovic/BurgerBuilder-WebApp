import React from 'react';
import classes from './BuildControl.module.css';
const BuildControl = (props) => {
  return (
    <div className={classes.BuildControl}>
      <div className={classes.label}>{props.label}</div>
      <button onClick={props.deleteIngredientHandler}>-</button>
      <button onClick={props.addIngredientHandler}>+</button>
    </div>
  );
};

export default BuildControl;
