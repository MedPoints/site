const router = require('express').Router();
const doctors = require('../controllers/doctors');
const catchErrors = require('../handlers/errorHandlers').catchErrors;

router.get('/', catchErrors(doctors.getDoctors));
router.get('/partial', catchErrors(doctors.getDoctorsPartial));
router.get('/count', catchErrors(doctors.getCount));
router.get('/:slug', catchErrors(doctors.getDoctor));
router.get('/:slug/services', catchErrors(doctors.getServicesByDoctor));
router.get('/:slug/hospitals', catchErrors(doctors.getHospitalsByDoctor));


module.exports = router;
