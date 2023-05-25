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
	const { name, description, price, category_id } = req.body;
	pool.query('INSERT INTO product (name, description, price, category_id) VALUES ($1, $2, $3, $4) returning*', [name, description, price, category_id], (error, results) => {
		if (error) {
			throw error;
		}
		res.status(201).send(`Product added to database with id: ${results.rows[0].id}.`);
		console.log(results.rows[0])
	})
}


module.exports = {
	getProductById,
	getProductByCat,
	createProduct
}