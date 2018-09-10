const router = require('express').Router();
const catchErrors = require('../handlers/errorHandlers').catchErrors;

const explorer = require('../controllers/explorer');

router.get('/about', (req, res) => res.render('pages/about', {title: 'MedPoints™ About Us'}));
router.get('/terms-of-use', (req, res) => res.render('pages/terms-of-use', {title: 'MedPoints™ Terms Of Use'}));
router.get('/privacy-policy', (req, res) => res.render('pages/privacy-policy', {title: 'MedPoints™ Privacy Policy'}));
router.get('/partnership', (req, res) => res.render('pages/partnership', {title: 'MedPoints™ Partnership'}));
router.get('/explorer', catchErrors(explorer.getBlocks));
router.get('/blog', (req, res) => res.render('pages/blog', {title: 'MedPoints™ Blog'}));
router.get('/faq', (req, res) => res.render('pages/faq', {title: 'MedPoints™ FAQ'}));
router.get('/account-tickets', (req, res) => res.render('pages/account-tickets', {title: 'MedPoints™ Your Support Tickets'}));
router.get('/sitemap', (req, res) => res.render('pages/sitemap', {title: 'MedPoints™ Sitemap'}));
router.get('/registration', (req, res) => res.render('pages/registration', {title: 'MedPoints™ Register'}));

router.get('/booking', (req, res) => res.render('pages/booking', {title: 'MedPoints™ Book a Visit'}));
router.get('/insurance', (req, res) => res.render('pages/insurance', {title: 'MedPoints™ Insurance'}));
router.get('/rates', (req, res) => res.render('pages/rates', {title: 'MedPoints™ Rates'}));
router.get('/search-results', (req, res) => res.render('pages/search-results', {title: 'MedPoints™ Search'}));
router.get('/success', (req, res) => res.render('pages/success', {title: 'MedPoints™ Successful Booking'}));
router.get('/text', (req, res) => res.render('pages/text'));

module.exports = router;
