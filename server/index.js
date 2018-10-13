var express = require('express');
var app = express();

//connessione al database
require('./config/db');

// REQUIRE DELLE ROTTE DELLA MIA APPLICAZIONE
require('./routes/routes.js')(express,app);

app.listen(3000, function () {
    console.log("http://localhost:3000")
})
