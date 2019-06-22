import React from 'react';
import classes from './Card.module.css';

const card = props => {
  
  return (
    <div className={classes.Card}>
      <h2>{props.tittle}</h2>
      <h3 style={{color: "gray"}}>{props.author}</h3>
      <p>{props.body}</p>
      <p style={{color: "gray"}}>{props.description}</p>
      <p style={{color: "gray"}}>{props.date}</p>
    </div>
  );
};

export default card;