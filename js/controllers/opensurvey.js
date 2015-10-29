//OPEN SELECTED SURVEY

app.controller('openSurveyCtrl', function ($http, $rootScope, $scope, $stateParams, $location, $state, studentsServ, $timeout) {
    $scope.response = {};
    $scope.newSurveys = [];
    $scope.surveyid = $stateParams.id;

  studentsServ.changeSelectedSurvey($scope.surveyId);
  
    $scope.update = function () {
      $http.get('/api/parsedSurveys/one?id=' + $stateParams.id)
        .then(function(response){
        $scope.selectedSurvey = response.data;
        console.log($scope.selectedSurvey);
        $scope.fields = studentsServ.parseToFormlyData(response.data) 
        console.log($scope.fields);
      })
      console.log('this one', JSON.stringify($stateParams));
    }

    $scope.test = "This is the open survey Ctrl";


    $scope.opensurvey = function (survey) {
        $scope.formly = studentsServ.parseToFormlyData(survey);
        console.log($scope.formly);
    };

    // submit survey
    $scope.postResponse = function () {
        studentsServ.postCompletedSurvey($scope.response, $scope.selectedSurvey);
        $location.url('/students');
    }
});