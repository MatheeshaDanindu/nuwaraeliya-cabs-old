import axios from 'axios';

const API_GATEWAY_URL = 'http://localhost:5000/payment';

export const makePayment = async (bookingId, amount) => {
    return axios.post(`${API_GATEWAY_URL}/pay`, { bookingId, amount });
};
