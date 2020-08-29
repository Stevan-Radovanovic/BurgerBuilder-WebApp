import React from 'react';
import classes from './SideDrawer.module.css';
import NavItems from '../NavItems/NavItems';

const SideDrawer = (props) => {
  return (
    <div className={classes.SideDrawer}>
      <nav>
        <p>
          <strong>Side Menu</strong>
        </p>
        <NavItems />
      </nav>
    </div>
  );
};

export default SideDrawer;
