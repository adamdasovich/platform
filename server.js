const express = require('express');
const customerRoutes = require('./routes/customers.js');
const productRoutes = require('./routes/products.js');
const registerRoutes = require('./routes/register.js');
const categoryRoutes = require('./routes/category.js');

const app = express();

app.use(express.json({ extended: true }));

app.get('/', (req, res) => res.send('API Running'));
app.use('/api/customers', customerRoutes);
app.use('/api/products', productRoutes);
app.use('/api/register', registerRoutes);
app.use('/api/category', categoryRoutes);


const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));