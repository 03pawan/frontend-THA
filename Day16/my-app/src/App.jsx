import './styles.css';

const divs = [];
const rowDiv = [];

for(let i=0;i<8;i++){
    divs.push(<div className="box"></div>);
}

for(let j=0;j<8;j++){
    rowDiv.push(<div className= "Row">{divs}</div>);
}

function MemeCard() {
    return ( <div className = 'card' >
        <img src = "https://res.cloudinary.com/practicaldev/image/fetch/s--2wFgQj7M--/c_limit%2Cf_auto%2Cfl_progressive%2Cq_auto%2Cw_880/https://dev-to-uploads.s3.amazonaws.com/i/k6kbp8z1xftgpeu3pb2q.jpg" className = "image" alt = "Failed" ></img> 
        <h2 > React Card </h2> 
        <p > Meme Card </p> 
        </div>);
    }

    function ChessBoard() {
        return ( <div className = "chess" >
            {rowDiv}
            </div>
        );
    }

    export {MemeCard,ChessBoard};