const config = require('config');
const axios = require('axios');
const API_URL = config.get('API_URL');
const { prepareTicketsData } = require('./../helpers/tickets');
const localization = require('./../helpers/localization').localization;


exports.addFavourites = async (req, res) => {
    const {
        id,
        type,
    } = req.body;
    const {
        MedPoints_PrivateKey,
        MedPoints_PublicKey,
    } = req.cookies;

    const data = {
        id,
        type,
    };

    const request = await axios.post(`${API_URL}/api/users/${MedPoints_PublicKey}/${MedPoints_PrivateKey}/favorites`, data);
    if (request.status === 200) {
        res.setHeader('Content-Type', 'application/json');
        res.send(JSON.stringify({ status: request.status, statusText: request.statusText }));
    } else {
        throw new Error(localization.localize('errors.requestError'));
    }
};