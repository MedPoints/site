const router = require('express').Router();
const cabinets = require('../controllers/cabinets');

router.get('/get-doctor', cabinets.getDoctor);
router.get('/get-doctor/:id', cabinets.getDoctor);

module.exports = router;
