const mysql = require("mysql");

connection = mysql.createConnection({
  host: "iwqrvsv8e5fz4uni.cbetxkdyhwsb.us-east-1.rds.amazonaws.com",
  port: 3306,
  user: "p2o8ajlx4c4y1waj",
  password: "id49yesm532wu5et",
  database: "iavglcrs4kmtfe9y"
});

// if (process.env.JAWSDB_URL) {
//   connection = mysql.createConnection(process.env.JAWSDB_URL);
// } else {
// connection = mysql.createConnection({
//   host: "localhost",
//   port: 3306,
//   user: "root",
//   password: "tianqin29",
//   database: "burger_db"
// });
// }
connection.connect(err => {
  if (err) {
    console.error("error connecting: " + err.stack);
    console.log("done?");
    return;
  }

  console.log("connected as id " + connection.threadId);
});

module.exports = connection;
