const router = require('express').Router();
const doctors = require('../controllers/doctors');
const catchErrors = require('../handlers/errorHandlers').catchErrors;

router.get('/', catchErrors(doctors.getDoctors));
router.get('/count', catchErrors(doctors.getCount));
router.get('/:id', catchErrors(doctors.getDoctor));
router.get('/:id/services', catchErrors(doctors.getServicesByDoctor));
router.get('/:id/hospitals', catchErrors(doctors.getHospitalsByDoctor));


module.exports = router;
