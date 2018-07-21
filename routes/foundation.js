const router = require('express').Router();
const foundation = require('../controllers/foundation');
const catchErrors = require('../handlers/errorHandlers').catchErrors;

router.get('/', catchErrors(foundation.getFoundationInfo));
router.get('/cases', catchErrors(foundation.getFoundationCases));
router.get('/cases/:id', catchErrors(foundation.getFoundationCase));


module.exports = router;