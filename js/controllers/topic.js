// CREATE TOPIC ===================================
app.controller('topicCtrl', function ($http, $scope, $stateParams, $state, topicServ) {

    $scope.addTopic = function () {
        topicServ.addTopic($scope.topic);
        $scope.topic = '';
    }

});

