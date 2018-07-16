const router = require('express').Router();
const pharmacies = require('../controllers/pharmacies');
const catchErrors = require('../handlers/errorHandlers').catchErrors;

router.get('/', catchErrors(pharmacies.getPharmacies));
router.get('/count', catchErrors(pharmacies.getCount));
router.get('/:id', catchErrors(pharmacies.getPharmacy));


module.exports = router;
