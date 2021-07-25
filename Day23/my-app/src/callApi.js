import { useCallback, useState } from "react";

const useCallApi = (initial) => {

    const defaultFact= {
        name : "",
        capital: "",
        region: "",
        demonym: "",
        nativeName: "",
        currencies: [],
        languages: [],
        flag: ""
    }
    const [ChuckNorrisfact, setChuckNorrisFact] = useState([]);
    const [Countryfact, setCountryFact] = useState(defaultFact);
    // const [ChuckNorrisfact, setChuckNorrisFact] = useState([]);
    const fetchChuckNorrisFact = () => {
        fetch("https://api.chucknorris.io/jokes/random")
        .then(results=>results.json())
        .then(data=>{
           setChuckNorrisFact((prev)=>[...prev,data.value])
        })
    }
    //${CountryName}
    const fetchCountryFact = (CountryName) => {
        console.log(CountryName);
        fetch(`https://restcountries.eu/rest/v2/name/${CountryName}?fullText=true`)
        .then(results=>results.json())
        .then(data=>{
            
            const updateCountry = {
                name : data[0].name,
                capital : data[0].capital,
                region : data[0].region,
                demonym : data[0].demonym,
                nativeName : data[0].nativeName,
                currencies : data[0].currencies,
                languages : data[0].languages,
                flag : data[0].flag
            }
            setCountryFact(updateCountry);
        })  
        console.log(Countryfact);
    }

    const clearAllfetches = () =>{
        setChuckNorrisFact([]);
        setCountryFact(defaultFact);
    }

    return{
        ChuckNorrisfact,
        Countryfact,
        fetchChuckNorris: useCallback(()=>fetchChuckNorrisFact()),
        fetchCountry: useCallback((CountryName)=>fetchCountryFact(CountryName)),
        clearAllfetch : useCallback(()=>clearAllfetches)
    }
}

export default useCallApi;