import axios from 'axios';

const API_GATEWAY_URL = 'http://localhost:5000/driver';

export const getAvailableDrivers = async () => {
    return axios.get(`${API_GATEWAY_URL}/available`);
};
