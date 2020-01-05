var ORM = require("../config/orm");

var burger = {
  selectAllBurgers: function(cb) {
    ORM.selectAll(function(res) {
      cb(res);
    });
  },

  addBurger: function(burger, cb) {
    ORM.insertOne(burger, function(res) {
      cb(res);
    });
  },

  updateBurger: function(id, cb) {
    ORM.updateOne(id, function(res) {
      cb(res);
    });
  },

  deleteBurger: function(id, cb) {
    ORM.deleteOne(id, function(res) {
      cb(res);
    });
  }
};

module.exports = burger;
