import React, { Component } from 'react';
import classes from './Order.module.css';

class Order extends Component {
  render() {
    return (
      <div className={classes.Order}>
        <p>Ingredients: No Ingredients</p>
        <p>
          Total Price: <strong>A LOT</strong>
        </p>
      </div>
    );
  }
}

export default Order;
