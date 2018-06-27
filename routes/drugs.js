const router = require('express').Router();
const drugs = require('../controllers/drugs');
const catchErrors = require('../handlers/errorHandlers').catchErrors;

router.get('/', catchErrors(drugs.getDrugs));
router.get('/:id', catchErrors(drugs.getDrug));

module.exports = router;
