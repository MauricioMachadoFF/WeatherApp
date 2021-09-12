import React, {useState} from 'react'
import getWeatherByCountry from '../../services/weather'
import {countries} from '../../data';

function SearchBar() {
    
    const [country, setCountry] = useState('')

    const getWeatherInfo = () => {
        getWeatherByCountry(country);
    }
    
    return (
        <div>
            <select  onChange={e => setCountry(e.target.value)}>
                {countries.map((country) => 
                    <option value={country.name}>{country.name}</option>
                )}
            </select>
            <button onClick={getWeatherInfo}> Get Api Key</button>
        </div>
    )
}

export default SearchBar
