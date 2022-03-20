const axios = require('axios');

export const apiclient  = axios.create({
    baseURL: "http://127.0.0.1:8080/",
    headers: {
        'Content-Type': 'application/json',
      },
    withCredentials:true
});

  
