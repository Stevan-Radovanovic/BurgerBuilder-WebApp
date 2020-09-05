import React, { Component } from 'react';
import CheckoutSummary from '../../components/Order/CheckoutSummary/CheckoutSummary';
import { withRouter, Route } from 'react-router-dom';
import ContactData from './ContactData/ContactData';

class Checkout extends Component {
  state = {
    ingredients: {
      salad: 1,
      meat: 1,
      cheese: 1,
      bacon: 1,
    },
    price: 0,
  };

  componentDidMount() {
    let query = this.props.location.search;
    query = query.substr(1);
    const querySplit = query.split('&');
    const ingredients = {};
    let price = 0;
    for (const i of querySplit) {
      const ing = i.split('=');
      if (ing[0] === 'price') {
        price = +ing[1];
        continue;
      }
      ingredients[ing[0]] = +ing[1];
    }
    console.log(ingredients);
    this.setState({ ingredients: ingredients, price: price });
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
        <Route
          render={() => (
            <ContactData
              ingredients={this.state.ingredients}
              price={this.state.price}
            />
          )}
          path={this.props.match.path + '/contact'}
        />
      </div>
    );
  }
}

export default withRouter(Checkout);
