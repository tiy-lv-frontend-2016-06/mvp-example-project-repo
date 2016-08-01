import React from 'react';

import Title from 'ui/Title';
import TodoForm from 'ui/TodoForm';
import TodoList from 'ui/TodoList';

export default React.createClass({
  render: function () {
    return (
      <div>
        <Title>Todos</Title>
        <TodoForm />
        <TodoList />
      </div>
    )
  }
})  