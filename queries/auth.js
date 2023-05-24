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

/*router.post("/login", async (req, res) => {
	try {
		const user = await User.findOne({ username: req.body.username });
		!user && res.status(401).json("Wrong credentials!");

		const originalPassword = user.password

		if (originalPassword !== req.body.password) {
			res.status(401).json("Wrong credentials!");
		}

		const { password, ...others } = user._doc;
		res.status(200).json({ others });

	} catch (err) {
		res.status(500).json({ message: err });
	}
});*/

const loginCustomer = (req, res) => {
	const { email, password } = req.body;
	pool.query('SELECT * FROM customer WHERE email = $1', [email], (error, results) => {
		if (error) {
			throw error;
		}
		if (results.rows.length === 0) {
			res.status(401).json("Wrong credentials!");
		}
		if (results.rows[0].password !== password) {
			res.status(401).json("Wrong credentials!");
		}
		console.log(results.rows[0].password)
		res.status(200).json(results.rows[0]);
	})
}

module.exports = {
	createCustomer,
	loginCustomer
}