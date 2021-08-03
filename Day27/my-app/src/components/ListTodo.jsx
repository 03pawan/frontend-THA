import { useDispatch,useSelector } from "react-redux";
import {delItem} from '../actions'
import  '../index.css'


const ListTodo = () =>{
    const disptach = useDispatch();
    const todos = useSelector(state => state.todo);
    return(
        <div className="deldiv">
            {todos.map((todo,i)=>(
                <div key={i} className="todos">
            <h3 style={{display:"inline"}} className = {`h3${i}`} >{todo.title}
            </h3>
            <button type="button" className={`btn btn-outline-success btn-sm btn-${i}`} onClick={
                ()=>{
                   document.querySelector(`.h3${i}`).style.textDecoration = "line-through";
                    document.querySelector(`.btn-${i}`).setAttribute("disabled","true");
                }
            }>Done</button>
            <button type="button" className="btn btn-outline-danger btn-sm" onClick={()=>{
                disptach(delItem(i))
            }}>Delete</button>
            
        </div>
            ))}        
        
        </div>
    );
};

export default ListTodo;