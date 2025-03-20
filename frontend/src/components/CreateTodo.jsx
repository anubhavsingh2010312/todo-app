import React, { useState } from 'react';

export function CreateTodo() {
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    return <div>
        <input style={{
            padding: '10px',
            margin: '10px',
        }} type="text" placeholder="title" onChange={(e) => {
            const val = e.target.value;
            setTitle(val);
        }} /> <br />
        <input style={{
            padding: '10px',
            margin: '10px',
        }} type="text" placeholder="description" onChange={(e) => {
            const val = e.target.value;
            setDescription(val);
        }} /> <br />

        <button style={{
            padding: '10px',
            margin: '10px',
        }} onClick={() => {
            fetch("http://localhost:3000/todo", {
                method: "POST",
                body: JSON.stringify({
                    title: title,
                    description: description
                }),
                headers: {
                    'Content-Type': 'application/json'
                }
            }).then(async (res) => {
                const json = await res.json();
                alert("Todo added");
            })
        }} >Add a todo</button>
    </div>
}