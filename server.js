var express = require("express");

// Express Config - Creation
var app = express();
var PORT = process.env.PORT || 3000;

// Express Config - Data Parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Routers
require(path.join(__dirname, "./app/routing/apiRoutes"))(app);
require(path.join(__dirname, "./app/routing/htmlRoutes"))(app);

// Listener
app.listen(PORT, () => {
    console.log("App listening on PORT: " + PORT);
});