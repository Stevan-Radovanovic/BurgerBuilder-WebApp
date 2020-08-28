import React from 'react';

const OrderSummary = (props) => {
  const ingredients = Object.keys(props.ingredients).map((key) => (
    <li>
      {key}: {props.ingredients[key]}
    </li>
  ));

  return (
    <React.Fragment>
      <h2>Order ready!</h2>
      <p>Get yo' burger here!</p>
      <ul>{ingredients}</ul>
    </React.Fragment>
  );
};

export default OrderSummary;
