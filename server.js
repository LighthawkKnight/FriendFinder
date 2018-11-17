var express = require("express");

// Express Config - Creation
var app = express();
var PORT = process.env.PORT || 3000;

// Express Config - Data Parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Routers
require("./app/routing/apiRoutes.js")(app);
require("./app/routing/htmlRoutes.js")(app);

// Listener
app.listen(PORT, () => {
    console.log("App listening on PORT: " + PORT);
});