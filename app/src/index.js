import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

const baseURL = "https://api.openweathermap.org/data/2.5/"

ReactDOM.render(
  <React.StrictMode>
    <App baseURl={baseURL}/>
  </React.StrictMode>,
  document.getElementById('root')
);