import React from 'react';

const OrderSummary = (props) => {
  const ingredients = Object.keys(props.ingredients).map((key) => (
    <li key={key}>
      <span style={{ textTransform: 'capitalize' }}>{key}</span>:
      {' ' + props.ingredients[key]}
    </li>
  ));

  return (
    <React.Fragment>
      <h2>Order ready!</h2>
      <p>Get yo' burger here!</p>
      <ul>{ingredients}</ul>
      <p>Proceed to Checkout?</p>
    </React.Fragment>
  );
};

export default OrderSummary;
