const router = require('express').Router();
const productDB = require('../queries/products.js');

router.post('/', productDB.createProduct);
router.get('/:id', productDB.getProductById);
router.get('/', productDB.getProductByCat);

module.exports = router;