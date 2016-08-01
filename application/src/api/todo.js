import store from 'store';
import { v4 } from 'uuid';
import axios from 'axios';

fetchTodos();

export function fetchTodos() {
  return axios.get("http://localhost:8001/todos").then(function(response){
    store.dispatch({
      type:'FETCH_TODOS',
      todos: response.data
    })
  })
}

export function addItem(todo) {
  return axios.post("http://localhost:8001/todos/", {id:v4(), text: todo, status:'active'}).then(function(response){
    store.dispatch({
      type: 'ADD_TODO',
      todo: response.data
    });
  });
}

export function deleteItem(id) {
  return axios.delete(`http://localhost:8001/todos/${id}`).then(function(response){
    store.dispatch({
      type: 'DELETE_TODO',
      id: id
    })
  });
}