import { useEffect } from 'react';
import { useTodoStore } from './store/todoStore';
import TodoForm from './components/TodoForm';
import TodoList from './components/TodoList';

function App() {
  const { todos, fetchTodos, loading } = useTodoStore();

  useEffect(() => {
    fetchTodos();
  }, [fetchTodos]);

  if (loading) return <div>Loading...</div>;

  return (
    <div className="min-h-screen bg-gray-100 py-8 px-4">
      <div className="max-w-2xl mx-auto">
        <h1 className="text-4xl font-bold text-center mb-8 text-gray-800">
          My Todo List
        </h1>

        <TodoForm />
        <TodoList todos={todos} />
      </div>
    </div>
  );
}

export default App;
