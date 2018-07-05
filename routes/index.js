const router = require('express').Router();

router.get('/', (req, res) => res.render('index'));
router.use('/doctors', require('./doctors'));
router.use('/clinics', require('./clinics'));
router.use('/services', require('./services'));
router.use('/pharmacies', require('./pharmacies'));
router.use('/drugs', require('./drugs'));
router.post('/search', async (req, res) => {
	const {category, search} = req.body;
	switch(category.toLowerCase()){
		case 'doctors':
		case 'clinics':
			res.redirect(`/${category}?name=${search}`);
			return;
		default:
			res.render('index');
			return;
	}
});

router.use('/', require('./pages'));

module.exports = router;
