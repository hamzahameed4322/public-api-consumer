import axios from 'axios';


const axiosInstance = axios.create({
  baseURL: 'https://restcountries.com/v3.1',
  timeout: 10000, // 10 seconds timeout agar API bohot slow ho
  headers: {
    'Content-Type': 'application/json',
  },
});

export default axiosInstance;