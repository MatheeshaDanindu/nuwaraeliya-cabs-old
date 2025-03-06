import axios from 'axios';

const API_GATEWAY_URL = 'http://localhost:5000/auth';  // Using API Gateway

export const login = async (email, password) => {
    return axios.post(`${API_GATEWAY_URL}/login`, { email, password });
};

export const register = async (name, email, password) => {
    return axios.post(`${API_GATEWAY_URL}/register`, { name, email, password });
};
