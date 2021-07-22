/* eslint-disable array-callback-return */
import './../App.css'
import { useState } from 'react';

const Meme = ({meme,setMeme}) => {

    const [form,setForm] = useState({
        temp_id: meme.id,
        username:'PawanKumar9',
        password:'NLWW8q2PnrUXwf!',
        boxes: [],
    });

    const generateMeme = () => {
        let url = `https://api.imgflip.com/caption_image?template_id=${form.temp_id}&username=${form.username}&password=${form.password}`;
        form.boxes.map((box,index) => {
            url +=  `&boxes[${index}][text]=${box.text}`;
        });

        fetch(url)
        .then(res=>res.json())
        .then(data => {
            if(data.success)
                setMeme({...meme, url: data.data.url})
        })
    }

    return (
        <div className='Meme'>
            <img src={meme.url} alt=""/>
            <div>
            
            { [...Array(meme.box_count)].map((el,index)=>(
                <input key={index}type='text' placeholder={`Meme caption ${index+1}`} 
                onChange={(e)=>{
                    const newBoxes = form.boxes;
                    newBoxes[index] = { text: e.target.value};
                    setForm({...form,newBoxes});
                }}></input> 
            ))}
            
            </div>
            <button onClick={generateMeme}>Generate</button>
            <button onClick={()=>{
                setMeme(null);
            }}>Choose template</button>
        </div>
    )
}

export default Meme;