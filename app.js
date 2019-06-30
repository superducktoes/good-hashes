const express = require("express");
const bodyParser = require("body-parser");
var handlebars = require('express-handlebars').create({defaultLayout:'main'});
var path = require('path');

const port = 3000;
const app = express();

const routes = require("./routes/routes.js");

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true,
}));

app.engine('handlebars', handlebars.engine);
app.set('view engine', 'handlebars');
app.use(express.static("public"));

routes(app);

// Start the server
const server = app.listen(port, (error) => {
    if (error) return console.log(`Error: ${error}`);

    console.log(`Server listening on port ${server.address().port}`);
});
