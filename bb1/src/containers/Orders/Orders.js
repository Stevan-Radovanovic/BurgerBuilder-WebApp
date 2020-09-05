import React, { Component } from 'react';
import Order from '../../components/Order/Order';
import axios from '../../axios/axios-orders';

class Orders extends Component {
  state = {
    orders: [],
  };

  async componentDidMount() {
    try {
      const result = await axios.get('/orders');
      console.log(result.data.orders);
      this.setState({ orders: result.data.orders });
    } catch (err) {
      console.log(err);
    }
  }

  render() {
    const transformedOrders = this.state.orders.map((order) => {
      return <Order key={order.id} order={order} />;
    });

    return <div>{transformedOrders}</div>;
  }
}

export default Orders;
