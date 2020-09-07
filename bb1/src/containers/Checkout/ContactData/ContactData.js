import React, { Component } from 'react';
import classes from './ContactData.module.css';
import axios from '../../../axios/axios-orders';
import Spinner from '../../../components/UI/Spinner/Spinner';
import { withRouter } from 'react-router-dom';
import Input from '../../../components/UI/Input/Input';

class ContactData extends Component {
  state = {
    orderForm: {
      name: {
        elementType: 'input',
        elementConfig: {
          type: 'text',
          label: 'Your Name: ',
          placeholder: 'Enter here...',
        },
        value: '',
      },
      email: {
        elementType: 'input',
        elementConfig: {
          type: 'email',
          label: 'Your E-mail: ',
          placeholder: 'Enter here...',
        },
        value: '',
      },
      city: {
        elementType: 'input',
        elementConfig: {
          type: 'text',
          label: 'Your City: ',
          placeholder: 'Enter here...',
        },
        value: '',
      },
      street: {
        elementType: 'input',
        elementConfig: {
          type: 'text',
          label: 'Your Street: ',
          placeholder: 'Enter here...',
        },
        value: '',
      },
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
    const formArray = [];
    for (const key in this.state.orderForm) {
      formArray.push({ key: key, config: this.state.orderForm[key] });
    }

    let form = (
      <form>
        {formArray.map((input) => {
          return (
            <Input
              elementConfig={input.config.elementConfig}
              key={input.key}
              value={input.config.value}
            />
          );
        })}
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
