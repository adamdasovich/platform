const pool = require('./connectdb.js');

const getCategory = (req, res) => {
	pool.query('SELECT * FROM category ORDER BY id ASC', (error, results) => {
		if (error) {
			throw error;
		}
		res.status(200).json(results.rows);
	})
}

const getCategoryById = (req, res) => {
	const id = parseInt(req.params.id);
	pool.query('SELECT * FROM category WHERE id = $1', [id], (error, results) => {
		if (error) {
			throw error;
		}
		res.status(200).json(results.rows);
	})
}

const createCategory = (req, res) => {
	const { cat_name, cat_desc, Type } = req.body;
	pool.query('INSERT INTO category (cat_name, cat_desc, Type) VALUES ($1, $2, $3)', [cat_name, cat_desc, Type], (error, results) => {
		if (error) {
			throw error;
		}
		res.status(201).send(`Category added with ID: ${results.insertId}`);
	})
}

module.exports = {
	getCategory,
	createCategory,
	getCategoryById
}