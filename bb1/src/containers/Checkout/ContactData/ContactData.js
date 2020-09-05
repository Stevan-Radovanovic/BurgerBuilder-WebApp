import React, { Component } from 'react';
import classes from './ContactData.module.css';

class ContactData extends Component {
  render() {
    return (
      <div className={classes.ContactData}>
        <h4>Enter your data</h4>
        <form>
          <input type="text" name="name" placeholder="Your Name" />
          <input type="email" name="email" placeholder="Your Email" />
          <input type="text" name="street" placeholder="Your Street" />
          <input type="text" name="city" placeholder="Your City" />
          <button>Order now!</button>
        </form>
      </div>
    );
  }
}

export default ContactData;
