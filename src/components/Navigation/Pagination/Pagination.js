import React from 'react';
import classes from './Pagination.module.css';

const pagination = props => (
  <div className={classes.Page}>
    <button onClick={props.prev}>{`< Prev`}</button>
    <button onClick={props.next}>{`Next >`}</button>
  </div>
  
);

export default pagination;