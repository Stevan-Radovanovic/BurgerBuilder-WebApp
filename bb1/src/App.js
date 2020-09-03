import React, { Component } from 'react';
import Layout from './containers/Layout/Layout';
import BurgerBuilder from './containers/BurgerBuilder/BurgerBuilder';
import Checkout from './containers/Checkout/Checkout';
import {
  Switch,
  Route,
  Redirect,
} from 'react-router-dom/cjs/react-router-dom.min';

class App extends Component {
  render() {
    return (
      <div>
        <Layout>
          <Switch>
            <Route path="/burger" component={BurgerBuilder} />
            <Route path="/checkout" component={Checkout} />
            <Redirect to="/burger" from="/" exact />
          </Switch>
        </Layout>
      </div>
    );
  }
}

export default App;
