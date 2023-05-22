const router = require('express').Router();
const registerDB = require('../queries/register.js');

router.post('/', registerDB.createCustomer);

module.exports = router;
