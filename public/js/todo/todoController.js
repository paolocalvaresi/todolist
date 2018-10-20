angular.module('app')
    .controller('todoController', function (
        $scope,
        todoService) {

        // DEFINIAMO TUTTA LA LOGICA DEL NOSTRO CONTROLLER
        $scope.titolo = "LA LISTA DELLE COSE DA FARE";

        // RECUPERO I TODOS
        todoService.getAll()
            .then(function (res) {
                $scope.todos = res.data;
            })
            .catch(function (err) {
                console.log(err);
            });


        $scope.inserttodo = function () {

            var nuovo = {
                titolo: $scope.nuovotodo,
                inizio: $scope.data,
                autore: '5bc1ff38fb6fc0602744c8c5'
            }

            todoService.create(nuovo)
                .then(function (res) {
                    return todoService.getAll();
                })
                .then(function (res) {
                    $scope.todos = res.data;
                })
                .catch(function (err) {
                    console.log(err)
                });

        }

        $scope.modifica = function (id, concluso) {
            todoService.update(id, concluso)
                .then(function (res) {
                    return todoService.getAll();
                })
                .then(function (res) {
                    $scope.todos = res.data;
                })
                .catch(function (err) {
                    console.log(err)
                });
        }

        $scope.cancella = function (id) {

            todoService.deleteOne(id)
                .then(function (res) {
                    return todoService.getAll();
                })
                .then(function (res) {
                    $scope.todos = res.data;
                })
                .catch(function (err) {
                    console.log(err)
                });
        }

    });