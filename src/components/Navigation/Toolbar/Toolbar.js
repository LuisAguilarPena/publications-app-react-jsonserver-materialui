import React from 'react';
import classes from './Toolbar.module.css';

const toolbar = props => (
  <header className={classes.Toolbar}>
    <div>MENU</div>
    <div>Publications App</div>
    <div>Sort</div>
  </header>
);

export default toolbar;