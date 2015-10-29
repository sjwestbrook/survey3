// CREATE SUBJECT (update on topic) ===================================
app.controller('subjectCtrl', function ($http, $scope, $stateParams, $state, topicServ, topics) {

    $scope.topicsArray = topics.data;
    $scope.subjects = [];

    $scope.getTopics = function () {
        topicServ.getTopics().then(function (res) {
            $scope.topicsArray = res.data;
        });
    }

    // add subject 
    $scope.updateTopic = function () {
        topicServ.updateTopic($scope.topic, $scope.subject).then(function (res) {
            console.log(res);
        });
        $scope.topicsArray = '';
        $scope.subject = '';
    }

});
