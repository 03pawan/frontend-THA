import React,{useState} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import './App.css';
import {reducerType} from './reducers';
import {addNote, deleteNote} from './actions'
function App() {
  const notes = useSelector((state: reducerType) => state.note);
  const dispatch = useDispatch();
  const [input,setInput] = useState<string>("")
  return (
    <div className="App">
      <div className="input">
        <input type='text' value={input} onChange={(e)=>{setInput(e.target.value)}}/>
        <button onClick={()=>{
          dispatch(addNote(input));
          setInput("");
        }}>Add</button>
      </div>
      <div className="notes">
        {notes.length ? 
        <div>
        {notes.map((note:string, index:number)=>(
          <div key={index}>
            <h3>{note}</h3>
            <button onClick={()=>{
              dispatch(deleteNote(index));
            }}>Delete</button>
          </div>
        ))} </div>
        : <h3>Click to ADD Notes</h3>}
     
      </div>
    </div>
  );
}

export default App;
