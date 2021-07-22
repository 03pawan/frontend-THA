

const Template = ({template, setMeme}) =>{
    return(
        <div className="templates">
            {template.map(temp=>(
                <div key={temp.id} className='template' onClick={()=>{
                    setMeme(temp)
                    }}>
                    <div className='image' style={{backgroundImage:`url(${temp.url})` }} >                   </div>
                </div>
            )
            )}
        </div>
    )
}

export default Template;