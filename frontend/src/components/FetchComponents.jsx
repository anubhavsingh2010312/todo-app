import React, { useState } from 'react';
import axios from 'axios';

export function FetchTodo() {
    const [todoId, setTodoId] = useState('');
    const [todo, setTodo] = useState(null);
    const [error, setError] = useState('');

    const fetchTodoById = () => {
        if (!todoId) {
            setError('Please enter a valid Todo Id');
            return;
        }

        axios
            .get(`http://localhost:3000/todofind?id=${encodeURIComponent(todoId)}`)
            .then((res) => {
                if (res.data) {
                    setTodo(res.data);
                    setError('');
                } else {
                    setError('Todo not found');
                    setTodo(null);
                }
            })
            .catch(() => {
                setError('Todo not found or an error occurred');
                setTodo(null);
            });
    };

    return (
        <div>
            <input
                type="text"
                placeholder="Enter Todo ID"
                value={todoId}
                onChange={(e) => setTodoId(e.target.value)}
                style={{ padding: '10px', margin: '10px' }}
            />
            <button
                onClick={fetchTodoById}
                style={{ padding: '10px', margin: '10px' }}
            >
                Fetch Todo
            </button>

            {error && <p style={{ color: 'red' }}>{error}</p>}

            {todo && (
                <div>
                    <h3>{todo.title}</h3>
                    <p>{todo.description}</p>
                    <p>{todo.completed ? 'Completed' : 'Not Completed'}</p>
                </div>
            )}
        </div>
    );
}