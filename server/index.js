var express = require('express');
var app = express();
var mongoose = require('mongoose');

//connessione al database
require('./config/db.js');


// REQUIRE DELLE ROTTE DELLA MIA APPLICAZIONE
require('./routes/routes.js')(express, app);

app.listen(3000, function () {
    console.log("http://localhost:3000")
})