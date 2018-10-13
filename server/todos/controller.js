var Todo = require('./Todo.js');
module.exports = (function () {




    var getAll = function (req, res) {
        var concluso = req.query.concluso;
 
        if (concluso === undefined) {
            var query = Todo.find();

        } else {
            var query = Todo.find({
                concluso: concluso
            })
        }

        query.exec().then(function (data) {
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