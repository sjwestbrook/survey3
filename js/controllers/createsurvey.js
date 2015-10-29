// CREATE & SEND SURVEY ========================

app.controller('createSurveyCtrl', function ($http, $scope, $stateParams, $state, topicServ, templateServ, surveyService, topics, templates, groupServ, groups, subjectServ, createSurveyServ) {

    $scope.topicsArray = topics.data;
    $scope.templatesArray = templates.data;
    $scope.groupsArray = groups.data;

    $scope.getGroups = function () {
        groupServ.getGroups().then(function (res) {
            $scope.groupsArray = res.data;
        })
    };

    $scope.getTopics = function () {
        topicServ.getTopics().then(function (res) {
            $scope.topicsArray = res.data;
        })
    };

    $scope.getTemplates = function () {
        templateServ.getTemplates().then(function (res) {
            $scope.templatesArray = res.data;
        })
    };



    // replace variables
    $scope.sendSurvey = function (name, description, subject, group, varReplacement) {

        var stringParseObject = {};
        for (var i = 0; i < $scope.selectedTemplate.varNames.length; i++) {
            stringParseObject[$scope.selectedTemplate.varNames[i]] = varReplacement[i];
        }
        $scope.questions = $scope.selectedTemplate.questions.slice();


        // ng-models
        console.log($scope.survey);
        createSurveyServ.replaceVar($scope.survey.selectedTopic._id, $scope.survey.selectedTopic.topicName, $scope.survey.name, $scope.selectedTemplate.description, $scope.survey.subject, $scope.survey.group._id, $scope.survey.date, $scope.questions, stringParseObject);

        $scope.survey = '';
        $scope.selectedTemplate = '';
    }

});
