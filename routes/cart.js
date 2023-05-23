const router = require('express').Router();

const cartDB = require('../queries/cart.js');

router.get('/:id', cartDB.getCartById);
router.post('/', cartDB.createCart);
router.put('/:id', cartDB.updateCart);

module.exports = router;