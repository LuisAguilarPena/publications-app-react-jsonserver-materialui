import React from 'react';
import classes from './Card.module.css';

const card = props => {

  const transformedAuthors = props.authors;
  const transformedArticles = props.articles;
  console.log(transformedArticles);
  
  return (
    <div className={classes.Card}>
      <h2>{transformedArticles[0].tittle}</h2>
      <h3>{`${transformedAuthors[0].firstName} ${transformedAuthors[0].lastName}`}</h3>
      <p>{transformedArticles[0].body}</p>
      <p>{transformedArticles[0].description}</p>
      <p>{transformedArticles[0].date}</p>
    </div>
  );
};

export default card;