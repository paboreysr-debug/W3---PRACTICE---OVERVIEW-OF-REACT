import { useState } from 'react'
import './App.css'


function TodoItem({ text, onRemove }) {
  return (
    <li>
      {text} 
      <button onClick={onRemove} style={{ marginLeft: '10px' }}>
        Delete
      </button>
    </li>
  );
}

function App() {
  const [input, setInput] = useState("");
  const [list, setList] = useState(["Eat", "Sleep", "Code"]);

  
  const addTask = () => {
    if (input.trim() !== "") {
      setList([...list, input]); 
      setInput("");
    }
  };

  
  const deleteTask = (index) => {
  
    setList(list.filter((_, i) => i !== index));
  };

  return (
    <div style={{ padding: '20px' }}>
      <h1>My To-Do List</h1>

      <div className="input-container">
        <input 
          value={input} 
          onChange={(e) => setInput(e.target.value)} 
          placeholder="What needs to be done?"
        />
        <button onClick={addTask}>Add Task</button>
      </div>

      <ul>
        {list.map((task, index) => (
          
          <TodoItem 
            key={index} 
            text={task} 
            onRemove={() => deleteTask(index)} 
          />
        ))}
      </ul>
    </div>
  );
}

export default App;