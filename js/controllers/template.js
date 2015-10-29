
// CREATE TEMPLATE ==========================

app.controller('templateCtrl', function ($http, $scope, $stateParams, $state, templateServ) {

    $scope.template = {};
    $scope.template.questions = [{
        titleText: '',
        helpText: '',
        questionType: '',
        answers: ['']
    }];


    // add/remove variables
    $scope.template.varNames = [''];

    $scope.addNewVar = function () {
        $scope.template.varNames.push('');
    };

    $scope.removeVar = function () {
        $scope.template.varNames.pop();
    };

    $scope.addQuestion = function () {
        $scope.template.questions.push({
            titleText: $scope.titleText,
            helpText: $scope.helpText,
            questionType: $scope.questionType,
            answers: ['']
        })
    };

    $scope.removeQuestion = function () {
        $scope.template.questions.pop('');
    };


    $scope.addAnswer = function (question) {
        question.answers.push('');
    };

    $scope.removeAnswer = function (index, array) {
        array.splice(index, 1);
    };

    $scope.addTemplate = function () {
        console.log($scope.template);
        templateServ.addTemplate($scope.template);
        $scope.template = '';
    };

});
