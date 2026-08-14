const mysql = require('mysql2/promise');

const pool = mysql.createPool({
    host: 'localhost',
    port: 3307,
    user: 'root',
    password: 'ifsp',
    database: 'portal',
    waitForConnections: true,
    connectionLimit: 10,
    queueLimit: 0
});

console.log(`Pool de conexões criado`);
module.exports = pool;