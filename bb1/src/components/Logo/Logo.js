import React from 'react';
import classes from './Logo.module.css';
import logoImg from '../../assets/images/burger-logo.png';

const Logo = (props) => {
  return (
    <div className={classes.Logo}>
      <img src={logoImg} alt="Burger"></img>
    </div>
  );
};

export default Logo;
