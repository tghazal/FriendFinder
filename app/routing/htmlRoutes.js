var express = require("express");
var path = require("path");
var router = express.Router();



//use routers to route to survey page
  router.get("/survey", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/survey.html"));
  });

 // If no matching route is found default to home
  router.get("*", function(req, res) {
   res.sendFile(path.join(__dirname, "../public/home.html"));
 });



module.exports = router;