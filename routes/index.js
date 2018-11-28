const router = require('express').Router();
const getSpecializations = require('../controllers/doctors').getSpecializations;
const getClinicsByLocation = require('../controllers/clinics').getClinicsByLocation;
const getCities = require('../controllers/cities').getCities;
const catchErrors = require('../handlers/errorHandlers').catchErrors;
const Localization = require('../helpers/localization').Localization;


router.get('/', catchErrors(async (req, res) => {
	var specializations = await getSpecializations(req, res);
	var locations = await getClinicsByLocation(req, res);
  const localization = new Localization(req.cookies.locale);
	var locationsColumnsOptions = {
		chunkSize: 15,
	}

	res.render('index', { 
		specializationsData: { data: specializations, dataOptions: { baseUrl: '/doctors', filterQuery: '?department=', filterProperty: 'id', labelProperty: 'name', badgeProperty: 'count' }}, 
		locationsData: { data: locations.clinicsGroups, dataOptions: { baseUrl: '/clinics', filterQuery: '?country=', filterProperty: 'countryCode', labelProperty: 'countryName', badgeProperty: 'count' }},
		locations: locations.locations,
		locationsColumnsOptions,
		PAGE_TITLE: localization.localize('pageTitles.index'),
		pageName: 'index',
		title: 'MedPoints™',
	})
}));
router.use('/cities', catchErrors(getCities));
router.use('/doctors', require('./doctors'));
router.use('/clinics', require('./clinics'));
router.use('/services', require('./services'));
router.use('/pharmacies', require('./pharmacies'));
router.use('/drugs', require('./drugs'));
router.use('/blog', require('./blog'));
router.use('/foundation', require('./foundation'));
router.post('/search', async (req, res) => {
	const {category, search} = req.body;
	switch(category.toLowerCase()){
		case 'doctors':
		case 'clinics':
			res.redirect(`/${category}?name=${search}`);
			return;
		default:
			res.redirect('/');
			return;
	}
});
router.use('/auth', require('./auth'));
router.use('/book', require('./book'));
router.use('/account', require('./account'));
router.use('/', require('./pages'));

router.use(function(req,res,next) {
	res.locals.req = req;
	next();
})

module.exports = router;