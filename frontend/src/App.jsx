import { useState, useEffect } from 'react';
import axios from 'axios';
import { CreateTodo } from './components/CreateTodo';
import { RenderTodo } from './components/Todos';
import { FetchTodo } from './components/FetchComponents';

function App() {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:3000/todos")
      .then((res) => {
        setTodos(res.data); // Ensure the response is an array
      })
      .catch((error) => console.error('Error fetching todos:', error));
  }, []);

  const addTodo = (newTodo) => {
    setTodos((prevTodos) => (Array.isArray(prevTodos) ? [...prevTodos, newTodo] : [newTodo]));
  };

  return (
    <div>
      <CreateTodo addTodo={addTodo} />
      <RenderTodo todos={todos} />
      <FetchTodo />
    </div>
  );
}

export default App;