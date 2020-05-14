const moment = require('moment');
const config = require('config');
const axios = require('axios');

const API_URL = config.get('API_URL');


exports.getFullInfo = async (transaction) => {
  let _transaction = {};

  try {
    if (!transaction.ClinicId || !transaction.DoctorId || !transaction.ServiceId) {
        throw 'Can\'t get data for some of the transactions';
    }

    const clinicRequest = await axios.get(`${API_URL}/api/hospitals?id=${transaction.ClinicId}`);
    const doctorRequest = await axios.get(`${API_URL}/api/doctors?id=${transaction.DoctorId}`);
    const serviceRequest = await axios.get(`${API_URL}/api/services?id=${transaction.ServiceId}`);

    const desc = JSON.parse(transaction.Description);
    let patientName = desc.firstName || "";
    patientName += ` ${desc.lastName}` || "";

    _transaction = {
      hash: transaction.Id,
      doctorId: transaction.DoctorId,
      doctorName: doctorRequest.data.result.name,
      clinicId: transaction.ClinicId,
      clinicName: clinicRequest.data.result.name,
      patientId: transaction.UserAddress,
      patientName: patientName,
      gender: desc.sex || "",
      dateOfBirth: desc.dateOfBirth || "",
      email: desc.email || "",
      serviceName: serviceRequest.data.result.name,
      date: moment(transaction.Date).format('YYYY-MM-DD'),
    };

  } catch (e) {
    console.log('Transactions data error: ' + e);
  }

  return _transaction;
}