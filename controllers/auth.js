const config = require('config');
const axios = require('axios');
const API_URL = config.get('BLOCKCHAIN_API_URL');

exports.generate = async (req, res) => {
    const request = await axios.post(`${API_URL}/api/blockchain/wallets`);
    const result = request.data;
    res.setHeader('Content-Type', 'application/json');
    res.send(JSON.stringify({ status: 200, ...result }));
};