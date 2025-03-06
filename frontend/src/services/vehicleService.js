import axios from 'axios';

const API_GATEWAY_URL = 'http://localhost:5000/vehicle';

export const getAllVehicles = async () => {
    return axios.get(`${API_GATEWAY_URL}/all`);
};
