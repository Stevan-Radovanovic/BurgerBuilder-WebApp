import React, { Component } from 'react';
import classes from './Layout.module.css';
import Toolbar from '../Navigation/Toolbar/Toolbar';
import SideDrawer from '../Navigation/SideDrawer/SideDrawer';

class Layout extends Component {
  state = {
    sideDrawerVisible: true,
  };

  sideDrawHandler = () => {
    const visible = this.state.sideDrawerVisible;
    this.setState({ sideDrawerVisible: !visible });
  };

  render() {
    return (
      <React.Fragment>
        <Toolbar />
        <SideDrawer
          clicked={this.sideDrawHandler}
          open={this.state.sideDrawerVisible}
        />
        <main className={classes.Content}>{this.props.children}</main>
      </React.Fragment>
    );
  }
}

export default Layout;
