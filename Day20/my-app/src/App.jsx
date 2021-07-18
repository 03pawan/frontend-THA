import React,{useState} from 'react';
import Card from './components/Card'
import './App.css';

function App() {
  
  const menuItems = [
  ['Pizza', 56],
  ['Burger', 69],
  ['Coke', 500],
  ['Browne', 180],
  ['Fried Rice', 90],
  ['Lasagna', 200],
  ['Pani Puri', 10]
];

const [menu, setMenu] = useState(menuItems);

  return (
    <div className="container">
      <Card menu={menu} setCards={setMenu}/>
    </div>
  );
}

export default App;
