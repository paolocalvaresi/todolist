module.exports = (function () {

    var getAll = function (req, res) {
        var genere = req.query.genere;
        res.send(genere);
    }
    var getOne = function (req, res) {
        res.send("il todo con id: " + req.params.id);
    }

    var create = function (req, res) {
        res.send("creo il todo: " + req.body);
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