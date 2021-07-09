import './styles.css';

const divs = [];
const rowDiv = [];

for(let i=0;i<8;i++){
    divs.push(<div className="box"></div>);
}

for(let j=0;j<8;j++){
    rowDiv.push(<div className= "Row">{divs}</div>);
}


    function ChessBoard() {
        return ( <div className = "chess" >
            {rowDiv}
            </div>
        );
    }

export default ChessBoard;