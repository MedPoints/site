const config = require('config');
const axios = require('axios');
const mysql = require("mysql2/promise");
const API_URL = config.get('API_URL');
const BLOCKCHAIN_URL = config.get('BLOCKCHAIN_API_URL');

const { prepareClinicData } = require('./../helpers/clinics');
const { prepareDoctorData } = require('./../helpers/doctors');

const moment = require('moment');

const Localization = require('../helpers/localization').Localization;

const { getFullInfo } = require('./../helpers/booking');

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
        walletKey,
        firstName,
        lastName,
        email,
        sex,
        dateOfBirth,
    } = req.body;

    const data = {
        UserAddress: walletKey,
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
            bookingDate: moment(new Date()).format('YYYY-MM-DD'),
        }),
    }
    const localization = new Localization(req.cookies.locale);
    const request = await axios.post(`${BLOCKCHAIN_URL}/api/blockchain/transactions`, data);
    if (request.status === 200) {
        await addBookingAndPatientToDB(walletKey);
        res.setHeader('Content-Type', 'application/json');
        res.send(JSON.stringify({ status: request.status, statusText: request.statusText }));
    } else {
        throw new Error(localization.localize('errors.bookingRequest'));
    }
};




async function addBookingAndPatientToDB (walletKey) {
    const transactionsRes = await axios.get(`${BLOCKCHAIN_URL}/${walletKey}/transactions`);
    const transaction = await getFullInfo(transactionsRes.data[transactionsRes.data.length-1]);
    if (!transaction.clinicId || !transaction.doctorId || !transaction.patientId) {
        return console.log(`Broken transaction`);
    }

    try {
        const connection = await mysql.createConnection({
          host: "localhost",
          user: "root",
          database: "cabinets",
          password: "FFi1$dvVcNmxp67sX3%f_11"
        });

        const appointmentValues = {
            hash: transaction.hash,
            doctor: transaction.doctorId,
            doctor_name: transaction.doctorName,
            clinic: transaction.clinicId,
            clinic_name: transaction.clinicName,
            patient: transaction.patientId,
            patient_name: transaction.patientName,
            gender: transaction.gender,
            date_of_birth: transaction.dateOfBirth,
            service_name: transaction.serviceName,
            date_original: transaction.date,
            date: moment(transaction.date).unix(),
        };

        let sql = 'INSERT INTO `appointment` SET ?';
        await connection.query(sql, appointmentValues);

        sql = 'SELECT * FROM `patient` WHERE `patient_id` = ?';
        const [patientRows] = await connection.query(sql, [transaction.patientId]);

        if (patientRows.length === 0) {
            const patientValues = {
                name: transaction.patientName,
                email: transaction.email,
                gender: transaction.gender,
                patient_id: transaction.patientId,
                date_of_birth: transaction.dateOfBirth,
            };

            sql = 'INSERT INTO `patient` SET ?';
            await connection.query(sql, patientValues);
        }


        await connection.end();
    } catch (e) {
        console.error(e.message);
    }
}

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

    const localization = new Localization(req.cookies.locale);

    const pathDoctor = `/img/avatars/doctors/doctor-${Math.floor(Math.random() * 4) + 1}.svg`;
    const pathClinic = `/img/avatars/hospitals/hospital-${Math.floor(Math.random() * 7) + 1}.svg`;
    const clinic = prepareClinicData(clinicRequest.data.result, {localization: localization}, pathClinic);
    const doctor = prepareDoctorData(doctorRequest.data.result, '', pathDoctor);
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
