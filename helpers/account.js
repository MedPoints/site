const moment = require('moment');
const config = require('config');
const axios = require('axios');

const Promise = require('bluebird');

const API_URL = config.get('API_URL');
const BLOCKCHAIN_URL = config.get('BLOCKCHAIN_API_URL');
const { prepareClinicData } = require('./../helpers/clinics');
const { prepareDoctorData } = require('./../helpers/doctors');

exports.prepareTransactionData = (transaction) => {
    return {
        ...transaction,
        Date: formatDate(transaction.Date),
    };
};

exports.prepareAppointmentData = (transaction) => {
    const formattedDate = formatDate(transaction.Date);

    return {
        date: formattedDate,
        badge: false,
        title: formattedDate,
        body: getAppointmentBody(transaction)
    };
};

exports.addUploadsToTransactions = (publicKey, transactions, uploads) => {
    for (const upload of uploads) {
        const transaction = transactions.find(el => el.Id === upload.transactionId);
        if (!transaction) {
            continue;
        }

        if (!transaction.uploads) {
            transaction.uploads = [];
        }

        const file = {
            fullname: upload.fullname,
            name: `${upload.filename}-${upload.timestamp}`,
            path: `/${publicKey}/${upload.fullname}`,
            ext: upload.extension,
            description: upload.description || "",
        };

        transaction.uploads.push(file);
    }

    return transactions;
}

exports.getTransactions = async (transactions, localization) => {
    let resultTransactions = [];

    // Get clinic, doctor and service info for a transaction
    await Promise.each(transactions, async transaction => {
        if (!transaction.ClinicId || !transaction.DoctorId || !transaction.ServiceId) {
            throw 'Can\'t get data for some of the transactions';
        }

        const [clinicRequest, doctorRequest, serviceRequest] = await Promise.all([
            axios.get(`${API_URL}/api/hospitals?id=${transaction.ClinicId}`),
            axios.get(`${API_URL}/api/doctors?id=${transaction.DoctorId}`),
            axios.get(`${API_URL}/api/services?id=${transaction.ServiceId}`),
        ]).catch(err => {
            console.log('Date request error: ' + err);
        });

        const pathDoctor = `/img/avatars/doctors/doctor-${Math.floor(Math.random() * 4) + 1}.svg`;
        const pathClinic = `/img/avatars/hospitals/hospital-${Math.floor(Math.random() * 7) + 1}.svg`;
        const clinic = prepareClinicData(clinicRequest.data.result, {localization: localization}, pathClinic);
        const doctor = prepareDoctorData(doctorRequest.data.result, '', pathDoctor);
        const service = serviceRequest.data.result;
        transaction.ClinicInfo = clinic;
        transaction.DoctorInfo = doctor;
        transaction.ServiceInfo = service;
        resultTransactions.push(exports.prepareTransactionData({...transaction}));
    }).catch(err => {
        console.log('Transactions data error: ' + err)
    });

    return resultTransactions;
}

function formatDate(date) {
    let newDate = new Date(date);

    if (newDate) {
        return moment(newDate).format('YYYY-MM-DD');
    }

    return '';
}

function getAppointmentBody(transaction) {

    return `<h3><a href="/clinics/${transaction.ClinicInfo.id}">${transaction.ClinicInfo.name}</a>
                <small>Public</small>
            </h3>
            <p>
                <a href="https://www.google.com/maps/embed/place?key=1&q=${transaction.ClinicInfo.location.address}" data-name="${transaction.ClinicInfo.name}" class="map-toggle">
                    ${transaction.ClinicInfo.location.address}
                </a>
            </p>
            <ul class="stiled-list">
                <li>
                    <h4>${transaction.ServiceInfo.name}</h4>
                    <div>Terapist <a href="/doctors/${transaction.DoctorInfo.id}">${transaction.DoctorInfo.name}</a></div>
                </li>
            </ul>
            <div class="card">
                <ul>
                    <li>Transaction code <span id="transactionId${transaction.Id}" class="breakable">${transaction.Id}</span></li>
                    <li><a class="copy-link btn-copy1" onclick="copyToClipboard($('#transactionId${transaction.Id}'))"><i class="far fa-copy"></i>
                            Copy</a> / <a href="#" data-toggle="modal" data-target="#sorry">Check in
                            blockchain explorer</a></li>
                    <li>Transaction status <span class="text-info">In progress</span></li>
                </ul>
            </div>`;
}
