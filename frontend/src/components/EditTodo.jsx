import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';

export const EditTodo = ({ fetchTodos }) => {
  const { id } = useParams(); // Get the todo ID from the URL
  const navigate = useNavigate(); // For redirecting after saving
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [dueDate, setDueDate] = useState('');
  const [priority, setPriority] = useState('Medium');

  // Fetch the todo details when the component loads
  useEffect(() => {
    const fetchTodo = async () => {
      try {
        const response = await axios.get(`http://localhost:3000/todos/${id}`);
        setTitle(response.data.title);
        setDescription(response.data.description);
        setDueDate(response.data.dueDate ? response.data.dueDate.split('T')[0] : ''); // Format date for input
        setPriority(response.data.priority || 'Medium'); // Set the priority from the fetched todo
      } catch (error) {
        console.error('Error fetching todo:', error);
      }
    };

    fetchTodo();
  }, [id]);

  // Handle saving the updated todo
  const handleSave = async () => {
    if (title && description) {
      try {
        await axios.put(`http://localhost:3000/todos/${id}`, { title, description, dueDate, priority });
        await fetchTodos(); // Fetch the updated list of todos
        navigate('/'); // Redirect to the TodoLandingPage after saving
      } catch (error) {
        console.error('Error updating todo:', error);
      }
    } else {
      alert('Please fill in both fields');
    }
  };

  return (
    <div
      style={{
        backgroundColor: 'white',
        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
        borderRadius: '8px',
        padding: '20px',
        maxWidth: '500px',
        margin: '50px auto',
        textAlign: 'left',
      }}
    >
      <h2 style={{ marginBottom: '20px', color: '#4CAF50' }}>Edit Todo</h2>
      <input
        style={{
          width: '100%',
          padding: '10px 15px',
          marginBottom: '10px',
          border: '1px solid #ccc',
          borderRadius: '4px',
          boxSizing: 'border-box',
        }}
        type="text"
        placeholder="Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <textarea
        style={{
          width: '100%',
          padding: '10px 15px',
          marginBottom: '10px',
          border: '1px solid #ccc',
          borderRadius: '4px',
          resize: 'none',
          boxSizing: 'border-box',
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
          resize: 'none',
          boxSizing: 'border-box',
        }}
        value={priority}
        onChange={(e) => setPriority(e.target.value)}
      >
        <option value="High">High</option>
        <option value="Medium">Medium</option>
        <option value="Low">Low</option>
      </select>;
      <input
        style={{
          width: '100%',
          padding: '10px 15px',
          marginBottom: '10px',
          border: '1px solid #ccc',
          borderRadius: '4px',
          resize: 'none',
          boxSizing: 'border-box',
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
          marginRight: '10px',
        }}
        onClick={handleSave}
      >
        Save Changes
      </button>
      <button
        style={{
          backgroundColor: '#ccc',
          color: 'black',
          border: 'none',
          padding: '10px 20px',
          borderRadius: '4px',
          cursor: 'pointer',
        }}
        onClick={() => navigate('/')}
      >
        Cancel
      </button>
    </div>
  );
};