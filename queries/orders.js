const pool = require('./connectdb.js');

const getOrders = (req, res) => {
	pool.query('SELECT * FROM orders ORDER BY id ASC', (error, results) => {
		if (error) {
			throw error;
		}
		res.status(200).json(results.rows);
	})
}

const getOrderById = (req, res) => {
	const id = parseInt(req.params.id);
	pool.query('SELECT * FROM orders WHERE id = $1', [id], (error, results) => {
		if (error) {
			throw error;
		}
		res.status(200).json(results.rows);
	})
}

const deleteOrder = (req, res) => {
	const id = parseInt(req.params.id);
	pool.query('DELETE FROM orders WHERE id = $1', [id], (error, results) => {
		if (error) {
			throw error;
		}
		res.status(200).send(`Order deleted with ID: ${id}`);
	})
}

const createOrder = (req, res) => {
	const { customer_id, product_id, quantity } = req.body;
	pool.query('INSERT INTO orders (customer_id, product_id, quantity) VALUES ($1, $2, $3)', [customer_id, product_id, quantity], (error, results) => {
		if (error) {
			throw error;
		}
		res.status(201).send(`Order added with ID: ${results.insertId}`);
	})
}

const updateOrder = (req, res) => {
	const id = parseInt(req.params.id);
	const { customer_id, product_id, quantity } = req.body;
	pool.query('UPDATE orders SET customer_id = $1, product_id = $2, quantity = $3 WHERE id = $4', [customer_id, product_id, quantity, id], (error, results) => {
		if (error) {
			throw error;
		}
		res.status(200).send(`Order modified with ID: ${id}`);
	})
}

module.exports = {
	getOrders,
	getOrderById,
	deleteOrder,
	createOrder,
	updateOrder
}