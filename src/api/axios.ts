import axios from 'axios';

export const api = axios.create({
  baseURL: 'https://ip-194-99-21-145-139178.vps.hosted-by-mvps.net/api/v1',
  headers: {
    'Content-Type': 'application/json',
  },
  timeout: 10000,
});

api.interceptors.response.use(
  (response) => response,
  (error) => {
    console.error('API Error:', error.response?.data?.message || error.message);
    return Promise.reject(error);
  },
);
