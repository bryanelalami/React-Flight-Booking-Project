import React from 'react';
import {useEffect, useState} from 'react';

const Countries = (props) => {

const [countriesList, setCountries] = useState([]);
const [error, setError] = useState(null);

    // On récupère le nom de l'aéroport d'un fichier JSON
    useEffect( () =>{
        fetch("https://raw.githubusercontent.com/dace/Airports-Countries-JSON/master/airports_countries.json")
        .then(res => res.json())
        .then(
            (result) => {
                setCountries(result);
            },
            (error) => {
                setError(error);
            }
        );
    }, []);

    if(error){
        return(<div>Erreur lors de l'appel à l'API {error.message}</div>);
    }
    else {
        let i=0;
        return (

            // On vient mapper la liste au format JSON et on récupère le airportName
            <>
                
                    {countriesList.map(country => (
                        <option key={props.name+'_'+country.airportCode+i++} value={country.airportName}>{country.airportName} - {country.airportCode} </option>
                    ))}
            </>
            );
    }
}

export default Countries;