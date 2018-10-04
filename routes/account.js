const router = require('express').Router();
const account = require('../controllers/account');
const catchErrors = require('../handlers/errorHandlers').catchErrors;

router.get('/', catchErrors(account.getAccountInfo));
router.get('/edit', catchErrors(account.editInfo));
router.get('/records', catchErrors(account.records));
router.post('/updateAccount', catchErrors(account.updateAccount));
router.get('/success', catchErrors(account.success));
router.get('/getUserAppointments', catchErrors(account.getAccountAppointments));

module.exports = router;