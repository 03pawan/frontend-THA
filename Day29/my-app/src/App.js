import './index.css'

import Form from './components/Form';
import WeatherCard from './components/WeatherCard';
import { useSelector } from 'react-redux';
import ThemeToggle from './components/ThemeToggle';

function App() {

  const theme = useSelector((state)=>state.theme);
  console.log(theme);
  return (
    <div className={theme ? "App light" : "App dark" }>
      <div className="container">
        <div className="row">
          <ThemeToggle/>
          <Form />
          <WeatherCard/>
          
        </div>
      </div>
    </div>
  );
}

export default App;
