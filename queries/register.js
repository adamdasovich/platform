const pool = require('./connectdb.js');

const createCustomer = (req, res) => {
	const { name, email, password } = req.body;


	pool.query('INSERT INTO customer (name, email, password) VALUES ($1, $2, $3)', [name, email, password], (error, results) => {
		if (error) {
			throw error;
		}
		res.status(201).send(`Customer added with ID: ${results.insertId}`);
	})
}

module.exports = {
	createCustomer
}