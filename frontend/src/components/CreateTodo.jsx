import React, { useState } from 'react';

export function CreateTodo({ addTodo }) {
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [dueDate, setDueDate] = useState('');
    const [priority, setPriority] = useState('Medium'); // New state for priority

    return (
        <div
            style={{
                backgroundColor: 'white',
                boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
                borderRadius: '8px',
                padding: '20px',
                textAlign: 'left',
                boxSizing: 'border-box', // Ensure the card respects padding
            }}
        >
            <h2 style={{ marginBottom: '20px', color: '#4CAF50' }}>Create Todo</h2>
            <input
                style={{
                    width: '100%',
                    padding: '10px 15px', // Padding on all sides
                    marginBottom: '10px',
                    border: '1px solid #ccc',
                    borderRadius: '4px',
                    boxSizing: 'border-box', // Ensure padding is included in width
                }}
                type="text"
                placeholder="Title"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
            />
            <textarea
                style={{
                    width: '100%',
                    padding: '10px 15px', // Padding on all sides
                    marginBottom: '10px',
                    border: '1px solid #ccc',
                    borderRadius: '4px',
                    resize: 'none',
                    boxSizing: 'border-box', // Ensure padding is included in width
                }}
                placeholder="Description"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
            />
            <select
                style={{
                    width: '100%',
                    padding: '10px 15px',
                    marginBottom: '10px',
                    border: '1px solid #ccc',
                    borderRadius: '4px',
                    boxSizing: 'border-box',
                    resize: 'none',
                }}
                value={priority}
                onChange={(e) => setPriority(e.target.value)}
            >
                <option value="High">High</option>
                <option value="Medium">Medium</option>
                <option value="Low">Low</option>
            </select>
            <input
                style={{
                    width: '100%',
                    padding: '10px 15px',
                    marginBottom: '10px',
                    border: '1px solid #ccc',
                    borderRadius: '4px',
                    boxSizing: 'border-box',
                    resize: 'none',
                }}
                type="date"
                value={dueDate}
                onChange={(e) => setDueDate(e.target.value)}
            />
            <button
                style={{
                    backgroundColor: '#4CAF50',
                    color: 'white',
                    border: 'none',
                    padding: '10px 20px',
                    borderRadius: '4px',
                    cursor: 'pointer',
                }}
                onClick={() => {
                    if (title && description) {
                        addTodo({ title, description, dueDate, priority, completed: false });
                        setTitle('');
                        setDescription('');
                        setDueDate('');
                        setPriority('Medium');
                    } else {
                        alert('Please fill in both fields');
                    }
                }}
            >
                Add Todo
            </button>
        </div>
    );
}