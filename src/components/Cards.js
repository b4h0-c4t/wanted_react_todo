import React from 'react';

import Card from './Card.js';

export default (props) => {
  const { actions, todos } = props;

  const cardDoms = todos.map(
    (todo, index) =>
      (<Card key={index} actions={actions} todo={todo} index={index} />));

  return (
    <div className="cards">
      {cardDoms}
    </div>
  );
};
