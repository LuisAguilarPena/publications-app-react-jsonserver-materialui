import React, { Component } from 'react';
import axios from '../../axiosreq';
import Aux from '../../hoc/Aux';
import Card from '../../components/Card/Card';


class Body extends Component{

  state = {
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

  render(){
    
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

    return(
      <div>
        {card}
      </div>
    );
  }
}

export default Body;