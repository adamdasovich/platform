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

module.exports = {
	getOrders,
	getOrderById
}