import './index.css'
import { useState, useEffect } from 'react';

var flag = 0;

function App() {

  const [placeData, setPlaceDate] = useState({});
  const [place, setPlace] = useState("Bangalore");
  const updatePlaceData = () => {
  fetch(`https://api.weatherapi.com/v1/current.json?key=e3f10f87064346f98bb135349210508&q=${place}`)
  .then(res=>res.json())
  .then(data => {
    setPlaceDate(data);
  })}
  
 
  return (
    <div className="App">
      <div className="container">
        <div className="row">
          <div className="col-12 form">
            <input type="text" onChange={(e)=>{setPlace(e.target.value)}}></input>
            <button className="btn btn-primary" onClick={updatePlaceData}>Submit</button>
          </div>
          <div className="offset-md-4 col-4 ">
            <div className="card">
              {placeData.location ? (
                <div>
                <img src={placeData.current.condition.icon} alt="Icon"></img>
                <div className="temp">{placeData.current.temp_c}°C</div>
                <div className="cond">{placeData.current.condition.text}</div>
                <div className="place">{placeData.location.name}</div>
                
                <div className="container">
                  <div className="row whp
                  ">
                    <div className="col">
                      <div className="title">Wind Now</div> 
                      <div className="data">{placeData.current.wind_kph}<span className="unit">KM</span></div> 
                    </div>
                    <div className="col">
                      <div className="title">Humidity</div> 
                      <div className="data">{placeData.current.humidity}<span className="unit">%</span></div> 
                    </div>
                    <div className="col">
                      <div className="title">Precipitation</div> 
                      <div className="data">{placeData.current.precip_in}<span className="unit">%</span></div> 
                    </div>
                  </div>
                </div>
                  
                </div>
              ):<h2> Place Not Found </h2>}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
