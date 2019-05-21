import React from 'react';
import Button from '@material-ui/core/Button';

import Header from './components/Header.js';
import FilterButtons from './components/FilterButtons.js';
import Cards from './components/Cards.js';
import Modal from './components/Modal.js';

export default () => {
  const initState = localStorage.getItem('wanted_react_todo');

  // state and dispatcher
  const [todos, todosDispatcher] = React.useState(initState === null ? [] : initState.todos);
  const [filter, filterDispatcher] = React.useState(null);

  // component actions
  const addTodo = (todo) => todosDispatcher([...todos, todo]);
  const removeTodo = (target_index) => todosDispatcher(todos
    .filter((todo, index) => target_index !== index));
  const changeFinished = (is_finished, target_index) => todosDispatcher(todos
    .map((todo, index) =>
      target_index !== index
        ? todo
        : {
          name: todo.name,
          desc: todo.desc,
          deadline: todo.deadline,
          is_finished: is_finished,
        }));
  const changeFilter = (value) => filterDispatcher(value);

  // useful variables
  const filtered_todos = filter === null
    ? todos
    : todos.filter(
      (todo) => todo.is_finished === filter);


  React.useEffect(() => {
    console.log(todos);
  }, [todos]);

  return (
    <div className="app">
      <Header />
      <FilterButtons actions={ {changeFilter} } />
      <Cards todos={filtered_todos} actions={ {removeTodo, changeFinished} } />
      <Modal actions={ {addTodo} } />
    </div>
  );
};
