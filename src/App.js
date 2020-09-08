import React, {useState} from 'react';
import './App.css';
// import Todo from './Todo.js'
import TodoContainer from './TodoContainer.js'


function App() {
  const [input, setInput] = useState("");
  const [todos, setTodos] = useState([])

  const addTodo = (e) => {
    e.preventDefault();

    setTodos([...todos, input]);

    console.log(todos)

    setInput("");
  }

  return (
    <div className="App">
      <h1>Todo App</h1>

      <form>
        <input value={input} onChange={e => setInput(e.target.value)} placeholder="Enter a new Todo Title"></input>
        <button onClick={addTodo}>Add a new Todo</button>
      </form>

      {/* {console.log(input)} */}

      <TodoContainer todos={todos}/>

    </div>
  );
}

export default App;
