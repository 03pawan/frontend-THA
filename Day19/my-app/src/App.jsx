import './App.css';
import Counter from './components/Counter'

function App(){
    return(
        <div className='container'>
            <Counter num='0' />
            <Counter num='0' />
            <Counter num='0' />
            <Counter num='0' />
        </div>
    );
}

export default App;