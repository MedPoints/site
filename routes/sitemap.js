const router = require('express').Router();
const sitemap = require('../controllers/sitemap');
const catchErrors = require('../handlers/errorHandlers').catchErrors;

router.get('/', catchErrors(sitemap.get));

module.exports = router;