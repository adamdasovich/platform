const pool = require('./connectdb.js');

const getProductById = (req, res) => {
	const id = parseInt(req.params.id);
	pool.query('SELECT * FROM product WHERE id = $1', [id], (error, results) => {
		if (error) {
			throw error;
		}
		res.status(200).json(results.rows);
		console.log(results.rows)
	})
}

const getProductByCat = (req, res) => {
	const cat = req.query.cat
	pool.query('SELECT * FROM product WHERE category_id = $1', [cat], (error, results) => {
		if (error) {
			throw error;
		}
		res.status(200).json(results.rows);
	})
}

const createProduct = (req, res) => {
	const { name, description, price } = req.body;
	pool.query('INSERT INTO product (name, description, price) VALUES ($1, $2, $3)', [name, description, price], (error, results) => {
		if (error) {
			throw error;
		}
		res.status(201).send(`Product added with ID: ${results.insertId}`);
	})
}

module.exports = {
	getProductById,
	getProductByCat,
	createProduct
}