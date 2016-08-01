const todoInitialState = {
  todos:[]
}

export default function(state = todoInitialState, action) {
  switch (action.type) {
    case 'FETCH_TODOS':
      return {...state, todos:[...state.todos, ...action.todos]}

    case 'ADD_TODO':
      return {...state, todos:[...state.todos, action.todo]}

    case 'DELETE_TODO':
      return {...state, todos: state.todos.filter(todo => {
        return todo.id !== action.id
      })}

    default:
      return state;
  }
}