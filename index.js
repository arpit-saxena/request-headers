var express = require('express');
var app = express();

app.use("/",express.static(__dirname + "/public"));

app.get("/whoami", function(req, res) {
  req.setEncoding('utf8');
  var ip = req.connection.remoteAddress;
  console.log(req.connection);
  var user_agent = req.headers['user-agent'];
  var lang = req.headers['accept-language'].split(/,|;/)[0];
  var info = {
    "ipaddress": ip,
    "language": lang,
    "software": user_agent
  };
  res.json(info);
});

app.listen(process.env.PORT || 3000);
