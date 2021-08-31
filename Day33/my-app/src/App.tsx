import React, {useState, useContext} from 'react';
import './App.css';
import ThemeContext from './ThemeContext';
import ThemeToggle from './ThemeToggle';
import TodoList from './TodoList';

interface TodoType {
  title : string,
  done : boolean;
}

const App = () => {
  const [counter, setCounter] = useState<number | null>(null);
  const [theme, setTheme] = useState<boolean>(false);
  const [todos, setTodos] = useState<TodoType[]>([]);
  const [input, setInput] = useState<string>("");
  return (
    <ThemeContext.Provider value={{theme, setTheme}}>
        <div className={theme ? "App dark" : "App light"}>
            <div className="todos">
              <input type="text" value={input} onChange={(e)=>{setInput(e.target.value)}}/>
              <button onClick={
                () => {
                  setTodos([...todos, {title: input, done:false}])
                }
              }>Add Todo</button>
           {
             todos.map((todo,index) => {
               return <TodoList title={todo.title} done={todo.done}/>
             })
           }
         </div>
         <ThemeToggle></ThemeToggle>
        </div>
    </ThemeContext.Provider>
    
  );
}

export default App;
