import {useSelector} from "react-redux";

const WeatherCard = () => {
    const theme = useSelector ((state)=>state.theme);
    const placeData = useSelector(state => state.placeData);
    return (
    <div className='container'>
        <div className='row'>
        <div className="offset-md-4 col-4 ">
            <div className={theme ? "card" : "card dark"}>
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
    );
}

export default WeatherCard;