import AddTodo from "./components/AddToDo";
import './index.css'
import ListTodo from "./components/ListTodo";



function App() {
  return (
    <div className="App">
    <h1>ToDo List</h1>
      <AddTodo/>
      <ListTodo/> 
    </div>
  );
}

export default App;
