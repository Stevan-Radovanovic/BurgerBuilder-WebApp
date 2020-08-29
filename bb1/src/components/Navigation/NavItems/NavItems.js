import React from 'react';
import classes from './NavItems.module.css';

const NavItems = (props) => {
  return (
    <ul className={classes.NavItems}>
      <li>
        <a href="/">Builder</a>
      </li>
      <li>
        <a href="/">CheckOut</a>
      </li>
    </ul>
  );
};

export default NavItems;
