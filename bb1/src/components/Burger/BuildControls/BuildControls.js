import React from 'react';
import classes from './BuildControls.module.css';
import BuildControl from './BuildControl/BuildControl';

const controls = [
  { label: 'Salad', type: 'salad' },
  { label: 'Meat', type: 'meat' },
  { label: 'Cheese', type: 'cheese' },
  { label: 'Bacon', type: 'bacon' },
];

const BuildControls = (props) => {
  const renderingControls = controls.map((control) => {
    return (
      <BuildControl
        addIngredientHandler={props.addIngredientHandler.bind(
          this,
          control.type
        )}
        deleteIngredientHandler={props.deleteIngredientHandler.bind(
          this,
          control.type
        )}
        label={control.label}
        key={control.type}
      />
    );
  });

  return (
    <div className={classes.BuildControls}>
      <p className={classes.Price}>Total Price: {props.price.toFixed(2)}$</p>
      {renderingControls}
      <button disabled={!props.disabledOrder} className={classes.OrderButton}>
        ORDER NOW
      </button>
    </div>
  );
};

export default BuildControls;
