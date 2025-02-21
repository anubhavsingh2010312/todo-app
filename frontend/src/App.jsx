import { useState, useEffect } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import { CreateTodo } from './components/CreateTodo';
import { RenderTodo } from './components/Todos';

function App() {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3000/todos")
      .then(async (res) => {
        const json = await res.json();
        if (Array.isArray(json)) {
          setTodos(json); // Ensure the response is an array
        } else {
          console.error('Unexpected response format:', json);
        }
      })
      .catch((error) => console.error('Error fetching todos:', error));
  }, []);

  return (
    <div>
      <CreateTodo />
      <RenderTodo todos={todos} />
    </div>
  );
}

export default App;