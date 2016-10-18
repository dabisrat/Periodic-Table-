var express = require('express');
var bodyParser = require('body-parser');
var app = express();

var port = process.env.PORT || 8000;
app.get("/", function(req, res){
  res.send('This site is currently under maintenance, please come back later')
});

app.listen(port);
console.log('server running on port', port)
