import React from 'react';
import classes from './Card.module.css';

const card = props => {
  
  return (
    <div className={classes.Card}>
      <h2>{props.tittle}</h2>
      <h3>{props.author}</h3>
      <p>{props.body}</p>
      <p>{props.description}</p>
      <p>{props.date}</p>
    </div>
  );
};

export default card;