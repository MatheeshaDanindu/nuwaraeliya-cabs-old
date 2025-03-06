import axios from 'axios';

const API_GATEWAY_URL = 'http://localhost:5000/analytics';

export const getBookingAnalytics = async () => {
    return axios.get(`${API_GATEWAY_URL}/bookings`);
};

export const getRevenueAnalytics = async () => {
    return axios.get(`${API_GATEWAY_URL}/revenue`);
};
