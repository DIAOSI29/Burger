const express = require("express");
const app = express();
const PORT = process.env.PORT || 3100;
const exphbs = require("express-handlebars");
const routes = require("./controllers/burgers_controller");

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(routes);

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

app.listen(PORT, function() {
  // Log (server-side) when our server has started
  console.log("Server listening on: http://localhost:" + PORT);
});
