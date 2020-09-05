import React from 'react';
import classes from './Order.module.css';

const Order = (props) => {
  return (
    <div className={classes.Order}>
      <h4>Order no. {props.order.id}</h4>
      <p>Salad Count: {props.order.saladCount}</p>
      <p>Meat Count: {props.order.meatCount}</p>
      <p>Bacon Count: {props.order.baconCount}</p>
      <p>Cheese Count: {props.order.cheeseCount}</p>
      <p>
        Total Price: <strong>{props.order.price}</strong>
      </p>
    </div>
  );
};

export default Order;
