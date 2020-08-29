import React from 'react';
import css from './Layout.module.css';
import Toolbar from '../Navigation/Toolbar/Toolbar';
import SideDrawer from '../Navigation/SideDrawer/SideDrawer';

const Layout = (props) => (
  <React.Fragment>
    <Toolbar />
    <SideDrawer />
    <main className={css.Content}>{props.children}</main>
  </React.Fragment>
);

export default Layout;
