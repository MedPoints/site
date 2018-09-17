const config = require('config');
const axios = require('axios');
const BLOCKCHAIN_API_URL = config.get('BLOCKCHAIN_API_URL');
const API_URL = config.get('API_URL');

exports.generate = async (req, res) => {
    const request = await axios.post(`${BLOCKCHAIN_API_URL}/api/blockchain/wallets`);
    const result = request.data;
    res.setHeader('Content-Type', 'application/json');
    res.send(JSON.stringify({ status: 200, ...result }));
};

exports.register = async (req, res) => {
    const {
        publicKey,
        privateKey,
        email,
        firstName,
        lastName,
    } = req.body;

    const request = await axios.post(`${API_URL}/api/users/register`, {...req.body});
    const result = request.data;
    res.setHeader('Content-Type', 'application/json');
    res.send(JSON.stringify({ status: 200, ...result }));
};

exports.authenticate = async (req, res) => {
    const {
        publicKey,
        privateKey,
    } = req.body;

    const request = await axios.post(`${API_URL}/api/users/auth`, {...req.body});
    const result = request.data;
    res.setHeader('Content-Type', 'application/json');
    res.send(JSON.stringify({ status: 200, ...result }));
};