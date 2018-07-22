
//require express 
var express = require("express");
//require friends.js
var friendsArray = require("../data/friends");
//use routers
var router = express.Router();

var newFriend = [];

//use router to get the api 

   router.get("/api/friends", function (req, res) {
        res.json(friendsArray);
      
    })

   router.post("/api/friends", function (req, res) {

        var data = req.body;
        //define new array to hold the differences between the scores of new object  and the scores of all objects in friends array
        var diff = []
        //inizialize values to zeros
        for (var t = 0; t < friendsArray.length; t++) {
            diff[t] = 0;
        }
        //calculate the diffrences and store them in diff array 
        for (var x = 0; x < friendsArray.length; x++) {
            for (var y = 0; y < friendsArray[x].scores.length; y++) {
                diff[x] += Math.abs(friendsArray[x].scores[y] - data.scores[y]);
            }
        }
        //check which value is the smallest and return the index of the smallest value 
        var index = indexOfSmallest(diff);
        function indexOfSmallest(a) {
            var lowest = 0;
            for (var i = 1; i < a.length; i++) {
                if (a[i] < a[lowest]) lowest = i;
            }
            return lowest;
        }

        console.log(diff);
        //push the new object to friend array 
        friendsArray.push(data);
        //send the object which is the best match 
        res.send(friendsArray[index]);




    })





module.exports = router;