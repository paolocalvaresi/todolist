angular.module('app').controller('todoController', function ($scope) {

    //DEFINIAMO TUTTA LA LOGICA DEL NOSTRO CONTROLLER
    $scope.titolo = "LA LISTA DELLE COSE DA FARE";
    $scope.todos = [
        {
            titolo: "Scaricare bootstrap",
            fatto: false
        },
        {
            titolo: "Scaricare fontawesome",
            fatto: false
        },
        {
            titolo: "abbellire la applicazione",
            fatto: false
        },
        {
            titolo: "fare la spesa",
            fatto: true
        },
        {
            titolo: "andare al cinema",
            fatto: false
        },
        {
            titolo: "spiegare angular",
            fatto: true
        }
    ];

    $scope.inserttodo = function () {

        var nuovo = {
            titolo: $scope.nuovotodo,
            fatto: false
        }

        $scope.todos.unshift(nuovo);
    }

    $scope.modifica = function (indice) {
        $scope.todos[indice].fatto = !$scope.todos[indice].fatto
    }

    $scope.cancella = function (indice) {
        $scope.todos.splice(indice, 1);
    }

});