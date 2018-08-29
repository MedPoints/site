const router = require('express').Router();
const catchErrors = require('../handlers/errorHandlers').catchErrors;

const explorer = require('../controllers/explorer');

router.get('/about', (req, res) => res.render('pages/about'));
router.get('/terms-of-use', (req, res) => res.render('pages/terms-of-use'));
router.get('/privacy-policy', (req, res) => res.render('pages/privacy-policy'));
router.get('/partnership', (req, res) => res.render('pages/partnership'));
router.get('/explorer', catchErrors(explorer.getBlocks));
router.get('/blog', (req, res) => res.render('pages/blog'));
router.get('/faq', (req, res) => res.render('pages/faq'));
router.get('/account-tickets', (req, res) => res.render('pages/account-tickets'));
router.get('/sitemap', (req, res) => res.render('pages/sitemap'));
router.get('/registration', (req, res) => res.render('pages/registration'));

router.get('/booking', (req, res) => res.render('pages/booking'));
router.get('/insurance', (req, res) => res.render('pages/insurance'));
router.get('/rates', (req, res) => res.render('pages/rates'));
router.get('/search-results', (req, res) => res.render('pages/search-results'));
router.get('/success', (req, res) => res.render('pages/success'));
router.get('/text', (req, res) => res.render('pages/text'));

module.exports = router;
