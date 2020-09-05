import React, { Component } from 'react';
import CheckoutSummary from '../../components/Order/CheckoutSummary/CheckoutSummary';
import { withRouter } from 'react-router-dom';

class Checkout extends Component {
  state = {
    ingredients: {
      salad: 1,
      meat: 1,
      cheese: 1,
      bacon: 1,
    },
  };

  componentDidMount() {
    let query = this.props.location.search;
    query = query.substr(1);
    const querySplit = query.split('&');
    const ingredients = {};
    for (const i of querySplit) {
      const ing = i.split('=');
      ingredients[ing[0]] = +ing[1];
    }
    console.log(ingredients);
    this.setState({ ingredients: ingredients });
  }

  goBackHandler = () => {
    this.props.history.goBack();
  };

  continueHandler = () => {
    this.props.history.replace('/checkout/contact');
  };

  render() {
    return (
      <div>
        <CheckoutSummary
          ingredients={this.state.ingredients}
          click={this.goBackHandler}
          order={this.continueHandler}
        />
      </div>
    );
  }
}

export default withRouter(Checkout);
