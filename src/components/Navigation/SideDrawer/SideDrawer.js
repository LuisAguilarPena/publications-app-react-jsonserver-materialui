import React from 'react';
import classes from './SideDrawer.module.css';
import Backdrop from '../../UI/Backdrop/Backdrop';
import Aux from '../../../hoc/Aux';

const sideDrawer = props => {
  let attachedClasses = [classes.SideDrawer, classes.Close]
  if(props.open) {
    attachedClasses = [classes.SideDrawer, classes.Open];
  }
  return (
    <Aux>
      <Backdrop show={props.open} clicked={props.closed}/>
      <div className={attachedClasses.join(' ')}>
        <h3 className={classes.Author}>Albert Einstein</h3>
        <h3 className={classes.Author}>Johann Gauss</h3>
        <h3 className={classes.Author}>Ada Lovelace</h3>
      </div>
    </Aux>  
  )
}

export default sideDrawer;