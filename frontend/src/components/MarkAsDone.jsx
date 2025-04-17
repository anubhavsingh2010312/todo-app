import React from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

export const MarkAsDone = ({ todo, onUpdate }) => {
  const markAsDone = () => {
    axios.put(`http://localhost:3000/completed/${todo.id}`)
      .then((res) => {
        console.log('Todo marked as done:', res.data);
        onUpdate(); // Trigger a re-fetch or update in the parent component
      })
      .catch((error) => console.error('Error marking todo as done:', error));
  };

  const navigate = useNavigate();

  const deleteTodo = () => {
    axios.delete(`http://localhost:3000/todo/${todo.id}`)
      .then((res) => {
        console.log('Todo deleted:', res.data);
        onUpdate(); // Trigger a re-fetch or update in the parent component
      })
      .catch((error) => console.error('Error deleting todo:', error));
  };

  // return (
  //   <div>
  //     <button onClick={markAsDone}>Mark as Done</button>
  //     <button onClick={deleteTodo}>Delete</button>
  //   </div>
  // );

  // Define button styles
  const buttonStyle = {
    backgroundColor: '#4CAF50',
    color: 'white',
    border: 'none',
    padding: '10px 15px',
    borderRadius: '5px',
    cursor: 'pointer',
    marginRight: '10px',
    transition: 'background-color 0.3s',
  };

  const hoverStyle = {
    backgroundColor: '#45a049',
  };

  return (
    <><button
      style={buttonStyle}
      onMouseOver={(e) => {
        if (hoverStyle) {
          Object.keys(hoverStyle).forEach((key) => {
            e.target.style[key] = hoverStyle[key];
          });
        }
      }}
      onMouseOut={(e) => {
        if (buttonStyle) {
          Object.keys(buttonStyle).forEach((key) => {
            e.target.style[key] = buttonStyle[key];
          });
        }
      }}
      onClick={markAsDone}
    >
      {todo.completed ? 'Undo' : 'Mark as Done'}
    </button><button
      style={buttonStyle}
      onMouseOver={(e) => {
        if (hoverStyle) {
          Object.keys(hoverStyle).forEach((key) => {
            e.target.style[key] = hoverStyle[key];
          });
        }
      }}
      onMouseOut={(e) => {
        if (buttonStyle) {
          Object.keys(buttonStyle).forEach((key) => {
            e.target.style[key] = buttonStyle[key];
          });
        }
      }}
      onClick={deleteTodo}
    >
        Delete
      </button>
      <button
        style={buttonStyle}
        onMouseOver={(e) => {
          if (hoverStyle) {
            Object.keys(hoverStyle).forEach((key) => {
              e.target.style[key] = hoverStyle[key];
            });
          }
        }}
        onMouseOut={(e) => {
          if (buttonStyle) {
            Object.keys(buttonStyle).forEach((key) => {
              e.target.style[key] = buttonStyle[key];
            });
          }
        }}
        onClick={() => navigate(`/edit/${todo._id}`)}
      >
        Edit
      </button>
    </>

  );
};