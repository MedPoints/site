const config = require('config');
const axios = require('axios');
const API_URL = config.get('API_URL');
const BLOCKCHAIN_API_URL = config.get('BLOCKCHAIN_API_URL');

const { prepareClinicData } = require('./../helpers/clinics');
const { prepareDoctorData } = require('./../helpers/doctors');

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
    const localization = new Localization(req.cookies.locale);

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
        title: localization.localize('titles.booking'), 
        PAGE_TITLE: localization.localize('titles.booking'),
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

exports.details = async (req, res) => {
    const {
        bookingDate,
        serviceId,
        doctorId,
        clinicId,
    } = req.body;

    const [clinicRequest, doctorRequest, serviceRequest] = await Promise.all([
        axios.get(`${API_URL}/api/hospitals?id=${clinicId}`),
        axios.get(`${API_URL}/api/doctors?id=${doctorId}`),
        axios.get(`${API_URL}/api/services?id=${serviceId}`),
    ]).catch(err => {
        console.log('Date request error: ' + err);
    });

    const random = await axios.get('https://randomuser.me/api/1.0/?seed='+doctorRequest.data.result.id);
    const clinic = prepareClinicData(clinicRequest.data.result);
    const doctor = prepareDoctorData(doctorRequest.data.result, '', random.data.results[0]);
    const service = serviceRequest.data.result;

    res.render('layouts/partials/booking-details', {
        layout: false,
        bookingDate: moment(new Date(bookingDate)).format("DD.MM.YYYY"),
        clinic,
        doctor,
        service,
        req,
    });
};
