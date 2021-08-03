import { useState } from "react";
import { useDispatch } from "react-redux";
import {addItem} from '../actions'

const AddTodo = () => {
    const [item, setItem] = useState("")
    const dispatch = useDispatch();
    return(
        <div className="Todo">
            <input placeholder="Add ToDo" value={item} onChange={(e)=>{
                setItem(e.target.value);
            }}></input>
            <button type="button" class="btn btn-outline-primary" onClick={()=>{
                dispatch(addItem({
                    title: item,
                    done: false 
            }))
                setItem("")
                }}>Add</button>
        </div>
    );
}

export default AddTodo;