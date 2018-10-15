const higlight = require('./text-highlighter');

exports.prepareDoctorData = (doctor, options) => {
    if (!doctor.rate) {
        doctor.rate = 0;
    }

    if (!doctor.ratings) {
        doctor.ratings = [];
    }

    if (!doctor.opinion) {
        doctor.opinion = {
            knowledge: 0,
            skills: 0,
            attention: 0,
            priceQuality: 0
        };
    }

    if (options.search) {
        doctor.name = higlight(doctor.name, options.search);
    }

    return {
        ...doctor
    };
};