const mysql = require("mysql");

var connection = mysql.createConnection({
  host: process.env.BURGER_HOST,
  port: process.env.BURGER_PORT,
  user: process.env.BURGER_USER,
  password: process.env.BURGER_PASSWORD,
  database: process.env.BURGER_DATBASE
});
connection.connect(err => {
  if (err) throw err;
  console.log("Connected!");
});

module.exports = connection;
