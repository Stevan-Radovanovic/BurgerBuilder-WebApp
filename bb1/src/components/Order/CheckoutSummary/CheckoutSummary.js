import React from 'react';
import classes from './CheckoutSummary.module.css';

import Burger from '../../Burger/Burger';

const CheckoutSummary = (props) => {
  return (
    <div className={classes.CheckoutSummary}>
      <h1>Here it is!</h1>
      <div style={{ width: '100%', height: '300px', margin: 'auto' }}>
        <Burger ingredients={props.ingredients} />
      </div>
      <button className={classes.Cancel} onClick={props.click}>
        CANCEL
      </button>
      <button className={classes.Continue} onClick={props.order}>
        CONTINUE
      </button>
    </div>
  );
};

export default CheckoutSummary;
