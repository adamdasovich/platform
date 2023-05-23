const router = require('express').Router();
const registerDB = require('../queries/auth.js');

router.post('/register', registerDB.createCustomer);
router.post('/login', registerDB.loginCustomer);

module.exports = router;
