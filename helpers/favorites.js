const { prepareClinicData } = require('./../helpers/clinics');
const { prepareDoctorData } = require('./../helpers/doctors');
const { preparePharmacyData } = require('./../helpers/pharmacies');

const axios = require('axios');

exports.processFavoritesData = async (data) => {
    if (data.clinics) {
        const path = `/img/avatars/hospitals/hospital-${Math.floor(Math.random() * 7) + 1}.svg`;
        data.clinics = data.clinics.map(clinic => prepareClinicData(clinic, {}, path));
    }

    if (data.doctors) {
        data.doctors = data.doctors.filter(doctor => !!doctor);
        data.doctors = data.doctors.map(async doctor => {
            const random = await axios.get('https://randomuser.me/api/1.0/?seed='+doctor.id);
            return prepareDoctorData(doctor, '', random.data.results[0]);
        });
        await Promise.all(data.doctors).then((result) => {
            data.doctors = result;
        });
    }

    if (data.pharmacies) {
        data.pharmacies = data.pharmacies.map(pharmacy => preparePharmacyData(pharmacy));
    }

    return data;
};