import React,{useState,useEffect} from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import useCallApi from "./callApi";



export default function RouteButtons() {
    const facts = useCallApi();
    // console.log(facts);
    return (
    <div>
    <Router>
        <div className="container">
        <div className="inner-container">
            <Link to="/chucknorris">
                <button type="button" className="btn btn-outline-primary" onClick={()=>{facts.fetchChuckNorris()}}>Chuck Norris Jokes </button>
            </Link>
        </div>
        <div className="inner-container">
            <Link to="/country"><button type="button" className="btn btn-outline-secondary" >Country Data</button></Link>
        </div>    
        <div className="inner-container">
            <Link to="/"><button type="button" className="btn btn-outline-danger" onClick={facts.clearAllfetch()}>Clear All</button></Link>
        </div>
        </div>
        <hr/>
        <Switch>
          <Route exact path="/chucknorris">
            <Jokes facts={facts}/>
          </Route>
          <Route path="/country">
            <Country facts={facts}/>
          </Route>
          <Route path="/">
            <clearAll />
          </Route>
        </Switch>
      
    </Router>
    </div>
  );
}


function Jokes({facts}) {
    return (
    <div className="jokes-container">
      {
          facts.ChuckNorrisfact.map((fact,index)=>{
            return  <h5 key={index}>{fact}</h5>
          })
      }
    </div>
  );
}

// function Country({facts}
//     ) {
//   return (
//     <div>
//       <h2>{facts.Countryfact.name}</h2>
//     </div>
//   );    
// }

function Country({facts}){
    
    const [CountryName, setCountryName] = useState()
    return(
        <div className="country-container">
             <label>Enter Country's Name</label><br/>
             <input required type="text" placeholder="Country Name" onChange={(e)=>{setCountryName(e.target.value)}}></input>
             <button type="button" className="btn btn-outline-info" 
             onClick={()=>{
                 facts.fetchCountry(CountryName);
                 }}>Search</button>
            {display(facts.Countryfact)}
        </div>
    );
}

function display(Countryfact){
   console.log(Countryfact);
    return (
        
        <div className="Countryfacts">
            <h2>{Countryfact.name}</h2>
            <h5>Capital: {Countryfact.capital}</h5>
            <h5>Region: {Countryfact.region}</h5>
            <h5>Demonym: {Countryfact.demonym}</h5>
            <h5>Languages: {Countryfact.languages.map((lang,i)=>{
                return <span key={i}>{lang.nativeName} </span>
            })}</h5>
            <h5>Currencies: {Countryfact.currencies.map((cur,i)=>{
                return <span key={i}>{cur.code} {cur.symbol}</span>
            })}</h5>
            <img src={`${Countryfact.flag}`} alt="Flag " className="image"/>
        </div>
    );
}

function clearAll() {
  return (
    <div>
      <h2>Dashboard</h2>
    </div>
  );
}
