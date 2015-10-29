// CREATE GROUP ===================================

app.controller('groupCtrl', function ($http, $scope, $stateParams, $state, groupServ) {


    $scope.addGroup = function () {
        groupServ.addGroup($scope.group);
        $scope.group = '';
    }

});