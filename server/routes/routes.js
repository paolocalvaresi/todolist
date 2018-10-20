var path = require('path');
var bodyparser = require('body-parser');

var todos = require('../todos/todos.js');

var path = require('path');

module.exports = function (express, app) {

    //PARSE APPLICATION/JSON
    app.use(bodyparser.json());

    //SERVIAMO  I MODULI AL CLIENT
    app.use('/angular', express.static(path.join(__dirname, '..', '..', 'node_modules', 'angular')));
    app.use('/bootstrap', express.static(path.join(__dirname, '..', '..', 'node_modules', 'bootstrap','dist')));
    app.use('/jquery', express.static(path.join(__dirname, '..', '..', 'node_modules', 'jquery','dist')));
    app.use('/moment', express.static(path.join(__dirname, '..', '..', 'node_modules', 'moment')));
    app.use('/datetimepicker', express.static(path.join(__dirname, '..', '..', 'node_modules', '@ui-platform', 'angularjs-bootstrap4-datetimepicker','dist')));
    app.use('/datetimeinput', express.static(path.join(__dirname, '..', '..', 'node_modules', 'angular-date-time-input', 'src')));

    //SERVIAMO JS AL CLIENT
    app.use('/js', express.static(path.join(__dirname, '..', '..', 'public', 'js')));
    app.use('/css', express.static(path.join(__dirname, '..', '..', 'public', 'css')));
    app.use('/images', express.static(path.join(__dirname, '..', '..', 'public', 'images')));


    //Utilizzo il router todos per tutte le rotte che partono con /todos
    app.use('/todos', todos);

    //Mi invia la index.html al cliente
    app.get('/*', function (req, res) {
        res.sendFile(path.join(__dirname, '..', '..', 'public', 'index.html'));
    });
}