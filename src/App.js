import React from 'react';
import Button from '@material-ui/core/Button';

import Header from './components/Header.js';
import FilterButtons from './components/FilterButtons.js';
import Cards from './components/Cards.js';
import Modal from './components/Modal.js';

export default () => {
  const initState = localStorage.getItem('wanted_react_todo');

  const [todos, todoDispacher] = React.useState(initState === null ? [] : initState.todos);

  return (
    <div className="app">
      <Header />
      <FilterButtons />
      <Cards />
      <Modal />
    </div>
  );
};
