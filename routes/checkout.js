const router = require('express').Router();

const checkoutDB = require('../queries/checkout.js');

router.post('/:id/checkout', checkoutDB.checkout);

module.exports = router;