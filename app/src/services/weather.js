import axios from 'axios';

const apiKey = process.env.REACT_APP_API_KEY
const baseURL = "api.openweathermap.org/data/2.5/"

//api.openweathermap.org/data/2.5/weather?q=BRA&appid=
//Need to fix the request

const getWeatherByCountry = async (country) => {
    const response = await axios.request({
        url: `${baseURL}weather?q=${country}&appid=${apiKey}`
    })
    console.log(response)
}

export default getWeatherByCountry;