var connection = require("connection.js");

var ORM = {
  selectAll: () =>
    connection.query("SELECT * FROM burgers", function(err, res) {
      if (err) throw err;
      return JSON.stringify(res);
    }),

  insertOne: (burger_name, devoured) =>
    connection.query(
      `INSERT INTO burgers (burger_name,devoured) VALUES (${burger_name}, ${devoured})`,
      function(err, res) {
        if (err) throw err;
        $.ajax("/api/burgers", {
          type: "POST",
          data: res[0]
        }).then(() => {
          console.log("added new burger!");
          // Reload the page to get the updated list
          location.reload();
        });
      }
    ),

  updateOne: (burger_name, devoured, oldBurgerName) => {
    connection.query(
      `UPDATE burgers SET burger_name = "${burger_name}", devoured = "${devoured}" WHERE burger_name= "${oldBurgerName}"`
    );
  },

  deleteOne: () => {
    connection.query(
      `DELETE FROM burgers WHERE id = this.data.burgerId`,
      function(err, res) {
        if (err) throw err;
      }
    );
  }
};

module.exports = ORM;
