var express = require("express");
var burger = require("../models/burger");
var app = express();

app.get("/", function(req, res) {
  res.render("index", { burgers: burger.selectAllBurgers() });
});
