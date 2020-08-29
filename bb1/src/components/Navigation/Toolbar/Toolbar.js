import React from 'react';
import classes from './Toolbar.module.css';
import Logo from '../../Logo/Logo';
import NavItems from '../NavItems/NavItems';

const Toolbar = (props) => {
  return (
    <header className={classes.Toolbar}>
      <Logo />
      <nav>
        <NavItems />
      </nav>
    </header>
  );
};

export default Toolbar;
