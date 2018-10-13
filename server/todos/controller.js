var Todo = require('./Todo.js');
module.exports = (function () {

    var getAll = function (req, res) {
        Todo
            .find()
            .then(function (data) {
                res.json(data);
            })
            .catch(function (err) {
                res.json(err);
            })
    }
    var getOne = function (req, res) {
        res.send("il todo con id: " + req.params.id);
    }

    var create = function (req, res) {
        var payload = req.body;
        var todo = new Todo(payload);
        todo.save()
            .then(function (data) {
                res.json(data)
            })
            .catch(function (err) {
                res.json(err);
            });

    }

    var update = function (req, res) {
        res.json({
            id: req.params.id,
            dati: req.body
        })
    }

    var deleteOne = function (req, res) {
        res.json({
            id: req.params.id,
        });
    }


    return {
        getAll,
        getOne,
        create,
        update,
        deleteOne
    }

})();