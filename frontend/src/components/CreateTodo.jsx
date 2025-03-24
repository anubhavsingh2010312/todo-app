import React, { useState } from 'react';

export function CreateTodo({ addTodo }) {
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");

    return (
        <div>
            <input
                style={{
                    padding: '10px',
                    margin: '10px',
                }}
                type="text"
                placeholder="title"
                onChange={(e) => setTitle(e.target.value)}
            /> <br />
            <input
                style={{
                    padding: '10px',
                    margin: '10px',
                }}
                type="text"
                placeholder="description"
                onChange={(e) => setDescription(e.target.value)}
            /> <br />

            <button
                style={{
                    padding: '10px',
                    margin: '10px',
                }}
                onClick={() => {
                    fetch("http://localhost:3000/todo", {
                        method: "POST",
                        body: JSON.stringify({
                            title: title,
                            description: description,
                        }),
                        headers: {
                            'Content-Type': 'application/json',
                        },
                    })
                        .then(async (res) => {
                            const json = await res.json();
                            addTodo(json); // Add the new todo to the list
                            alert("Todo added");
                        })
                        .catch((error) => console.error('Error adding todo:', error));
                }}
            >
                Add a todo
            </button>
        </div>
    );
}