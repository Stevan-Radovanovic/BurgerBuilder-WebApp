import React from 'react';
import classes from './SideDrawer.module.css';
import NavItems from '../NavItems/NavItems';

const SideDrawer = (props) => {
  return (
    <div className={classes.SideDrawer}>
      <nav>
        <NavItems />
      </nav>
    </div>
  );
};

export default SideDrawer;
