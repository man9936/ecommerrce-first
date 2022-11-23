import React from 'react';

import classes from './Header.module.css';
import HeaderCartButton from './HeaderCartButton';


export default function Header(){
  return(
    <div>
        <div className={classes.testHeader}>
          <span> Home  </span>
          <span> Store </span>
          <span> About </span>
          <HeaderCartButton />
        </div>
    </div>
  )
}