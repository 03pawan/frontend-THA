import './../App.css';
import React,{useState} from 'react';

function Counter(){
    const [count, setCount] = useState(0);
    function increase(){
        setCount(count + 1);
        console.log(count);
    }

     function decrease(){
        setCount(count - 1);
        console.log(count);
    }
    
    return(
        <div className='counter'>
            <h1 style={{textAlign:"center",backgroundColor: "#6a040f"}}>{count}</h1>
            <button onClick = {increase}>+</button>
            <button onClick = {decrease}>-</button>
        </div>
    );
}

export default Counter;