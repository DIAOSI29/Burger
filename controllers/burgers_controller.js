var express = require("express");
var router = express.Router();
var burger = require("../models/burger");

router.get("/", function(req, res) {
  burger.selectAllBurgers(function(data) {
    console.log(data);
    var hdbobj = {
      burgers: data
    };
    res.render("index", hdbobj);
  });
});

router.post("/", function(req, res) {
  burger.addBurger(req.body.burger_name, _ => {
    res.end();
  });
});

router.put("/:id", function(req, res) {
  burger.updateBurger(req.params.id, _ => {
    res.end();
  });
});

router.delete("/:id", function(req, res) {
  burger.deleteBurger(req.params.id, _ => {
    res.end();
  });
});

module.exports = router;
