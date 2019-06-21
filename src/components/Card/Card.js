import React from 'react';
import classes from './Card.module.css';

const card = props => (
  <div className={classes.Card}>
    <h2>Tittle</h2>
    <h3>Author Luis Aguilar</h3>
    <p>Lorem ipsum...</p>
    <p>Description</p>
    <p>2019-06-21</p>
  </div>
);

export default card;