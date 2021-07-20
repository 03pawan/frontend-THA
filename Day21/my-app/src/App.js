import './styles.css';
import { useState } from 'react';


function AddItems({addItem}){
    
    function handleSubmit(e){
        e.preventDefault();
        addItem({title,calorie});
        setTitle('');
        setCalorie('');
    }

    const [title,setTitle]=useState("");
    const [calorie,setCalorie]=useState("");
    return(
        <form  onSubmit={handleSubmit}>
        
            <div className='AddList'>
                <input required type="text" value={title} name="title" id="title" placeholder="Enter food here" onChange={e=>setTitle(e.target.value)}/>
                <input required type="number" value={calorie} name="calorie" id=" calorie" placeholder="Enter Calorie" onChange={e=>setCalorie(e.target.value)}/>
            </div>
        
        <button type="submit" className="AddBtn btn mx-3 btn-primary" >Add Item</button>
        </form>
    );
}

function RenderItems({item,index,editItem,delItem}){
    const [isEdit,setEdit] = useState(false);

    return(
        <div className='inner-container'>
            <div className='not-card'>
                {isEdit?(
                    <input type="text"  name="title" id="title" value={item.title} placeholder="Enter food here" onChange={e=>editItem({title:e.target.value},index)}/>
                ):(
                    <h2>{item.title}</h2>
                )}  

                {isEdit?(
                    <input type="number"  name="calorie" id=" calorie" value={item.calorie} placeholder="Enter Calorie" onChange={e=>editItem({calorie:e.target.value},index)}/>
                ):(
                    <p>You have consumed {item.calorie} calories today.</p>
                )}

            </div>
            <button required className="btn btn-danger" onClick={()=>delItem(index)}>Delete</button>
            <button required className="btn mx-3 btn-primary" onClick={() => setEdit(!isEdit)}>
						{isEdit ? 'Done' : 'Edit'}</button>
        </div>
    );

}

export default function App(){
    
    const [items,setItems]  = useState([]);    
    
    function addItem(item){
        setItems([...items,item]);
    }

    function delItem(index){
        setItems(items.filter((item,i)=>i!==index));
    }

    function editItem(newItem,index){
        setItems(
            items.map((item,i)=>(i===index ? {...item,...newItem}:item)));
    }
    
    return (
        <div className='first-container'>
            <AddItems addItem={addItem}/>
            {items.length ===0 ? 
                (<h2 style={{textAlign:"center"}}>Empty List</h2>):
                (items.map((item,index)=>(<RenderItems
                    item={item}
                    index={index}
                    key={index}
                    editItem={editItem}
                    delItem={delItem}
                />)))}
        </div>
    );
}