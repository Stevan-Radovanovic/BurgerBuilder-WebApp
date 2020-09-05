import React from 'react';
import classes from './Order.module.css';

const Order = (props) => {
  return (
    <div className={classes.Order}>
      <h4>Order no. {props.order.id}</h4>
      <p style={{ display: 'inline-block', margin: '4px 4px' }}>
        Ingredients:{' '}
      </p>
      <p className={classes.Ingredient}>Salad: {props.order.saladCount}</p>
      <p className={classes.Ingredient}>Meat: {props.order.meatCount}</p>
      <p className={classes.Ingredient}>Bacon: {props.order.baconCount}</p>
      <p className={classes.Ingredient}>Cheese: {props.order.cheeseCount}</p>
      <p>
        Total Price: <strong>{props.order.price}</strong>
      </p>
    </div>
  );
};

export default Order;
