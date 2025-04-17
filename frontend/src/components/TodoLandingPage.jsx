import React, { useState } from 'react';
import { CreateTodo } from './CreateTodo';
import { RenderTodo } from './Todos';

export const TodoLandingPage = ({ todos, fetchTodos, addTodo, handleLogout, user }) => {
  const [searchQuery, setSearchQuery] = useState(''); // State for search input
  const [filterStatus, setFilterStatus] = useState('All'); // State for filter option

  // Filter todos based on the search query and filter status
  const filteredTodos = todos.filter((todo) => {
    const matchesSearch =
      todo.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      todo.description.toLowerCase().includes(searchQuery.toLowerCase());

    if (filterStatus === 'Completed') {
      return matchesSearch && todo.completed;
    } else if (filterStatus === 'Not Completed') {
      return matchesSearch && !todo.completed;
    }
    return matchesSearch; // Default to "All"
  });

  return (
    <div>
      {/* Navbar */}
      <nav
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          backgroundColor: '#4CAF50',
          color: 'white',
          padding: '10px 20px',
        }}
      >
        <h1 style={{ margin: 0 }}>Welcome to Your Todo Dashboard</h1>
        <div style={{ display: 'flex', alignItems: 'center' }}>
          {/* User Account Button */}
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              marginRight: '20px',
              backgroundColor: '#fff',
              color: '#4CAF50',
              padding: '5px 10px',
              borderRadius: '20px',
              cursor: 'pointer',
            }}
          >
            <img
              src={user?.avatar || 'https://via.placeholder.com/30'}
              alt="User Avatar"
              style={{
                width: '30px',
                height: '30px',
                borderRadius: '50%',
                marginRight: '10px',
              }}
            />
            <span style={{ fontWeight: 'bold' }}>{user?.username || 'Guest'}</span>
          </div>

          {/* Logout Button */}
          <button
            onClick={handleLogout}
            style={{
              backgroundColor: '#ff4d4d',
              color: 'white',
              border: 'none',
              padding: '10px 20px',
              borderRadius: '5px',
              cursor: 'pointer',
            }}
          >
            Logout
          </button>
        </div>
      </nav>

      {/* Search Bar */}
      <div style={{ padding: '20px' }}>
        <input
          type="text"
          placeholder="Search todos..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          style={{
            width: '100%',
            padding: '10px',
            border: '1px solid #ccc',
            borderRadius: '5px',
            marginBottom: '20px',
          }}
        />
      </div>

      {/* Filter Buttons */}
      <div style={{ display: 'flex', justifyContent: 'space-between', padding: '20px' }}>
        <div>
          <button
            onClick={() => setFilterStatus('All')}
            style={{
              backgroundColor: filterStatus === 'All' ? '#4CAF50' : '#ccc',
              color: filterStatus === 'All' ? 'white' : 'black',
              border: 'none',
              padding: '10px 20px',
              borderRadius: '5px',
              cursor: 'pointer',
              marginRight: '10px',
            }}
          >
            All
          </button>
          <button
            onClick={() => setFilterStatus('Completed')}
            style={{
              backgroundColor: filterStatus === 'Completed' ? '#4CAF50' : '#ccc',
              color: filterStatus === 'Completed' ? 'white' : 'black',
              border: 'none',
              padding: '10px 20px',
              borderRadius: '5px',
              cursor: 'pointer',
              marginRight: '10px',
            }}
          >
            Completed
          </button>
          <button
            onClick={() => setFilterStatus('Not Completed')}
            style={{
              backgroundColor: filterStatus === 'Not Completed' ? '#4CAF50' : '#ccc',
              color: filterStatus === 'Not Completed' ? 'white' : 'black',
              border: 'none',
              padding: '10px 20px',
              borderRadius: '5px',
              cursor: 'pointer',
            }}
          >
            Not Completed
          </button>
        </div>
      </div>

      {/* Main Content */}
      <div style={{ display: 'flex', padding: '20px' }}>
        {/* Create Todo Card */}
        <div style={{ flex: '0 0 300px', marginRight: '20px' }}>
          <CreateTodo addTodo={addTodo} />
        </div>

        {/* Render Filtered Todos */}
        <div style={{ flex: '1' }}>
          <RenderTodo todos={filteredTodos} fetchTodos={fetchTodos} />
        </div>
      </div>
    </div>
  );
};