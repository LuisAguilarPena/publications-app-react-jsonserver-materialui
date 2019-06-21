import React, { Component } from 'react';
import Aux from '../../hoc/Aux';
import Toolbar from '../Navigation/Toolbar/Toolbar';
import SideDrawer from '../Navigation/SideDrawer/SideDrawer';
import classes from './Layout.module.css';

class Layout extends Component {
  state = {
    showSideDrawer: false,
    
  }
  
  sideDrawerClosedHandler = () => {
    this.setState({showSideDrawer: false});
  }
  
  sideDrawerToggleHandler = () => {
    this.setState((prevState) => { 
      return {showSideDrawer: !this.state.showSideDrawer};
    });
  } 

  render () {
    return (
      <Aux>
        <div>
          <Toolbar drawerToggleClicked={this.sideDrawerToggleHandler}/>
          <SideDrawer open={this.state.showSideDrawer} closed={this.sideDrawerClosedHandler}/>
        </div>
        <main className={classes.Content}>
          {this.props.children}
        </main>
      </Aux> 
    )
  }

} 

export default Layout;