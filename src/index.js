import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
const axios = require('axios');

axios.defaults.baseURL ='http://127.0.0.1:8080/';
axios.defaults.withCredentials = true;
axios.defaults.credentials =  'include';

ReactDOM.render(
    <App />,
  document.getElementById('root')
);

