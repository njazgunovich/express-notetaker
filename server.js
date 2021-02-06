// Dependencies
// =============================================================
var express = require("express");
var router = express.Router()

// Sets up the Express App
// =============================================================
var app = express();
var PORT = process.env.PORT || 3000;

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("Develop/public"))

app.use('', require("./routes/api-routes"))
app.use('', require("./routes/html-routes"))
    // Starts the server to begin listening
    // =============================================================
app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
});