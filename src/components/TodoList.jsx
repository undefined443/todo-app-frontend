import TodoItem from './TodoItem';

export default function TodoList({ todos }) {
  if (!todos || todos.length === 0) {
    return (
      <div className="text-center py-8 text-gray-500">
        No todos yet. Add one to get started!
      </div>
    );
  }

  return (
    <div className="space-y-2">
      {todos.map(todo => (
        <TodoItem key={todo._id} todo={todo} />
      ))}
    </div>
  );
}
