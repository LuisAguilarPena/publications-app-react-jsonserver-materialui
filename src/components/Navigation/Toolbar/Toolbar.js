import React from 'react';
import DrawerToggle from '../SideDrawer/DrawerToggle/DrawerToggle';
import classes from './Toolbar.module.css';

const toolbar = props => (
  <header className={classes.Toolbar}>
   <DrawerToggle clicked={props.drawerToggleClicked}/>
    <div className={classes.Sort} > <a href='/' >Publications App</a></div>
    <div className={classes.Sort} onClick={props.sort}>Sort</div>
  </header>
);

export default toolbar;