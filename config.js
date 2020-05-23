const mysql = require('mysql');

// Connect to MySql
const con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "ramesh7337",
    database : 'test'
});

module.exports = con;