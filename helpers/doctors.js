const higlight = require('./text-highlighter');

exports.prepareDoctorData = (doctor, options, random) => {

    if (!doctor.avatar) {
        doctor.avatar = random.picture.large;
    }

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

    if (options && options.search) {
        doctor.name = higlight(doctor.name, options.search);
    }

    return {
        ...doctor
    };
};