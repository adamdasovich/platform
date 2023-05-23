const pool = require('./connectdb.js');

const checkout = (req, res) => {
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
	checkout
}