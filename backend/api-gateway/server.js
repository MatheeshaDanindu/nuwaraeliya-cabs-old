const express = require('express');
const { createProxyMiddleware } = require('http-proxy-middleware');
const cors = require('cors');
require('dotenv').config();

const app = express();
app.use(cors());
app.use(express.json());

// Proxy routes to microservices
const services = {
    auth: 'http://localhost:5001',
    booking: 'http://localhost:5002',
    vehicle: 'http://localhost:5003',
    driver: 'http://localhost:5004',
    payment: 'http://localhost:5005',
    notification: 'http://localhost:5006',
    analytics: 'http://localhost:5007',
};

Object.keys(services).forEach(service => {
    app.use(`/${service}`, createProxyMiddleware({ target: services[service], changeOrigin: true }));
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`API Gateway running on port ${PORT}`));
