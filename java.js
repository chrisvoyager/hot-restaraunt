// Dependencies
// =============================================================
var express = require("express");
var path = require("path");

var app = express();
var PORT = 3000;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

var tables = [];

//create new reservations
app.post("/api/tables", function(req, res) {
  var newTable = req.body;

  console.log(newTable);

  tables.push(newTable);

  res.json(newTable);
});

app.listen(PORT, function() {
  console.log("App listening on PORT " + PORT);
});
