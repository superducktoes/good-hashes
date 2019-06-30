const mysql = require('mysql');

// Set database connection credentials
const config = {
    host: 'localhost',
    user: 'root',
    password: 'b43b6b81b84',
    database: 'hashdb',
};

// create a mysql pool
const pool = mysql.createPool(config);

module.exports = pool;

