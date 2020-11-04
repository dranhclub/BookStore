const mysql = require('mysql2/promise');

var conn = mysql.createPool({
  host: "localhost",
  user: "root",
  password: "123456",
  database: 'bookstore',
  waitForConnections: true,
  connectionLimit: 100,
  queueLimit: 0
});

// conn.connect(function(err) {
//   if (err) throw err;
//   console.log("MySQL Connected!");
// });

module.exports = conn;
