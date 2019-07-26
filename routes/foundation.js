const router = require('express').Router();
const foundation = require('../controllers/foundation');
const catchErrors = require('../handlers/errorHandlers').catchErrors;

router.get('/', catchErrors(foundation.getFoundationInfo));
router.get('/cases', catchErrors(foundation.getFoundationCases));

//test-pages
router.get('/cases/julia-ostin', async (req, res) => {
    res.render('foundation/test-pages/julia-ostin', {title: `MedPoints™ Foundation Case`,req,});
});
router.get('/cases/sam-pitt', async (req, res) => {
    res.render('foundation/test-pages/sam-pitt', {title: `MedPoints™ Foundation Case`,req,});
});
router.get('/cases/jessy-smith', async (req, res) => {
    res.render('foundation/test-pages/jessy-smith', {title: `MedPoints™ Foundation Case`,req,});
});

router.get('/cases/:id', catchErrors(foundation.getFoundationCase));

module.exports = router;