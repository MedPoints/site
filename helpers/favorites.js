const { prepareClinicData } = require('./../helpers/clinics');
const { prepareDoctorData } = require('./../helpers/doctors');
const { preparePharmacyData } = require('./../helpers/pharmacies');

exports.processFavoritesData = (data) => {
    if (data.clinics) {
        data.clinics = data.clinics.map(clinic => prepareClinicData(clinic));
    }

    if (data.doctors) {
        data.doctors = data.doctors.map(doctor => prepareDoctorData(doctor));
    }

    if (data.pharmacies) {
        data.pharmacies = data.pharmacies.map(pharmacy => preparePharmacyData(pharmacy));
    }

    return data;
};