
var express = require('express');
var path = require('path');
var http = require("http");

var bodyParser = require("body-parser");
var app = express();

var PORT = process.env.PORT || 9090;

// ROUTER
// The below points our server to a series of "route" files.
// These routes give our server a "map" of how to respond when users visit or request data from various URLs.






// view engine setup

app.use('/public', express.static(__dirname + '/public'));



app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());


var htmlRouter = require('./routes/htmlRoutes')(app);
var apiRouter = require('./routes/apiRoutes')(app);


app.listen(PORT, function() {
  console.log("Server listening on: http://localhost:" + PORT);
});


