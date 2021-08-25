import React, {useState, useContext} from 'react';
import './App.css';
import ThemeContext from './ThemeContext';
import ThemeToggle from './ThemeToggle';


const App = () => {
  const [counter, setCounter] = useState<number | null>(null);
  const [theme, setTheme] = useState<boolean>(false);
  return (
    <ThemeContext.Provider value={{theme, setTheme}}>
        <div className="App">
         <h1>Hello</h1>
         <ThemeToggle></ThemeToggle>
        </div>
    </ThemeContext.Provider>
    
  );
}

export default App;
