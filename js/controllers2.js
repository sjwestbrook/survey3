app.controller('mainCtrl', function ($scope, $stateParams, $state) {
});

// HOME ===========================================

app.controller('homeCtrl', function ($scope, $stateParams, $state) {
});

// LOGOUT ====================================================

app.controller('logout', function ($scope, $stateParams, $state, $location, logoutServ) {

    $scope.logout = function () {
        logoutServ.logout();
        $location.url('/home');
    }

});

// ADMIN CONTROLLERS ============================================

// ADMIN LOGIN ======================================================

app.controller('adminLogin', function ($scope, $stateParams, $state, $location, $http, adminLoginServ) {

    $scope.login = function (email, password) {
        if ((email === "bryan@isaid.hey" || email === "sarah@ilove.cats" || email === "ryan@so.cool") && password === "ialsoloveryan") {
            $location.url('/admin');
        } else {
            $location.url('/home')
        }
    }

});



// CREATE TOPIC ===================================
app.controller('topicCtrl', function ($http, $scope, $stateParams, $state, topicServ) {

    $scope.addTopic = function () {
        topicServ.addTopic($scope.topic);
        $scope.topic = '';
    }

});



// CREATE SUBJECT ===================================


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
        $scope.subjects = '';
    }

});


// CREATE GROUP ===================================

app.controller('groupCtrl', function ($http, $scope, $stateParams, $state, groupServ) {


    $scope.addGroup = function () {
        groupServ.addGroup($scope.group);
        $scope.group = '';
    }

});


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




    // submit button on create/send survey  -- adminctrl + admin serv -- noted

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
        })
    }

});




// STUDENT CONTROLLERS CONTROLLER ============================================

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


// GET NEW SURVEYS =========================================

app.controller('studentsCtrl', function ($http, $rootScope, $scope, $stateParams, $state, $location, studentsServ, $timeout) {
    //  $scope.response = {};
    $scope.newSurveys = [];

    // click button to get list of new surveys
    $scope.takeSurveys = function () {
        $scope.newSurveys = studentsServ.takeSurveys();
        //    console.log($scope.newSurveys);

    };


    // doesn't show the survey - must click update button in openSurveyCtrl
    $scope.changeSelectedSurvey = function (survey) {
        // console.log('changing state: ', survey._id);

        $state.go('students.opensurveydetails', {
            id: survey._id
        });
        // $location.path('/students/opensurvey/' + survey._id);
    }
});


//OPEN SELECTED SURVEY

app.controller('openSurveyCtrl', function ($http, $rootScope, $scope, $stateParams, $state, studentsServ, $timeout) {
    $scope.response = {};
    $scope.newSurveys = [];
    $scope.surveyid = $stateParams.id;

    $scope.update = function () {
        $scope.fields = $rootScope.survey;
    }


    //A - ****Use $stateParams to get :surveyId****
    //B - Ask studentServ to change selectedSurvey 
    //  - This needs to take in an id now and not a whole survey
    //  - This should return the survey object
    //Then invoke opensurvey with with returned survey object

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