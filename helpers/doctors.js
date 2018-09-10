
exports.prepareDoctorData = (doctor) => {
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

    return {
        ...doctor
    };
};