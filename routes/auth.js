const router = require('express').Router();
const auth = require('../controllers/auth');
const catchErrors = require('../handlers/errorHandlers').catchErrors;

router.get('/generate', catchErrors(auth.generate));
router.post('/register', catchErrors(auth.register));
router.post('/authenticate', catchErrors(auth.authenticate));

module.exports = router;