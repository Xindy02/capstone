import axios from 'axios';
import { API_URL } from '../utils/constants';


const api = axios.create({
    baseURL: API_URL,
    headers: {
        'Content-Type': 'application/json',
    },
});


// Add a request interceptor to include the JWT token in the headers
api.interceptors.request.use((config) => {
    const token = localStorage.getItem('token');
    if (token) {
        config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
});

export const register = async (userData) => {
    const response = await api.post('/auth/register', userData);
    return response.data;
};


export const login = async (credentials) => {
    const params = new URLSearchParams();
    params.append('username', credentials.username);
    params.append('password', credentials.password);

    const response = await api.post('/auth/login', params, {
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
        },
    });
    return response.data;
};


export const getProtectedData = async () => {
    const response = await api.get('/auth/me');
    return response.data;
};

export default api;