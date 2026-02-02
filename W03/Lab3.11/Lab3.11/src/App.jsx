import { useState } from 'react'
import './App.css'


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

      <input 
        value={input} 
        onChange={(e) => setInput(e.target.value)} 
        placeholder="New task..."
      />
      <button onClick={addTask}>Add</button>

      <ul>
        {list.map((item, index) => (
          <li key={index}>
            {item} 
            <button onClick={() => deleteTask(index)} style={{ marginLeft: '10px' }}>
              Done
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;