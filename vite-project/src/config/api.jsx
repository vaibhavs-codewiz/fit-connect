// src/config/api.js
import axios from 'axios';

const api = axios.create({
    baseURL: 'https://mefit-jbad.onrender.com', // Spring Boot backend URL
    headers: {
        'Content-Type': 'application/json',
    },
    withCredentials: false, // Change to true only if you’re using cookies or sessions
});

export default api;
