// File for HTML GET requests for routes

var path = require("path");

module.exports = (app) => {

    app.get("/survey", (req, res) => {
        res.sendFile(path.join(__dirname, "../public/survey.html"));
    })

    app.get("*", (req, res) => {
        res.sendFile(path.join(__dirname, "../public/home.html"));
    })
}