import React, { Component } from 'react';
import classes from './ContactData.module.css';
import axios from '../../../axios/axios-orders';
import Spinner from '../../../components/UI/Spinner/Spinner';
import { withRouter } from 'react-router-dom';

class ContactData extends Component {
  state = {
    contact: {
      name: '',
      email: '',
      city: '',
      street: '',
    },
    loading: false,
  };

  orderHandler = async (event) => {
    event.preventDefault();

    this.setState({ loading: true });
    const order = {
      saladCount: this.props.ingredients['salad'],
      meatCount: this.props.ingredients['meat'],
      baconCount: this.props.ingredients['bacon'],
      cheeseCount: this.props.ingredients['cheese'],
      price: this.props.price.toFixed(2),
    };
    try {
      const result = await axios.post('/orders', order);
      console.log(result);
    } catch (err) {
      console.log(err);
    }
    this.setState({ loading: false });
    this.props.history.push('/burger');
  };

  render() {
    let form = (
      <form>
        <input type="text" name="name" placeholder="Your Name" />
        <input type="email" name="email" placeholder="Your Email" />
        <input type="text" name="street" placeholder="Your Street" />
        <input type="text" name="city" placeholder="Your City" />
        <button onClick={this.orderHandler}>Order now!</button>
      </form>
    );

    if (this.state.loading === true) {
      form = <Spinner />;
    }

    return (
      <div className={classes.ContactData}>
        <h4>Enter your data</h4>
        {form}
      </div>
    );
  }
}

export default withRouter(ContactData);
