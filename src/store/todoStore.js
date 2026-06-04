import { create } from 'zustand';
import { todoAPI } from '../services/api';

export const useTodoStore = create((set) => ({
  todos: [],
  loading: false,
  error: null,

  // fetch all todos
  fetchTodos: async () => {
    set({ loading: true });
    try {
      const res = await todoAPI.getTodos();
      set({ todos: res.data, loading: false });
    } catch (error) {
      set({ error: error.message, loading: false });
    }
  },

  // add a todo
  addTodo: async (title, description) => {
    try {
      const res = await todoAPI.createTodo({ title, description });
      set(state => ({ todos: [res.data, ...state.todos] }));
    } catch (error) {
      set({ error: error.message });
    }
  },

  // update a todo
  updateTodo: async (id, updates) => {
    try {
      const res = await todoAPI.updateTodo(id, updates);
      set(state => ({
        todos: state.todos.map(t => t._id === id ? res.data : t)
      }));
    } catch (error) {
      set({ error: error.message });
    }
  },

  // delete a todo
  deleteTodo: async (id) => {
    try {
      await todoAPI.deleteTodo(id);
      set(state => ({ todos: state.todos.filter(t => t._id !== id) }));
    } catch (error) {
      set({ error: error.message });
    }
  }
}));
