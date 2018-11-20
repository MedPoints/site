const config = require('config');
const axios = require('axios');
const API_URL = config.get('BLOCKCHAIN_API_URL');

const Localization = require('../helpers/localization').Localization;

exports.register = async (req, res) => {
    const {
        clinicId,
        doctorId,
        serviceId,
        bookingDate,
        walletId,
        firstName,
        lastName,
        email,
        sex,
        dateOfBirth,
    } = req.body;


    const data = {
        UserAddress: walletId,
        DoctorId: doctorId,
        ClinicId: clinicId,
        ServiceId: serviceId,
        Date: bookingDate,
        Description: JSON.stringify({
            firstName,
            lastName,
            email,
            sex,
            dateOfBirth,
        }),
    }
    const localization = new Localization(req.cookies.locale);
    const request = await axios.post(`${API_URL}/api/blockchain/transactions`, data);
    if (request.status === 200) {
        res.setHeader('Content-Type', 'application/json');
        res.send(JSON.stringify({ status: request.status, statusText: request.statusText }));
    } else {
        throw new Error(localization.localize('errors.bookingRequest'));
    }
};