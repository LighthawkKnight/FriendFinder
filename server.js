var express = require("express");
var path = require("path");

// Express Config - Creation
var app = express();
var PORT = process.env.PORT || 3000;

// Express Config - Data Parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Routers
require("./routes/apiRoutes")(app);
require("./routes/htmlRoutes")(app);

// Listener
app.listen(PORT, () => {
    console.log("App listening on PORT: " + PORT);
});