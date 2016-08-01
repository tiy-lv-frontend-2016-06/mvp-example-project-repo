import React from 'react';
import { connect } from 'react-redux';
import TodoItem from 'ui/TodoItem';
import { List } from 'material-ui/List';

const TodoList = (props) => {
  return (
    <List>
      {props.todos.map(function(todo){
        return <TodoItem key={todo.id} id={todo.id} text={todo.text} />
      })}
    </List>
  )
}

const stateToProps = (state) => {
  return {
    todos: state.todoReducer.todos
  }
}

export default connect(stateToProps)(TodoList)