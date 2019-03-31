import React from 'react';
import addButton from '../assets/addButton.svg';
import concludeTaskButton from '../assets/concludeTaskButton.svg';

const Button = ({ type }) => (
  <img src={
    type === 'ADD'
      ? addButton
    : type === 'CONCLUDE_TASK'
      ? concludeTaskButton
      : null
  } alt="Add Button" />
);

export default Button;
