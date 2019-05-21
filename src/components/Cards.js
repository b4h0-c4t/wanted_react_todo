import React from 'react';

import Card from './Card.js';

export default (props) => {
  const { actions, state } = props;

  const cardDoms = state.todos.map(
    (todo, index) =>
      (<Card key={index} actions={actions} state={state} todo={todo} index={index} />));

  return (
    <div className="cards">
      {cardDoms}
    </div>
  );
};
