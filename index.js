var express = require('express');
var app = express();

app.use("/",express.static(__dirname + "/public"));

app.get("/whoami", function(req, res) {
  req.setEncoding('utf8');
});

app.listen(process.env.PORT || 3000);
