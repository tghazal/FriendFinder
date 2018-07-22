
var friendsArray = require("../data/friends");
var newFriend = [];


module.exports = function (app) {

    app.get("/api/friends", function (req, res) {
        res.json(friendsArray);
      
    })


    app.post("/api/friends", function (req, res) {

        var data = req.body;
        //if friend array is emty send res message res.send("no other friends")
        var diff = []
        for (var t = 0; t < friendsArray.length; t++) {
            diff[t] = 0;
        }
        //compare data with the friends array and decide which one is the closet 
        for (var x = 0; x < friendsArray.length; x++) {
            for (var y = 0; y < friendsArray[x].scores.length; y++) {
                diff[x] += Math.abs(friendsArray[x].scores[y] - data.scores[y]);
            }
        }
        var index = indexOfSmallest(diff);
        function indexOfSmallest(a) {
            var lowest = 0;
            for (var i = 1; i < a.length; i++) {
                if (a[i] < a[lowest]) lowest = i;
            }
            return lowest;
        }

        console.log(diff);
        friendsArray.push(data);
        res.send(friendsArray[index]);




    })


}


