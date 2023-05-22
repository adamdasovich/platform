const router = require('express').Router();

const categoryDB = require('../queries/category.js');

router.get('/', categoryDB.getCategory);
router.get('/:id', categoryDB.getCategoryById);
router.post('/', categoryDB.createCategory);

module.exports = router;
