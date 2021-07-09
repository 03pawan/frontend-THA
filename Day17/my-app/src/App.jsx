import Card from './components/Card'
import './App.css';

function App() {
  return (
    <div className="container">
      <Card title="Pizza" num=" 56 "/>
      <Card title="Burger" num=" 69 "/>
      <Card title="Coke" num=" 500 "/>
      <Card title="Brownie" num=" 180 "/>
      <Card title="Fried Rice" num=" 90 "/>
      <Card title="Lasagna" num=" 200 "/>
      <Card title="Pani Puri" num=" 10 "/>
    </div>
  );
}

export default App;
