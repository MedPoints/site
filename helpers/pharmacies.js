
exports.preparePharmaciesData = (pharmacy) => {
    let work_time = [];
    if (pharmacy.work_time) {
        work_time = pharmacy.work_time.split('\n').map((workTime) => {
            const workTimeParts = workTime.split(' ');
            return {
                weekdays: workTimeParts[0],
                time: workTimeParts[1],
            }
        });
    }

    if(!pharmacy.drugs)
        pharmacy.drugs = [];

    return {
        ...pharmacy,
        work_time,
    };
};