const config = require('config');
const axios = require('axios');
const API_URL = config.get('API_URL');
const BLOCKCHAIN_API_URL = config.get('BLOCKCHAIN_API_URL');

const moment = require('moment');

const Localization = require('../helpers/localization').Localization;

exports.booking = async (req, res) => {
    const {
        MedPoints_PrivateKey,
        MedPoints_PublicKey,
    } = req.cookies;

    const {
        doctorId = '',
    } = req.query
    let clinicId = '';

    if (doctorId) {
        const request = await axios.get(`${API_URL}/api/doctors?id=${doctorId}`);
        const {
            data: { result: { hospital: { id: hospitalId } } }
        } = request;
        if (hospitalId) {
            clinicId = hospitalId;
        }
    }

    const isRegistered = MedPoints_PrivateKey && MedPoints_PublicKey;

    res.render('pages/booking', {
        title: 'MedPoints™ Book a Visit',
        doctorId,
        clinicId,
        isRegistered,
        req,
    });
};

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
        Date: moment(new Date()).format('YYYY-MM-DD'),
        Description: JSON.stringify({
            firstName,
            lastName,
            email,
            sex,
            dateOfBirth,
            bookingDate,
        }),
    }
    const localization = new Localization(req.cookies.locale);
    const request = await axios.post(`${BLOCKCHAIN_API_URL}/api/blockchain/transactions`, data);
    if (request.status === 200) {
        res.setHeader('Content-Type', 'application/json');
        res.send(JSON.stringify({ status: request.status, statusText: request.statusText }));
    } else {
        throw new Error(localization.localize('errors.bookingRequest'));
    }
};