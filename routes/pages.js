const router = require('express').Router();
const catchErrors = require('../handlers/errorHandlers').catchErrors;

const explorer = require('../controllers/explorer');
const tickets = require('../controllers/tickets');
const rates = require('../controllers/rates');
const favourites = require('../controllers/favourites');
const booking = require('../controllers/booking');

const Localization = require('../helpers/localization').Localization;

router.get('/about', (req, res) => {
    const localization = new Localization(req.cookies.locale);
    res.render('pages/about', {
        PAGE_TITLE: localization.localize('titles.aboutUs'), 
        pageName: 'about', 
        title: localization.localize('titles.aboutUs')
    })
});
router.get('/terms-of-use', (req, res) => { 
    const localization = new Localization(req.cookies.locale);
    res.render('pages/terms-of-use', {
        title: localization.localize('titles.termsOfUse'), 
        PAGE_TITLE: localization.localize('titles.termsOfUse'),
        req,
    });
});
router.get('/privacy-policy', (req, res) => {
    const localization = new Localization(req.cookies.locale);
    res.render('pages/privacy-policy', {
        title: localization.localize('titles.privacyPolicy'), 
        PAGE_TITLE: localization.localize('titles.privacyPolicy'),
        req,
    });
});
router.get('/privacy-terms-and-conditions', (req, res) => {
    const localization = new Localization(req.cookies.locale);
    res.render('pages/privacy-terms-and-conditions', {
        title: localization.localize('titles.privacyPolicy'), 
        PAGE_TITLE: localization.localize('titles.privacyPolicy'),
        req,
    });
});
router.get('/partnership', (req, res) => {
    const localization = new Localization(req.cookies.locale);
    res.render('pages/partnership', {
        title: localization.localize('titles.partnership'), 
        PAGE_TITLE: localization.localize('titles.partnership'),
        req,
    });
});
router.get('/explorer', catchErrors(explorer.getBlocks));
router.get('/faq', (req, res) => {
    const localization = new Localization(req.cookies.locale);
    res.render('pages/faq', {
        title: localization.localize('titles.faq'), 
        PAGE_TITLE: localization.localize('titles.faq')
    });
});

//router.get('/sitemap', (req, res) => res.render('pages/sitemap', {PAGE_TITLE: 'Sitemap', pageName: 'sitemap', title: 'MedPoints™ Sitemap'}));
router.get('/registration', (req, res) => {
    const localization = new Localization(req.cookies.locale);
    res.render('pages/registration', {
        title: localization.localize('titles.registration'), 
        PAGE_TITLE: localization.localize('titles.registration')
    });
});


router.get('/search-results', (req, res) => res.render('pages/search-results', {title: 'MedPoints™ Search'}));
router.get('/success', (req, res) => {
    const localization = new Localization(req.cookies.locale);
    res.render('pages/success', {
        title: localization.localize('titles.success'), 
        PAGE_TITLE: localization.localize('titles.success')
    });
});
router.get('/confirm', (req, res) => {
    const localization = new Localization(req.cookies.locale);
    res.render('pages/confirm', {
        title: localization.localize('titles.confirm'), 
        PAGE_TITLE: localization.localize('titles.confirm')
    });
});
router.get('/text', (req, res) => res.render('pages/text'));

router.get('/booking', catchErrors(booking.booking));
router.post('/booking/details', catchErrors(booking.details));
router.get('/rates', catchErrors(rates.getRates));
router.post('/calculateRates', catchErrors(rates.calculateRates));

router.get('/account-tickets', catchErrors(tickets.getTickets));
router.get('/add-ticket', catchErrors(tickets.addTickets));
router.post('/createTicket', catchErrors(tickets.createTicket));
router.post('/askQuestion', catchErrors(tickets.sendQuestion));

router.post('/addFavourites', catchErrors(favourites.addFavourites));
router.post('/removeFavourites', catchErrors(favourites.removeFavourites));

module.exports = router;
