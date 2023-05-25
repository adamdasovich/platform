const express = require('express');
const customerRoutes = require('./routes/customers.js');
const productRoutes = require('./routes/products.js');
const registerRoutes = require('./routes/auth.js');
const categoryRoutes = require('./routes/category.js');
const authRoutes = require('./routes/auth.js');
const cartRoutes = require('./routes/cart.js');
const orderRoutes = require('./routes/orders.js');
const checkoutRoutes = require('./routes/checkout.js');
const cors = require('cors');


const app = express();
app.use(cors());
app.use(express.json({ extended: true }));
app.use(express.static('build'));


app.get('/', (req, res) => res.send('API Running'));
app.use('/api/customers', customerRoutes);
app.use('/api/products', productRoutes);
app.use('/api/auth', registerRoutes);
app.use('/api/category', categoryRoutes);
app.use('/api/auth', authRoutes);
app.use('/api/cart', cartRoutes);
app.use('/api/orders', orderRoutes);
app.use('/api/checkout', checkoutRoutes);


const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));