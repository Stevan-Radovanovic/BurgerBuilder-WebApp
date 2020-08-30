import React, { Component } from 'react';
import classes from './Layout.module.css';
import Toolbar from '../../components/Navigation/Toolbar/Toolbar';
import SideDrawer from '../../components/Navigation/SideDrawer/SideDrawer';

class Layout extends Component {
  state = {
    sideDrawerVisible: false,
  };

  sideDrawHandler = () => {
    const visible = this.state.sideDrawerVisible;
    this.setState({ sideDrawerVisible: !visible });
    console.log('Changed to ' + !visible);
  };

  render() {
    return (
      <React.Fragment>
        <Toolbar clicked={this.sideDrawHandler} />
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
