import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: import.meta.env.DEV
    ? import.meta.env.VITE_REACT_APP_BACKEND_URL
    : 'http://localhost:3005',
});

export default axiosInstance;
