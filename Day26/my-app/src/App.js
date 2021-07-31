import "./index.css"
import {changeName, changeEmail} from "./actions"
import {useDispatch, useSelector} from 'react-redux';


function App() {
  const Name = useSelector((state)=>state.inputName);
  const Email = useSelector((state)=>state.inputEmail);
  const dispatch = useDispatch();
  return (
    <div className="App">
      <h3>Input</h3>
      <input placeholder="Name" onChange={(e)=>{
        dispatch(changeName(e.target.value));
      }}></input>
      <input placeholder="Email" onChange={(e)=>{
        dispatch(changeEmail(e.target.value));
      }}></input>
      <h3>Data</h3>
      <p>Username : <span>{Name}</span></p>
      <p>Email : <span>{Email}</span></p>
    </div>
  );
}

export default App;
