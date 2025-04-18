// src/config/api.js
import axios from 'axios';

const api = axios.create({
    baseURL: 'http://localhost:9999', // Spring Boot backend URL
    headers: {
        'Content-Type': 'application/json',
    },
    withCredentials: false, // Change to true only if you’re using cookies or sessions
});

export default api;
