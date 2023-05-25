const router = require('express').Router();

const customerDB = require('../queries/customers.js');


router.get('/', customerDB.getCustomers);
router.get('/:id', customerDB.getCustomerById);
router.post('/', customerDB.createCustomer);
router.put('/:id', customerDB.updateCustomer);
router.get('/email/:email', customerDB.getCustomerByEmail);



module.exports = router;