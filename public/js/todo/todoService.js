angular.module('app').service('todoService', function ($http) {

    // var todos = [{
    //         titolo: "Scaricare bootstrap",
    //         fatto: false
    //     },
    //     {
    //         titolo: "Scaricare fontawesome",
    //         fatto: false
    //     },
    //     {
    //         titolo: "abbellire la applicazione",
    //         fatto: false
    //     },
    //     {
    //         titolo: "fare la spesa",
    //         fatto: true
    //     },
    //     {
    //         titolo: "andare al cinema",
    //         fatto: false
    //     },
    //     {
    //         titolo: "spiegare angular",
    //         fatto: true
    //     }
    // ];

    var getAll = function () {
        return $http({
            method: 'GET',
            url: 'http://localhost:3000/todos'
        });
    }

    var create = function (nuovo) {
        return $http({
            method: 'POST',
            url: 'http://localhost:3000/todos',
            data: nuovo
        });
    }

    var update = function (id, concluso) {
        // todos[indice].fatto = !todos[indice].fatto
        return $http({
            method: 'PUT',
            url: 'http://localhost:3000/todos/' + id,
            data: {
                concluso: !concluso
            }
        });

    }

    var deleteOne = function (id) {
        return $http({
            method: 'DELETE',
            url: 'http://localhost:3000/todos/' + id
        });
    }



    return {
        getAll: getAll,
        create: create,
        update: update,
        deleteOne: deleteOne
    }
})