const router = require('express').Router();
const clinics = require('../controllers/clinics');
const catchErrors = require('../handlers/errorHandlers').catchErrors;

router.get('/', catchErrors(clinics.getClinics));
router.get('/partial', catchErrors(clinics.getClinicsPartial));
router.get('/count', catchErrors(clinics.getCount));
router.get('/:slug', catchErrors(clinics.getClinic));


module.exports = router;
