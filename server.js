var express = require("express");
var path = require("path");

// Express Config - Creation
var app = express();
var PORT = process.env.PORT || 3000;

// Express Config - Data Parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Routers
require(path.join(__dirname, "./routing/apiRoutes"))(app);
require(path.join(__dirname, "./routing/htmlRoutes"))(app);

// Listener
app.listen(PORT, () => {
    console.log("App listening on PORT: " + PORT);
});