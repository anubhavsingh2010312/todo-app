import { useState, useEffect } from 'react';
import axios from 'axios';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Signup } from './components/Signup';
import { Login } from './components/Login';
import { LandingPage } from './components/LandingPage';
import { TodoLandingPage } from './components/TodoLandingPage';
import { EditTodo } from './components/EditTodo';

function App() {
  const [todos, setTodos] = useState([]);
  const [token, setToken] = useState(() => {
    // Retrieve the token from localStorage when the app loads
    return localStorage.getItem('token') || null;
  });
  const [user, setUser] = useState(() => {
    const storedUser = localStorage.getItem('user');
    try {
      return storedUser ? JSON.parse(storedUser) : null; // Parse only if the value exists
    } catch (error) {
      console.error('Error parsing user from localStorage:', error);
      return null; // Return null if parsing fails
    }
  });

  const fetchTodos = () => {
    axios.get("http://localhost:3000/todos", {
      headers: { Authorization: `Bearer ${token}` }, // Pass token in headers if needed
    })
      .then((res) => {
        setTodos(res.data); // Ensure the response is an array
      })
      .catch((error) => console.error('Error fetching todos:', error));
  };

  useEffect(() => {
    if (token) {
      fetchTodos(); // Fetch todos only if the user is logged in
    }
  }, [token]); // Fetch todos whenever the token changes

  const addTodo = async (newTodo) => {
    try {
      const response = await axios.post("http://localhost:3000/todos", newTodo, {
        headers: { Authorization: `Bearer ${token}` }, // Pass token in headers if needed
      });
      setTodos((prevTodos) => [...prevTodos, response.data]); // Append the saved todo from the backend
    } catch (error) {
      console.error("Error adding todo:", error);
    }
  };

  const handleLogin = (newToken, userData) => {
    setToken(newToken); // Set the token in state
    setUser(userData); // Set user data if needed
    localStorage.setItem('token', newToken); // Save the token in localStorage
    localStorage.setItem('user', JSON.stringify(userData)); // Save user data in localStorage
  };

  const handleLogout = () => {
    setToken(null); // Clear the token in state
    setTodos([]); // Clear todos on logout
    localStorage.removeItem('token'); // Remove the token from localStorage
  };


  return (
    <Router>
      <Routes>
        <Route path="/" element={
          token ? <TodoLandingPage todos={todos} fetchTodos={fetchTodos} addTodo={addTodo} handleLogout={handleLogout} user={user} /> : <LandingPage />
        } />
        <Route path="/edit/:id" element={<EditTodo fetchTodos={fetchTodos} />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login setToken={handleLogin} />} />
      </Routes>
    </Router>
  );
}

export default App;