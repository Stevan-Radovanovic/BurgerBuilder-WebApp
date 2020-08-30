import React from 'react';

import classes from './Modal.module.css';
import Backdrop from '../Backdrop/Backdrop';

const Modal = (props) => {
  return (
    <React.Fragment>
      <div className={classes.Modal}>{props.children}</div>
      <Backdrop clicked={props.modalHandler} />
    </React.Fragment>
  );
};

export default React.memo(Modal);
