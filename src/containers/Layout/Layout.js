import React, { Component } from 'react';
import Aux from '../../hoc/Aux';
import Toolbar from '../../components/Navigation/Toolbar/Toolbar';
import SideDrawer from '../../components/Navigation/SideDrawer/SideDrawer';
import Pagination from '../../components/Navigation/Pagination/Pagination';
import classes from './Layout.module.css';
import axios from '../../axiosreq';
import Card from '../../components/Card/Card';

class Layout extends Component {
  state = {
    showSideDrawer: false,
    "articles": null,
    "error": false,
    "page": 1,
    "desc": true
  }
  
  componentDidMount () {
    axios.get(`http://localhost:3001/articles?_page=${this.state.page}$_limit=10&_sort=date&_order=desc`)
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

  clickHandlerPageNext = () => {
    if (this.state.page >= 1 && this.state.articles.length >=10 && this.state.desc === true) {
      let updatedPage = this.state.page;
      updatedPage++;
      this.setState({page: updatedPage});

      axios.get(`http://localhost:3001/articles?_page=${updatedPage}$_limit=10&_sort=date&_order=desc`)
        .then(response => {
          console.log(response.data);
          this.setState({articles: response.data});
        })
        .catch(error => {this.setState({error: true})});
    } else if (this.state.page >= 1 && this.state.articles.length >=10 && this.state.desc === false) {
      let updatedPage = this.state.page;
      updatedPage++;
      this.setState({page: updatedPage});

      axios.get(`http://localhost:3001/articles?_page=${updatedPage}$_limit=10&_sort=date&_order=asc`)
        .then(response => {
          console.log(response.data);
          this.setState({articles: response.data});
        })
        .catch(error => {this.setState({error: true})});
    }
  }

  clickHandlerPagePrev = () => {
    if (this.state.page !== 1 && this.state.desc === true) {
      let updatedPage = this.state.page;
      updatedPage--;
      this.setState({page: updatedPage});
      console.log(this.state.page);
      
      axios.get(`http://localhost:3001/articles?_page=${updatedPage}$_limit=10&_sort=date&_order=desc`)
        .then(response => {
          console.log(response.data);
          this.setState({articles: response.data});
        })
        .catch(error => {this.setState({error: true})});
    } else if (this.state.page !== 1 && this.state.desc === false){
      let updatedPage = this.state.page;
      updatedPage--;
      this.setState({page: updatedPage});
      console.log(this.state.page);
      
      axios.get(`http://localhost:3001/articles?_page=${updatedPage}$_limit=10&_sort=date&_order=asc`)
        .then(response => {
          console.log(response.data);
          this.setState({articles: response.data});
        })
        .catch(error => {this.setState({error: true})});
    }
  }

  clickHandlerSort = () => {
    if(this.state.desc) {
      let updatedPage = this.state.page;
      let updatedAsc = !this.state.desc;
      this.setState({desc: updatedAsc});

      axios.get(`http://localhost:3001/articles?_page=${updatedPage}$_limit=10&_sort=date&_order=asc`)
        .then(response => {
          console.log(response.data);
          this.setState({articles: response.data});
        })
        .catch(error => {this.setState({error: true})});
    } else {
      let updatedPage = this.state.page;
      let updatedAsc = !this.state.desc;
      this.setState({desc: updatedAsc});

      axios.get(`http://localhost:3001/articles?_page=${updatedPage}$_limit=10&_sort=date&_order=desc`)
        .then(response => {
          console.log(response.data);
          this.setState({articles: response.data});
        })
        .catch(error => {this.setState({error: true})});
    }
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
          <Toolbar drawerToggleClicked={this.sideDrawerToggleHandler} sort={this.clickHandlerSort}/>
          <SideDrawer open={this.state.showSideDrawer} closed={this.sideDrawerClosedHandler} byAuthor={this.clickHandler}/>
        </div>
        <main className={classes.Content}>
          {card}
        </main>
        <footer className={classes.Page}>
          <Pagination next={this.clickHandlerPageNext} prev={this.clickHandlerPagePrev}/>
        </footer>
      </Aux> 
    )
  }

} 

export default Layout;