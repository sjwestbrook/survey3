
// STUDENT LOGIN ======================================================

app.controller('studentLogin', function ($scope, $stateParams, $state, $location, $http, studentLoginServ, groupServ, groups) {

    $scope.groupsArray = groups.data;

    $scope.getGroups = function () {
        groupServ.getGroups().then(function (res) {
            $scope.groupsArray = res.data;
        })
    };

    $scope.login = function (email, password) {
        if ((email === "bryan@isaid.hey" || email === "sarah@ilove.cats" || email === "ryan@so.cool") && password === "ialsoloveryan") {
            studentLoginServ.setCurrentUser(email, $scope.selectedGroup);
            $location.url('/students');
        } else {
            $location.url('/home')
        }
    }

});
