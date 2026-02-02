import { useState } from 'react'
import './App.css'

function App() {
  const [input,setInput] = useState("");
  const [list ,setList ] = useState(["Eat","Sleep","Code"]);
  const addTask = ()=>{
    setList([...list,input]);
    setInput("");
  }
  return (
    <>
      <div>
        <input onChange={(e) => setInput(e.target.value)} />
        <button onClick={addTask}></button>
        <button onClick={addTask}>Add</button>
        <ul>
          {list.map((task,index) =>
            <li key = {index}>{task}</li>
          )}
        </ul>
      </div>
    </>
  )
}

export default App
