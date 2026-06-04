import axios from 'axios';

const API_URL = 'http://localhost:5000/api/todos';

export const todoAPI = {
  // get all todos
  getTodos: () => axios.get(API_URL),

  // create a todo
  createTodo: (todo) => axios.post(API_URL, todo),

  // update a todo
  updateTodo: (id, todo) => axios.put(`${API_URL}/${id}`, todo),

  // delete a todo
  deleteTodo: (id) => axios.delete(`${API_URL}/${id}`)
};
