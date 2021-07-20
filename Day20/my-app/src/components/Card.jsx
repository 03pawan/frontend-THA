import React from 'react';

function CardsList({ title, num, index, setCards, cards }){
    function newCard(){
        var newCards = cards.filter((card,i)=> i !== index);
        setCards(newCards);
    }

    return (
        <div className="card">
            <h1>{title}</h1>
            <h2>You have consumed {num} calories today.</h2>
            <button onClick = {newCard}>Delete</button>
        </div>
    );
}

export default function Card({menu,setCards}){
    return(
        <div>
            {menu.length !==0 ? (
                menu.map((item,index)=>{
                    return (
                        <CardsList 
                        title={item[0]}
                        num={item[1]}
                        key={index}
                        index={index}
                        setCards={setCards}
                        cards={menu}    
                        />
                    );
                })
            ): (
                <div class="noItem">Empty List</div>
            )}
        </div>
    );
};
