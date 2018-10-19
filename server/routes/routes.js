var path = require('path');
var bodyparser = require('body-parser');

var todos = require('../todos/todos.js');

var path = require('path');

module.exports = function (express, app) {

    //PARSE APPLICATION/JSON
    app.use(bodyparser.json());

    //SERVIAMO ANGULAR AL CLIENT
    app.use('/angular', express.static(path.join(__dirname,'..','..','node_modules','angular')));
    
    //SERVIAMO JS AL CLIENT
    app.use('/js', express.static(path.join(__dirname,'..','..','public','js')));

    //Mi invia la index.html al cliente
    app.get('/*', function (req, res) {
        res.sendFile(path.join(__dirname, '..', '..', 'public', 'index.html'));
    });

    //Utilizzo il router todos per tutte le rotte che partono con /todos
    app.use('/todos', todos);
}