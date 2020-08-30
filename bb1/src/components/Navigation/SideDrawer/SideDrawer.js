import React from 'react';
import classes from './SideDrawer.module.css';
import NavItems from '../NavItems/NavItems';
import Backdrop from '../../Backdrop/Backdrop';

const SideDrawer = (props) => {
  let attached = [classes.SideDrawer, classes.Close];
  if (props.open) {
    attached = [classes.SideDrawer, classes.Open];
  }

  return (
    <React.Fragment>
      <Backdrop clicked={props.clicked} />
      <div className={attached.join(' ')}>
        <nav>
          <p>
            <strong>Side Menu</strong>
          </p>
          <NavItems />
        </nav>
      </div>
    </React.Fragment>
  );
};

export default SideDrawer;
