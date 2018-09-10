

exports.prepareClinicData = (clinic) => {
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

    return {
        ...clinic,
        work_time,
    };
};