
exports.preparePharmaciesData = (pharmacy) => {
    let work_time = [];
    if (pharmacy.work_time) {
        if(!Array.isArray(pharmacy.work_time)){
            pharmacy.work_time = pharmacy.work_time.split('\n');
        }

        work_time = pharmacy.work_time.map((workTime) => {
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