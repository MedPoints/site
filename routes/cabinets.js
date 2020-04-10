const router = require('express').Router();
const cabinets = require('../controllers/cabinets');

router.use((req, res, next) => {
  res.append('Access-Control-Allow-Origin', ["*"]);
  res.append('Access-Control-Allow-Methods', 'GET');
  res.append('Access-Control-Allow-Headers', 'Content-Type');
  next();
})

router.get('/get-doctor', cabinets.getDoctor);
router.get('/get-doctor/:id', cabinets.getDoctor);

router.get('/get-drugs', cabinets.getDrugs);

router.get('/get-blocks', cabinets.getBlocks);
router.get('/get-blocks-count', cabinets.getBlocksCount);

module.exports = router;
