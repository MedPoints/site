const higlight = require('./text-highlighter');

exports.prepareClinicData = (clinic, options, path) => {
    clinic.avatar = path;
    
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

    if (options && options.search) {
        clinic.name = higlight(clinic.name, options.search);
    }


    return {
        ...clinic,
        work_time,
    };
};