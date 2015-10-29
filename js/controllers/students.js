app.controller('studentsCtrl', function ($http, $rootScope, $scope, $stateParams, $state, $location, studentsServ, $timeout) {
    $scope.newSurveys = [];

    // click button to get list of new surveys
    $scope.takeSurveys = function () {
        $scope.newSurveys = studentsServ.takeSurveys();
    };


    $scope.changeSelectedSurvey = function (survey) {
        $state.go('students.opensurveydetails', {
            id: survey._id
        });
    }
});
