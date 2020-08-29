import React from 'react';
import css from './Layout.module.css';
import Toolbar from '../Navigation/Toolbar/Toolbar';

const Layout = (props) => (
  <React.Fragment>
    <Toolbar />
    <main className={css.Content}>{props.children}</main>
  </React.Fragment>
);

export default Layout;
