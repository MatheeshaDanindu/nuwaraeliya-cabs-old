import axios from 'axios';

const API_GATEWAY_URL = 'http://localhost:5000/booking';

export const createBooking = async (userId, vehicleId, driverId, date, time) => {
    return axios.post(`${API_GATEWAY_URL}/create`, { userId, vehicleId, driverId, date, time });
};

export const getUserBookings = async (userId) => {
    return axios.get(`${API_GATEWAY_URL}/user/${userId}`);
};
