// CREATE USERS ===================================

app.controller('usersCtrl', function ($http, $scope, $stateParams, $state, groupServ, groups, userServ, newUserServ, userServ) {

    $scope.group = {};
    $scope.groupsArray = groups.data;

    $scope.users = [{}];

    $scope.getGroups = function () {
        groupServ.getGroups().then(function (res) {
            $scope.groupsArray = res.data;
        })
    };


    // add and remove user(s) 
    $scope.newUser = function () {
        $scope.users.push({});
    };

    $scope.removeUser = function () {
        $scope.users.pop();
    };


    // submit
    $scope.addUser = function () {
        userServ.addUser($scope.users);

        //correct? does clear form
        $scope.users = [{}];
    }

});