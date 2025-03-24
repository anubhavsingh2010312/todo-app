import React from 'react';

export const RenderTodo = ({ todos }) => {
  if (!Array.isArray(todos)) {
    return <div>No todos available</div>;
  }

  return (
    <div>
      {todos
        .filter((todo) => todo.title && todo.description) // Filter out invalid todos
        .map((todo, index) => (
          <div key={index}>
            <h3>{todo.title}</h3>
            <p>{todo.description}</p>
            <p>{todo.completed ? "Completed" : "Not Completed"}</p>
          </div>
        ))}
    </div>
  );
};