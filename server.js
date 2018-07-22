
var express=require("express");
var bodyParser = require("body-parser");
var path=require("path");
var apiRoutes = require("./app/routing/apiRoutes");
var  htmlRoutes=require("./app/routing/htmlRoutes")
// Tells node that we are creating an "express" server
var app = express();

// Sets an initial port. We"ll use this later in our listener
var PORT = process.env.PORT || 3000;

// Sets up the Express app to handle data parsing
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());


// require("./app/routing/apiRoutes")(app);
// require("./app/routing/htmlRoutes")(app);


app.use(apiRoutes);
app.use(htmlRoutes);

app.listen(PORT, function() {
    console.log("App listening on PORT: " + PORT);
  });
  