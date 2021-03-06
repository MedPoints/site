const higlight = require('./text-highlighter');

exports.prepareClinicData = (clinic, options) => {
    let work_time = [];
    if (clinic.work_time) {
        work_time = clinic.work_time.split('\n').map((workTime) => {
            const workTimeParts = workTime.split(' ');
            return {
                weekdays: workTimeParts[0],
                time: workTimeParts[1],
            }
        });
    }

    if (!clinic.network) {
        clinic.network = '-';
    }

    if (options && options.search) {
       clinic.name = higlight(clinic.name, options.search);
    }


    return {
        ...clinic,
        work_time,
    };
};