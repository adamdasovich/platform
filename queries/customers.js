const pool = require('./connectdb.js');

const getCustomers = (req, res) => {
	pool.query('SELECT * FROM customers ORDER BY id ASC', (error, results) => {
		if (error) {
			throw error;
		}
		res.status(200).json(results.rows);
	})
}

const getCustomerById = (req, res) => {
	const id = parseInt(req.params.id);
	pool.query('SELECT * FROM customers WHERE id = $1', [id], (error, results) => {
		if (error) {
			throw error;
		}
		res.status(200).json(results.rows);
	})
}

const deleteCustomer = (req, res) => {
	const id = parseInt(req.params.id);
	pool.query('DELETE FROM customers WHERE id = $1', [id], (error, results) => {
		if (error) {
			throw error;
		}
		res.status(200).send(`Customer deleted with ID: ${id}`);
	})
}

const createCustomer = (req, res) => {
	const { name, address, email } = req.body;


	pool.query('INSERT INTO customers (name, address, email) VALUES ($1, $2, $3)', [name, address, email], (error, results) => {
		if (error) {
			throw error;
		}
		res.status(201).send(`Customer added with ID: ${results.insertId}`);
	})
}

const updateCustomer = (req, res) => {
	const id = parseInt(req.params.id);
	const { name, address, email } = req.body;

	pool.query('UPDATE customers SET name = $1, address = $2, email = $3 WHERE id = $4', [name, address, email, id], (error, results) => {
		if (error) {
			throw error;
		}
		res.status(200).send(`Customer modified with ID: ${id}`);
	})
}

module.exports = {
	getCustomers,
	getCustomerById,
	deleteCustomer,
	createCustomer,
	updateCustomer
}
