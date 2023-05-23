const router = require('express').Router();

const orderDB = require('../queries/orders.js');

router.get('/', orderDB.getOrders);
router.get('/:id', orderDB.getOrderById);

module.exports = router;