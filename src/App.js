import React from 'react';
import Button from '@material-ui/core/Button';

import Header from './components/Header.js';
import FilterButtons from './components/FilterButtons.js';
import Cards from './components/Cards.js';
import Modal from './components/Modal.js';

export default () => {
  const initState = localStorage.getItem('wanted_react_todo');
  console.log(JSON.parse(initState));

  // state and dispatcher
  const [todos, todosDispatcher] = React.useState(initState === null ? [] : JSON.parse(initState));
  const [filter, filterDispatcher] = React.useState(null);
  const [search_str, searchStrDispatcher] = React.useState("");

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
  const changeSearchStr = (str) => searchStrDispatcher(str);

  React.useEffect(() => {
    localStorage.setItem('wanted_react_todo', JSON.stringify(todos))
  }, [todos]);

  return (
    <div className="app">
      <Header actions={ {changeSearchStr} } />
      <FilterButtons actions={ {changeFilter} } />
      <Cards state={ {todos, filter, search_str} } actions={ {removeTodo, changeFinished} } />
      <Modal actions={ {addTodo} } />
    </div>
  );
};
