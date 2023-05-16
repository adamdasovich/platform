const express = require('express');
const customerDB = require('./queries/customers.js');

const app = express();

app.use(express.json({ extended: true }));

app.get('/', (req, res) => res.send('API Running'));
app.get('/customers', customerDB.getCustomers);
app.get('/customers/:id', customerDB.getCustomerById);
app.post('/customers', customerDB.createCustomer);
app.put('/customers/:id', customerDB.updateCustomer);
app.delete('/customers/:id', customerDB.deleteCustomer);


const PORT = process.env.PORT || 5001;

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));