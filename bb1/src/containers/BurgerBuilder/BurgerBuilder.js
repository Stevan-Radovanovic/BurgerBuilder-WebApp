import React, { Component } from 'react';
import Burger from '../../components/Burger/Burger';
import BuildControls from '../../components/Burger/BuildControls/BuildControls';

const INGREDIENT_PRICES = {
  salad: 0.4,
  cheese: 0.5,
  bacon: 0.6,
  meat: 1.1,
};

class BurgerBuilder extends Component {
  state = {
    ingredients: {
      salad: 1,
      bacon: 1,
      cheese: 1,
      meat: 1,
    },
    price: 4,
  };

  addIngredientHandler = (type) => {
    const count = this.state.ingredients[type];
    const updatedCount = count + 1;
    const newIngredients = {
      ...this.state.ingredients,
    };
    newIngredients[type] = updatedCount;
    this.setState({ ingredients: newIngredients });

    let newPrice = this.price + INGREDIENT_PRICES[type];
    this.setState({ price: newPrice });
  };

  deleteIngredientHandler = (type) => {
    const count = this.state.ingredients[type];
    if (count === 0) return;
    const updatedCount = count - 1;

    const newIngredients = {
      ...this.state.ingredients,
    };
    newIngredients[type] = updatedCount;
    this.setState({ ingredients: newIngredients });

    let newPrice = this.price - INGREDIENT_PRICES[type];
    this.setState({ price: newPrice });
  };

  render() {
    return (
      <React.Fragment>
        <Burger ingredients={this.state.ingredients} />
        <BuildControls
          addIngredientHandler={this.addIngredientHandler}
          deleteIngredientHandler={this.deleteIngredientHandler}
        />
      </React.Fragment>
    );
  }
}

export default BurgerBuilder;
