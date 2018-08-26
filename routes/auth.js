const router = require('express').Router();
const clinics = require('../controllers/auth');
const catchErrors = require('../handlers/errorHandlers').catchErrors;

router.get('/generate', catchErrors(clinics.generate));

module.exports = router;