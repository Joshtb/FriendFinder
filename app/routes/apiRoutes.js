var express = require('express');
var app = express();
var friendData = require("../data/friends");



module.exports = function(app){
  app.get("/api/friends", function(req,res){
    res.json(friendData);

    

  })


  // API POST Requests
  // Below code handles when a user submits a form and thus submits data to the server.
  // In each of the below cases, when a user submits form data (a JSON object)
  // ...the JSON is pushed to the appropriate JavaScript array
  // (ex. User fills out survey request... this data is then sent to the server...
  // Then the server saves the data to the friends array)
  // ---------------------------------------------------------------------------

  app.post("/api/friends",function(req,res){
   
    //user imput it stored
    var userInput = req.body;
console.log("ayo" + JSON.stringify(userInput));

  
    var userResponse = userInput.scores;
console.log("userresponse" +userResponse)
    var matchName ="";

    var matchImage = "";

    var totalDiff = 10000;

    //comparing the scores for each friend to find best match
    for (var i = 0; i < friendData.length; i++) {
      var diff = 0;
  
      for (var j = 0; j < userResponse.length; j++) {
				diff += Math.abs(friendData[i].scores[j] - userResponse[j]);
			}
    
    
    //if diff is the lowest record the friend match
      if (diff < totalDiff){
        totalDifference = diff;
				matchName = friendData[i].name;
        matchImage = friendData[i].photo;
     
      }
    }
      //new friend
      userInput;
      friendData.push(userInput);


      res.json({status: 'OK', matchName: matchName, matchImage: matchImage});
    


  });

}