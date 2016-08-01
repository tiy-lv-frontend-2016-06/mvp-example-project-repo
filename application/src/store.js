import { createStore, combineReducers } from 'redux';

// import reducers here
import todoReducer from 'reducers/todo-reducer';

// combine reducers
const reducers = combineReducers({
  // put reducers here
  todoReducer
})

export default createStore(reducers);