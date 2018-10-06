var path = require('path');
var bodyparser = require('body-parser');

var todos = require('../todos/todos.js');

module.exports = function (express, app) {

    //PARSE APPLICATION/JSON
    app.use(bodyparser.json());

    //Mi invia la index.html al cliente
    app.get('/', function (req, res) {
        res.sendFile(path.join(__dirname, '..', '..', 'public', 'index.html'));
    });

    //Utilizzo il router todos per tutte le rotte che partono con /todos
    app.use('/todos', todos);
}