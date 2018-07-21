const router = require('express').Router();
const getSpecializations = require('../controllers/doctors').getSpecializations;
const catchErrors = require('../handlers/errorHandlers').catchErrors;


router.get('/', catchErrors(async (req, res) => {
	var specializations = await getSpecializations(req, res);
	res.render('index', { specializations: specializations })
}));
// async (req, res) => {
//     var specializations = await getSpecializations(req, res);
// 	res.render('index', { specialiations: specializations })
// });
router.use('/doctors', require('./doctors'));
router.use('/clinics', require('./clinics'));
router.use('/services', require('./services'));
router.use('/pharmacies', require('./pharmacies'));
router.use('/drugs', require('./drugs'));
router.use('/foundation', require('./foundation'));
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