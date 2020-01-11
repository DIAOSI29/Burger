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
  burger.addBurger(req.body.burger_name, function() {});
  burger.selectAllBurgers(function(data) {
    console.log(data);
    var hdbobj = {
      burgers: data
    };
    res.render("index", hdbobj);
  });
});

router.put("/:id", function(req, res) {
  burger.updateBurger(req.params.id, function(answer) {
    console.log("changed?");
    console.log(answer);
    console.log(req.params.id);
    res.redirect("/");
  });
});

router.delete("/:id", function(req, res) {
  burger.deleteBurger(req.params.id, function() {
    res.redirect("/");
  });
});

module.exports = router;
