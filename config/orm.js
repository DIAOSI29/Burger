var connection = require("./connection");

var ORM = {
  selectAll: cb =>
    connection.query("SELECT * FROM burgers", function(err, res) {
      if (err) throw err;
      cb(res);
    }),

  insertOne: (burger, cb) => {
    var queryString = "INSERT INTO burgers (burger_name) VALUES (?)";
    connection.query(queryString, [burger], function(err, result) {
      if (err) {
        throw err;
      }
      cb(result);
    });
  },

  updateOne: (id, cb) => {
    var queryString = "UPDATE burgers SET devoured = true WHERE id = ?";

    connection.query(queryString, [id], function(err, result) {
      if (err) {
        throw err;
      }
      cb(result);
    });
  },

  deleteOne: (id, cb) => {
    connection.query("DELETE FROM burgers WHERE id = ?", [id], function(
      err,
      res
    ) {
      if (err) throw err;
      cb(res);
    });
  }
};

module.exports = ORM;
