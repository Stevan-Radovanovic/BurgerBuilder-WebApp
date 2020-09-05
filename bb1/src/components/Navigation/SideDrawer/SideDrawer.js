import React from 'react';
import classes from './SideDrawer.module.css';
import NavItems from '../NavItems/NavItems';
import Backdrop from '../../UI/Backdrop/Backdrop';

const SideDrawer = (props) => {
  let attached = [classes.SideDrawer, classes.Close];
  if (props.open) {
    attached = [classes.SideDrawer, classes.Open];
  }

  let backdrop = null;
  if (props.open) {
    backdrop = <Backdrop clicked={props.clicked} />;
  }

  return (
    <React.Fragment>
      {backdrop}
      <div className={attached.join(' ')}>
        <nav>
          <p>
            <strong>Side Menu</strong>
          </p>
          <NavItems clicked={props.clicked} />
        </nav>
      </div>
    </React.Fragment>
  );
};

export default SideDrawer;
