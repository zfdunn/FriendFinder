// ------------------------------------------------------------
// dependencies
var path = require("path");
var friends = require("../data/friends.js");

module.exports = function(app){
// ------------------------------------------------------------
// display json of all possible friends
    app.get("/api/friends", function(req, res) {
        console.log(friends);
        res.json(friends);
    }); 
// ------------------------------------------------------------
//handle incoming survey results
    app.post("/api/friends", function(req, res){
// ------------------------------------------------------------
// user input
        var incomingSurv = req.body;
        var surveyResponse = incomingSurv.score;
// ------------------------------------------------------------
// best match
        var matches = 0;
// ------------------------------------------------------------
// minimum difference the user and friend found in common
        var minDifference = 0;
        var scoresArr = [];

        // surveyResponse[i] = parseInt(surveyResonse[i];
// ------------------------------------------------------------
// for loop all existing friends
        for (var i = 0; i < friends.length; i++){
// ------------------------------------------------------------
// difference in questions 
        var diff = 0;
        for (var j = 0; j < surveyResponse.length; j++){
            diff += Math.abs(friend[i].scores.scores[j] - surveyResponse[j]);
            console.log(diff);
            };
            scoresArr.push(diff);
        };
        for (var i = 0; i < scoresArr.length; i++){
            if(scoresArr[i]<=scoresArr[matches]){
                matches = i;
            };
        };
        var bestFriend = friends[matches];
        res.json(bestFriend);
        friends.push(incomingSurv);
    }); 
};