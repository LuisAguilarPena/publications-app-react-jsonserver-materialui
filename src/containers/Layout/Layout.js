import React, { Component } from 'react';
import Aux from '../../hoc/Aux';
import Toolbar from '../Navigation/Toolbar/Toolbar';
import SideDrawer from '../Navigation/SideDrawer/SideDrawer';
import classes from './Layout.module.css';
import axios from '../../axiosreq';
import Card from '../Card/Card';

class Layout extends Component {
  state = {
    showSideDrawer: false,
    "articles": null,
    "error": false
  }
  
  componentDidMount () {
    axios.get('http://localhost:3001/articles?_page=1$_limit=10')
      .then(response => {
        console.log(response.data);
        this.setState({articles: response.data});
      })
      .catch(error => {this.setState({error: true})});
  } 

  sideDrawerClosedHandler = () => {
    this.setState({showSideDrawer: false});
  }
  
  sideDrawerToggleHandler = () => {
    this.setState((prevState) => { 
      return {showSideDrawer: !this.state.showSideDrawer};
    });
  } 

  clickHandler = (author) => {
    axios.get(`http://localhost:3001/articles?author=${author}`)
      .then(response => {
        console.log(response.data);
        this.setState({articles: response.data});
      })
      .catch(error => {this.setState({error: true})});
  }

  render () {

    let card = this.state.error ? <Aux><p>Game Over</p></Aux> : <Aux><p>Loading</p></Aux>;
  
    if(this.state.articles){
      card = (
        <Aux>
          {this.state.articles.map(article => 
            <Card 
              key={article.id}
              tittle={article.tittle}
              author={article.author}
              body={article.body}
              description={article.description}
              date={article.date}
            />
          )}
        </Aux>    
      )
    }

    return (
      <Aux>
        <div>
          <Toolbar drawerToggleClicked={this.sideDrawerToggleHandler}/>
          <SideDrawer open={this.state.showSideDrawer} closed={this.sideDrawerClosedHandler} byAuthor={this.clickHandler}/>
        </div>
        <main className={classes.Content}>
          {card}
        </main>
      </Aux> 
    )
  }

} 

export default Layout;