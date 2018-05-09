var express = require("express");
var app = express();

app.use(express.static(__dirname + "/public"));

app.set("port", process.env.PORT || 8000);

var options = {
  root: __dirname + "/public"
};

app.get("/game", function(req, res) {
  res.sendFile("/views/game.html", options);
});

app.get("/", function(req, res) {
  res.sendFile("/views/index.html", options);
});

app.get("/rules", function(req, res) {
  res.sendFile("/views/rules.html", options);
});

app.listen(app.get("port"), function() {
  console.log("Example app listening on port", app.get("port"));
});
