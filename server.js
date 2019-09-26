// dependancies
var express = require("express");
var app = express();
var path = require("path");
var bodyParser = require("body-parser");
var PORT = process.env.PORT || 3000;

// body parser to handle midway data parsing
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// set up static pages css
app.use(express.static(path.join(__dirname, ".app/public/home.html")));

app.use(express.urlencoded({ extended : true }));
app.use(express.json());

// link routes
require(path.join(__dirname, "./app.routing/apiRoutes"))(app);
require(path.join(__dirname, "./app/routing/htmlRoutes"))(app);

// starts the server to begin listening
app.listen(PORT, function(){
    console.log("App listening on PORT localhost: " + PORT);
});