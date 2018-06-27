const router = require('express').Router();

router.get('/', (req, res) => res.render('index'));
router.use('/doctors', require('./doctors'));
router.use('/clinics', require('./clinics'))
router.use('/services', require('./services'))
router.use('/pharmacies', require('./pharmacies'))
router.use('/drugs', require('./drugs'))

router.use('/', require('./pages'));

module.exports = router;