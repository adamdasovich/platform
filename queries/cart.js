const pool = require('./connectdb.js');

const getCartById = (req, res) => {
	const id = parseInt(req.params.id);
	pool.query('SELECT * FROM cart WHERE id = $1', [id], (error, results) => {
		if (error) {
			throw error;
		}
		res.status(200).json(results.rows);
	})
}

const createCart = (req, res) => {
	const { customer_id, product_id, quantity } = req.body;
	pool.query('INSERT INTO cart (customer_id, product_id, quantity) VALUES ($1, $2, $3)', [customer_id, product_id, quantity], (error, results) => {
		if (error) {
			throw error;
		}
		res.status(201).send(`Cart added with ID: ${results.insertId}`);
	})
}

const updateCart = (req, res) => {
	const id = parseInt(req.params.id);
	const { customer_id, product_id, quantity } = req.body;
	pool.query(
		'UPDATE cart SET customer_id = $1, product_id = $2, quantity = $3 WHERE id = $4',
		[customer_id, product_id, quantity, id],
		(error, results) => {
			if (error) {
				throw error;
			}
			res.status(200).send(`Cart modified with ID: ${id}`);
		}
	)
}

module.exports = {
	getCartById,
	createCart,
	updateCart
}