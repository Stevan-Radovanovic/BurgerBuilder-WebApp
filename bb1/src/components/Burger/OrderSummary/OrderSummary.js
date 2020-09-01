import React from 'react';
import classes from './OrderSummary.module.css';

const OrderSummary = (props) => {
  const ingredients = Object.keys(props.ingredients).map((key) => (
    <li key={key}>
      <span style={{ textTransform: 'capitalize' }}>{key}</span>:
      {' ' + props.ingredients[key]}
    </li>
  ));

  return (
    <React.Fragment>
      <h2 className={classes.Centered}>Order ready!</h2>
      <p className={classes.Centered}>Get yo' burger here!</p>
      <ul>{ingredients}</ul>
      <p className={classes.Centered}>
        <strong>Total Price: {props.price.toFixed(2)}$</strong>
      </p>
      <p className={classes.Centered}>Proceed to Checkout?</p>
      <div className={classes.Centered}>
        <button className={classes.Cancel} onClick={props.click}>
          CANCEL
        </button>
        <button className={classes.Continue} onClick={props.order}>
          CONTINUE
        </button>
      </div>
    </React.Fragment>
  );
};

export default OrderSummary;
