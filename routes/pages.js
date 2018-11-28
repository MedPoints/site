const router = require('express').Router();
const catchErrors = require('../handlers/errorHandlers').catchErrors;

const explorer = require('../controllers/explorer');
const tickets = require('../controllers/tickets');
const rates = require('../controllers/rates');
const favourites = require('../controllers/favourites');
const booking = require('../controllers/booking');

router.get('/about', (req, res) => res.render('pages/about', {PAGE_TITLE: 'About Us', pageName: 'about', title: 'MedPoints™ About Us'}));
router.get('/terms-of-use', (req, res) => res.render('pages/terms-of-use', {title: 'MedPoints™ Terms Of Use'}));
router.get('/privacy-policy', (req, res) => res.render('pages/privacy-policy', {title: 'MedPoints™ Privacy Policy'}));
router.get('/partnership', (req, res) => res.render('pages/partnership', {title: 'MedPoints™ Partnership'}));
router.get('/explorer', catchErrors(explorer.getBlocks));
router.get('/blog', (req, res) => res.render('pages/blog', {title: 'MedPoints™ Blog'}));
router.get('/faq', (req, res) => res.render('pages/faq', {title: 'MedPoints™ FAQ'}));

router.get('/sitemap', (req, res) => res.render('pages/sitemap', {PAGE_TITLE: 'Sitemap', pageName: 'sitemap', title: 'MedPoints™ Sitemap'}));
router.get('/registration', (req, res) => res.render('pages/registration', {PAGE_TITLE: 'Registration', title: 'MedPoints™ Register'}));

router.get('/insurance', (req, res) => res.render('pages/insurance', {title: 'MedPoints™ Insurance', PAGE_TITLE: 'Insurance program'}));
router.get('/search-results', (req, res) => res.render('pages/search-results', {title: 'MedPoints™ Search'}));
router.get('/success', (req, res) => res.render('pages/success', {title: 'MedPoints™ Successful Booking'}));
router.get('/confirm', (req, res) => res.render('pages/confirm', {title: 'MedPoints™ Successful Email Confirmation'}));
router.get('/text', (req, res) => res.render('pages/text'));

router.get('/booking', catchErrors(booking.booking));
router.get('/rates', catchErrors(rates.getRates));
router.post('/calculateRates', catchErrors(rates.calculateRates));

router.get('/account-tickets', catchErrors(tickets.getTickets));
router.get('/add-ticket', catchErrors(tickets.addTickets));
router.post('/createTicket', catchErrors(tickets.createTicket));
router.post('/askQuestion', catchErrors(tickets.sendQuestion));

router.post('/addFavourites', catchErrors(favourites.addFavourites));

module.exports = router;
