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

    const request = await axios.post(`${API_URL}/api/users/register`, {
        publicKey,
        privateKey,
        email,
        firstName,
        lastName,
    });
    const result = request.data;
    res.setHeader('Content-Type', 'application/json');
    res.send(JSON.stringify({ status: 200, ...result }));
};

exports.authenticate = async (req, res) => {
    const {
        publicKey,
        privateKey,
    } = req.body;

    res.setHeader('Content-Type', 'application/json');
    let request = {};
    try {
        request = await axios.post(`${API_URL}/api/users/auth`, {
            publicKey,
            privateKey,
        });
    } catch (err) {
        return res.send(JSON.stringify({ status: 500, ...err.response.data }));
    }
    
    const result = request.data;
    res.send(JSON.stringify({ status: 200, ...result }));
};