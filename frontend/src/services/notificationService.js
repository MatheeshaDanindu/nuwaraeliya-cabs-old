import axios from 'axios';

const API_GATEWAY_URL = 'http://localhost:5000/notification';

export const sendNotification = async (userId, message) => {
    return axios.post(`${API_GATEWAY_URL}/send`, { userId, message });
};

export const getUserNotifications = async (userId) => {
    return axios.get(`${API_GATEWAY_URL}/user/${userId}`);
};
