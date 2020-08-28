import React from 'react';
import classes from './Burger.module.css';
import Ingredient from './Ingredient/Ingredient';

const Burger = (props) => {
  let ingredients = Object.keys(props.ingredients).map((igKey) =>
    [...Array(props.ingredients[igKey])].map((_, i) => (
      <Ingredient key={igKey + i} type={igKey} />
    ))
  );

  const ingredientsLength = ingredients.reduce((arr, el) => arr.concat(el));
  console.log(ingredientsLength);
  if (ingredientsLength.length === 0) {
    ingredients = <p>Empty? You better add some ingredients</p>;
  }

  return (
    <div className={classes.Burger}>
      <Ingredient type="bread-top" />
      {ingredients}
      <Ingredient type="bread-bottom" />
    </div>
  );
};

export default Burger;
