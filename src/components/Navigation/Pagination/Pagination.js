import React from 'react';
import classes from './Pagination.module.css';

const pagination = props => (
  <div className={classes.Page}>
    <button>{`< Prev`}</button>
    <button>{`Next >`}</button>
  </div>
  
);

export default pagination;