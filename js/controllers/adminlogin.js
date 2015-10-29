app.controller('adminLogin', function ($scope, $stateParams, $state, $location, $http, adminLoginServ) {

    $scope.login = function (email, password) {
        if ((email === "bryan@isaid.hey" || email === "sarah@ilove.cats" || email === "ryan@so.cool") && password === "ialsoloveryan") {
            $location.url('/admin');
        } else {
            $location.url('/home')
        }
    }

});