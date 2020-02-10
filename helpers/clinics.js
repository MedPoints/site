const higlight = require('./text-highlighter');

exports.prepareClinicData = (clinic, options, path) => {
    if (!clinic.avatar) {
        clinic.avatar = path;
    }
    
    let work_time = [];
    if (clinic.work_time && options && options.localization) {
        work_time = clinic.work_time.split('\n').map((workTime) => {
            const workTimeParts = workTime.split(' ');
            return {
                weekdays: options.localization.localize(`weekdays.${workTimeParts[0].toLowerCase()}`),
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