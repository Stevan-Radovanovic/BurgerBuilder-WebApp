import React, { Component } from 'react';
import Burger from '../../components/Burger/Burger';
import BuildControls from '../../components/Burger/BuildControls/BuildControls';
import Modal from '../../components/Modal/Modal';
import OrderSummary from '../../components/Burger/OrderSummary/OrderSummary';

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
    price: 2.6,
    purchasable: true,
    modalActive: false,
  };

  addIngredientHandler = (type) => {
    const count = this.state.ingredients[type];
    const updatedCount = count + 1;
    const newIngredients = {
      ...this.state.ingredients,
    };
    newIngredients[type] = updatedCount;
    this.setState({ ingredients: newIngredients });
    this.updatePurchasable(newIngredients);

    let newPrice = this.state.price + INGREDIENT_PRICES[type];
    this.setState({ price: newPrice });
  };

  modalHandler = () => {
    const modal = this.state.modalActive;
    console.log(modal);
    this.setState({ modalActive: !modal });
  };

  updatePurchasable(newIngredients) {
    const isItForPurchase =
      newIngredients['bacon'] +
      newIngredients['meat'] +
      newIngredients['salad'] +
      newIngredients['cheese'];
    this.setState({ purchasable: isItForPurchase > 0 });
  }

  deleteIngredientHandler = (type) => {
    const count = this.state.ingredients[type];
    if (count === 0) return;
    const updatedCount = count - 1;

    const newIngredients = {
      ...this.state.ingredients,
    };
    newIngredients[type] = updatedCount;
    this.setState({ ingredients: newIngredients });
    this.updatePurchasable(newIngredients);

    let newPrice = this.state.price - INGREDIENT_PRICES[type];
    this.setState({ price: newPrice });
  };

  render() {
    return (
      <React.Fragment>
        {this.state.modalActive ? (
          <Modal modalHandler={this.modalHandler}>
            <OrderSummary
              ingredients={this.state.ingredients}
              price={this.state.price}
              click={this.modalHandler}
            />
          </Modal>
        ) : null}
        <Burger ingredients={this.state.ingredients} />
        <BuildControls
          addIngredientHandler={this.addIngredientHandler}
          deleteIngredientHandler={this.deleteIngredientHandler}
          price={this.state.price}
          disabledOrder={this.state.purchasable}
          modal={this.modalHandler}
        />
      </React.Fragment>
    );
  }
}

export default BurgerBuilder;
