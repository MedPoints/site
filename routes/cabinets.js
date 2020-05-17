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

router.post('/add-group', cabinets.addGroup);
router.post('/edit-group', cabinets.editGroup);
router.post('/delete-group', cabinets.deleteGroup);

router.post('/add-drug', cabinets.addDrug);
router.post('/edit-drug', cabinets.editDrug);
router.post('/delete-drug', cabinets.deleteDrug);

module.exports = router;
