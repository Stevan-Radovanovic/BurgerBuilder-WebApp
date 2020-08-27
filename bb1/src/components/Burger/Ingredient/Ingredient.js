import React from "react";
import classes from "./Ingredient.module.css";
import PropTypes from "prop-types";

const Ingredient = (props) => {
  let ingredient = null;

  switch (props.type) {
    case ("bred-bottom"):
      ingredient = <div className={classes.BreadBottom}></div>;
    case ("bred-top"):
      ingredient = <div className={classes.BreadTop}></div>;
    case ("cheese"):
      ingredient = <div className={classes.Cheese}></div>;
    case ("bacon"):
      ingredient = <div className={classes.Bacon}></div>;
    case ("meat"):
      ingredient = <div className={classes.Meat}></div>;
    case ("salad"):
      ingredient = <div className={classes.Salad}></div>;
    default:
      ingredient = null;
  }

  return ingredient;
};

Ingredient.propTypes = {
  type: PropTypes.string.isRequired,
};

export default Ingredient;
