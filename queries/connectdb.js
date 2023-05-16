const Pool = require('pg').Pool

const pool = new Pool({
	user: 'postgres',
	host: 'localhost',
	database: 'platform',
	password: 'Cambior1972',
	port: 5432,
})

module.exports = pool;