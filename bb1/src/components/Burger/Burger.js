import React from 'react';
import classes from './Burger.module.css';
import Ingredient from './Ingredient/Ingredient';

const Burger = (props) => {
  return (
    <div className={classes.Burger}>
      <Ingredient type="bread-top" />
      <Ingredient type="meat" />
      <Ingredient type="cheese" />
      <Ingredient type="bread-bottom" />
    </div>
  );
};

export default Burger;
