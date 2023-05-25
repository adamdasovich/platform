const pool = require('./connectdb.js');

const getCustomers = (req, res) => {
	pool.query('SELECT * FROM customer ORDER BY id ASC', (error, results) => {
		if (error) {
			throw error;
		}
		res.status(200).json(results.rows);
	})
}

const getCustomerById = (req, res) => {
	const id = parseInt(req.params.id);

	if (isNaN(id)) {
		res.status(400).json({ error: 'Invalid customer ID' });
		return;
	}

	pool.query('SELECT * FROM customer WHERE id = $1', [id], (error, results) => {
		if (error) {
			throw error;
		}
		res.status(200).json(results.rows);
	});
};

const getCustomerByEmail = (req, res) => {
	const email = req.params.email;
	pool.query('SELECT * FROM customer WHERE email = $1', [email], (error, results) => {
		if (error) {
			throw error;
		}
		res.status(200).json(results.rows);
	})
}

const deleteCustomer = (req, res) => {
	const id = parseInt(req.params.id);
	pool.query('DELETE FROM customer WHERE id = $1', [id], (error, results) => {
		if (error) {
			throw error;
		}
		res.status(200).send(`Customer deleted with ID: ${id}`);
	})
}

const createCustomer = (req, res) => {
	const { name, email, password } = req.body;


	pool.query('INSERT INTO customer (name, email, password) VALUES ($1, $2, $3)', [name, email, password], (error, results) => {
		if (error) {
			throw error;
		}
		res.status(201).send(`Customer added with ID: ${results.insertId}`);
	})
}

const updateCustomer = (req, res) => {
	const id = parseInt(req.params.id);
	const { name, email, password } = req.body;

	pool.query('UPDATE customer SET name = $1, address = $2, email = $3 WHERE id = $4', [name, email, passwordl, id], (error, results) => {
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
	updateCustomer,
	getCustomerByEmail
}
