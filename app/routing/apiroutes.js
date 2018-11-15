var friendsData = require("../data/friends");
const questions = 10;

module.exports = (app) => {

    // Friends API Link
    app.get("api/friends"), (req, res) => {
        res.json(friendsData);
    }

    // Submit button
    app.post("api/friends", (req, res) => {
        // Takes user data from survey.html in req        
        var user = req.body;
        var rating = [];

        // Total up the difference in values of each person in the api
        for (var i = 0; i < friendsData.length; i++) {
            rating.push(0);
            for (var j = 0; j < questions; j++) {
                rating[i] += Math.abs(user.scores[j] - friendsData[i].scores[j]);
            }
        }

        // Find the person with the lowest difference = best match.
        // Prioritizes newer entries in case of a tie
        var bestRating = rating[0];
        var bestIndex = 0;
        for (var i = 1; i < rating.length; i++)
            if (rating[i] <= bestRating) {
                bestRating = rating[i];
                bestIndex = i;
            }

        // Pushes the new data in the friends array
        friendsData.push(user);
        // Response to send back to page
        res.json(friendsData[bestIndex]);
    })
}