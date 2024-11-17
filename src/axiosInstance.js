// axiosConfig.js
import axios from 'axios';
const API_KEY = import.meta.env.VITE_TMDB_ACCESS_TOKEN ;
const API_URL = import.meta.env.VITE_TMDB_API_URL;
const axiosInstance = axios.create({
    baseURL: `${API_URL}`,
    headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${API_KEY}`,
    },
    timeout: 10000,
});

export default axiosInstance;
