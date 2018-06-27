const router = require('express').Router();
const services = require('../controllers/services');
const catchErrors = require('../handlers/errorHandlers').catchErrors;

router.get('/', catchErrors(services.getServices));
router.get('/:id', catchErrors(services.getService));

module.exports = router;
