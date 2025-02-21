import React from 'react';

export const RenderTodo = ({ todos }) => {
  if (!Array.isArray(todos)) {
    return <div>No todos available</div>;
  }

  return (
    <div>
      {todos.map((todo) => (
        <div key={todo._id}>
          <h3>{todo.title}</h3>
          <p>{todo.description}</p>
          <p>{todo.completed ? "Completed" : "Not Completed"}</p>
        </div>
      ))}
    </div>
  );
};