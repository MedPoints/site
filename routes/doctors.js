const router = require('express').Router();
const doctors = require('../controllers/doctors');
const catchErrors = require('../handlers/errorHandlers').catchErrors;

router.get('/', catchErrors(doctors.getDoctors));
router.get('/:id', catchErrors(doctors.getDoctor));

module.exports = router;
