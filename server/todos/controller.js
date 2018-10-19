var Todo = require('./Todo.js');
var User = require('../users/User.js');
module.exports = (function () {

    var getAll = function (req, res) {
        var concluso = req.query.concluso;

        if (concluso === undefined) {
            var query = Todo.find(); //EQUIVALE AL FIND ALL

        } else {
            var query = Todo.find({ //EQUIVALA UN FIND ALL WHERE
                concluso: concluso
            })
        }

        query
            .populate('autore')
            .exec()
            .then(function (data) {
                res.json(data)
            })
            .catch(function (err) {
                res.json(err);
            })



    }
    var getOne = function (req, res) {
        Todo.findById(req.params.id)
            .then(function (data) {
                res.json(data)
            })
            .catch(function (err) {
                res.json(err);
            })
    }

    var create = function (req, res) {
        var nuovo = req.body;
        var todo = new Todo(nuovo);

        todo.save()
            .then(function (data) {
                res.json(data);
            })
            .catch(function (err) {
                res.json(err);
            })

    }

    var update = function (req, res) {
        Todo.findByIdAndUpdate(req.params.id, req.body)
            .then(function (data) {
                res.json(data);
            })
            .catch(function (err) {
                res.json(err);
            });
    }

    var deleteOne = function (req, res) {
        Todo.findByIdAndRemove(req.params.id)
            .then(function (data) {
                res.json(data)
            })
            .catch(function (err) {
                res.json(err);
            })
    }


    return {
        getAll,
        getOne,
        create,
        update,
        deleteOne
    }

})();