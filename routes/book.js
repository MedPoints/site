const router = require('express').Router();
const booking = require('../controllers/booking');
const catchErrors = require('../handlers/errorHandlers').catchErrors;

router.post('/', catchErrors(booking.register));

module.exports = router;