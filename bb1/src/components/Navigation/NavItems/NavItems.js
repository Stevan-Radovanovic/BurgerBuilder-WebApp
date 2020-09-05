import React from 'react';
import classes from './NavItems.module.css';
import { NavLink } from 'react-router-dom';

const NavItems = (props) => {
  return (
    <ul className={classes.NavItems}>
      <li>
        <NavLink to="/burger">Builder</NavLink>
      </li>
      <li>
        <NavLink to="/orders">Orders</NavLink>
      </li>
    </ul>
  );
};

export default NavItems;
