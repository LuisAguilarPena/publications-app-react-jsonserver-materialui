import React, { Component } from 'react';
import classes from './SideDrawer.module.css';
import Backdrop from '../../UI/Backdrop/Backdrop';
import Aux from '../../../hoc/Aux';
import axios from '../../../axiosreq';

class SideDrawer extends Component {
  state = {
    "authors": null,
    "error": false
  }

  componentDidMount () {
    axios.get('http://localhost:3001/authors')
      .then(response => {
        console.log(response.data);
        this.setState({authors: response.data});
      })
      .catch(error => {this.setState({error: true})});
  } 

  render () {

    let attachedClasses = [classes.SideDrawer, classes.Close]
    if(this.props.open) {
      attachedClasses = [classes.SideDrawer, classes.Open];
    }

    let author = this.state.error ? <Aux><p>Game Over</p></Aux> : <Aux><p>Loading</p></Aux>;
  
    if(this.state.authors){
      author = (
        <Aux>
          {this.state.authors.map(author => 
          <h3 
            className={classes.Author}
            key={author.id}
            onClick={() => this.props.byAuthor(`${author.firstName} ${author.lastName}`)}
          >
            {`${author.firstName} ${author.lastName}`}
          </h3>
        )}
        </Aux>    
      )
    }

    return (
      <Aux>
        <Backdrop show={this.props.open} clicked={this.props.closed}/>
        <div className={attachedClasses.join(' ')}>
          {author}
        </div>
      </Aux>  
    )
  }
}

export default SideDrawer;