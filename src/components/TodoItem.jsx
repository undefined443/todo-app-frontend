import { useTodoStore } from '../store/todoStore';

export default function TodoItem({ todo }) {
  const updateTodo = useTodoStore(state => state.updateTodo);
  const deleteTodo = useTodoStore(state => state.deleteTodo);

  const handleToggle = async () => {
    await updateTodo(todo._id, { completed: !todo.completed });
  };

  const handleDelete = async () => {
    await deleteTodo(todo._id);
  };

  return (
    <div className="bg-white p-4 rounded-lg shadow-md flex items-center justify-between hover:shadow-lg transition-shadow">
      <div className="flex-1">
        <div
          className={`text-lg ${
            todo.completed ? 'line-through text-gray-400' : 'text-gray-800'
          }`}
        >
          {todo.title}
        </div>
        {todo.description && (
          <div className="text-sm text-gray-500 mt-1">{todo.description}</div>
        )}
      </div>

      <div className="flex gap-2 ml-4">
        <button
          onClick={handleToggle}
          className={`px-3 py-1 rounded text-sm transition-colors ${
            todo.completed
              ? 'bg-gray-300 text-gray-700 hover:bg-gray-400'
              : 'bg-green-500 text-white hover:bg-green-600'
          }`}
        >
          {todo.completed ? 'Undo' : 'Complete'}
        </button>

        <button
          onClick={handleDelete}
          className="px-3 py-1 bg-red-500 text-white rounded text-sm hover:bg-red-600 transition-colors"
        >
          Delete
        </button>
      </div>
    </div>
  );
}
