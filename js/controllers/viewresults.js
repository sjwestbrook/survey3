
// ADMIN - VIEW SURVEY RESULTS ========================

app.controller('surveysCtrl', function ($http, $scope, $stateParams, $state, topicServ, topics, surveysServ) {


    $scope.topicsArray = topics.data;
    $scope.surveysArray = [{}];

    $scope.getTopics = function () {
        topicServ.getTopics().then(function (res) {
            $scope.topicsArray = res.data;
        })
    }

    //=============

    $scope.findQuestions = function (results, surveys) {
        $scope.formattedResults = surveysServ.findQuestions(results, surveys);
    }


    //=============

    $scope.getSurveys = function () {
        surveysServ.getSurveys().then(function (res) {
            $scope.surveysArray = res.data;
          console.log(res.data);
        })
    }

});