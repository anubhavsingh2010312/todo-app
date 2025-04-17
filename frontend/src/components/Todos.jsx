import React from 'react';
import { MarkAsDone } from './MarkAsDone';

export const RenderTodo = ({ todos, fetchTodos, toggleTodoCompletion }) => {
  if (!Array.isArray(todos) || todos.length === 0) {
    return <div className="text-center text-gray-500">No todos available</div>;
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 p-5">
      {todos.map((todo, index) => (
        <div
          key={index}
          className="bg-white shadow-md rounded-lg p-5 text-left"
        >
          <h3 className="text-lg font-semibold text-green-600 mb-2">
            {todo.title}
          </h3>
          <p className="text-gray-700 mb-2">{todo.description}</p>
          <p className="text-gray-500 text-sm">
            Priority: <span className={`font-bold ${todo.priority === 'High' ? 'text-red-500' : todo.priority === 'Medium' ? 'text-yellow-500' : 'text-green-500'}`}>
              {todo.priority}
            </span>
          </p>
          <p className="text-gray-500 mb-2">Due Date: {new Date(todo.dueDate).toLocaleDateString()}</p>
          <p
            className={`mb-4 ${todo.completed ? 'text-green-500' : 'text-red-500'
              }`}
          >
            {todo.completed ? 'Completed' : 'Not Completed'}
          </p>
          <MarkAsDone todo={todo} onUpdate={fetchTodos} />

        </div>
      ))}
    </div>
  );
};