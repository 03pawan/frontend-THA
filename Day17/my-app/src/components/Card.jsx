import React from 'react';

function Card({title,num}){
    return (
        <div className="card">
            <h1>{title}</h1>
            <h2>You have consumed {num} calories today.</h2>
        </div>
    );
}

export default Card;