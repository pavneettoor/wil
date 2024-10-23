import axios from 'axios';

const API = axios.create({
  baseURL: 'http://127.0.0.1:5000', // Backend URL
});

// Adding token to each request if available
API.interceptors.request.use((req) => {
  const token = localStorage.getItem('token');
  if (token) {
    req.headers.Authorization = `Bearer ${token}`;
  }
  return req;
});

export const registerUser = (formData) => API.post('/register', formData);
export const loginUser = (formData) => API.post('/login', formData);
