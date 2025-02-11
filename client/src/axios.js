// src/axios.js
import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: 'http://localhost:4000', // Base URL for your backend
  headers: {
    'Content-Type': 'application/json',
  },
});

export default axiosInstance;
