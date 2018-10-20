var express = require('express');
var app = express();
var path = require('path');

//CONFIGURAZIONE PER LA CONNESSIONE AL DATABASE
require('./config/db.js');

// REQUIRE DELLE ROTTE DELLA MIA APPLICAZIONE
require('./routes/routes.js')(express, app);

//LIVERELOAD
var livereload = require('livereload');
var server = livereload.createServer();
server.watch(path.join(__dirname, "..", "public"));

//START DEL SERVER
app.listen(3000, function () {
    console.log("http://localhost:3000")
})