import "./App.css"
function App() {
  const tasks = ["Learn jsx", "Create component", "Master state"]
  return (
    <div className="App">
      <h1>My Task List</h1>
      <p> Total tasks: {tasks.length}</p>
      <ul>
        <li>{tasks[0]}</li>
        <li>{tasks[1]}</li>
        <li>{tasks[2]}</li>
      </ul>
    </div>
  )
}
export default App