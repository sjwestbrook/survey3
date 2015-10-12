app.controller('mainCtrl', function($scope,$stateParams,$state) {
//  $scope.mainmessage = "hi main";

});




// HOME ===========================================


app.controller('homeCtrl', function($scope,$stateParams,$state) {
//  $scope.homemessage = "home";

});




// PARENT ADMIN CONTROLLER ============================================


app.controller('adminCtrl', function($scope,$stateParams,$state) {

//  SET UP AUTH
//    - show login form when switching to admin view
//    - hide main content until authenticated  
//    - after authentication
//      - show main content
//      - show logout button
      
    $scope.login = false;

});




// CHILD ADMIN CONTROLLERS ============================================

// TOPIC ===================================
app.controller('topicCtrl', function($scope,$stateParams,$state) {

  //function assignment
  $scope.onSubmit = onSubmit;

  // variable assignment
  $scope.model = {};
  
  $scope.fields = [
    {
      type: 'input',
      key: 'topicName',
      templateOptions: {
        label: 'Topic'
      }
    }
  ]

  // function definition
  function onSubmit(topic) {   
    return $http({
      method: 'POST',
      url: '/api/topic',
      data: topic
    }).then(function(resp){
      return resp;
    });
    
  }

});



// SUBJECT ===================================

app.controller('subjectCtrl', function($scope,$stateParams,$state) {

  $scope.onSubmit = onSubmit;

  $scope.model = {};
  
  $scope.fields = [
    {
      type: 'select',  
      key: 'topicName',
      templateOptions: {
        label: 'Topic'
      }
    },
    {
      type: 'input',   
      key: 'subjects.subjectName',
      templateOptions: {
        label: 'Subject'
      }
    },
    {
      type: 'input',  // date picker requires ui.bootstrap
      key: 'subjects.date',
      templateOptions: {
        label: 'Date'
      }
    },
    {
      type: 'select', 
      key: 'subjects.recipientGroup',
      templateOptions: {
        label: 'Group'
      }
    }
  ]
  
  function onSubmit(subject) {
    return $http({
      method: 'POST',
      url: '/api/topic',
      data: subject
    }).then(function(resp){
      return resp;
    });
  }
  
});



// GROUP ===================================

app.controller('groupCtrl', function($scope,$stateParams,$state) {

  $scope.model = {};
  
  $scope.fields = [
    {
      type: 'input', 
      key: 'groupName',  // lands with recipientGroup?
      templateOptions: {
        label: 'Group'
      }
    },
    {                   // can add users to a group when a group is first created
      type: 'input',   
      key: 'users.name',
      templateOptions: {
        label: 'User Name'
      }
    },
    {
      type: 'input',  
      key: 'users.email',
      templateOptions: {
        label: 'User Email Address'
      }
    }
  ]
  
  function onSubmit(group) {
    return $http({
      method: 'POST',
      url: '/api/recipientGroups',
      data: group
    }).then(function(resp){
      return resp;
    });
  }

});



// USERS ===================================

app.controller('usersCtrl', function($scope,$stateParams,$state) {

  $scope.model = {};
  
  $scope.fields = [
    {
      type: 'select', 
      key: 'subjects.recipientGroup',  // populated by groupName?
      templateOptions: {
        label: 'Group'
      }
    },
    {                 // can add users to an existing group
      type: 'input',   
      key: 'users.name',
      templateOptions: {
        label: 'User Name'
      }
    },
    {
      type: 'input',  
      key: 'users.email',
      templateOptions: {
        label: 'User Email Address'
      }
    }
  ]
  
  //correct url?
  function onSubmit(users) {
    return $http({
      method: 'POST',
      url: '/api/recipientGroups',
      data: users
    }).then(function(resp){
      return resp;
    });
  }
  
});



// CREATE TEMPLATE ==========================

app.controller('templateCtrl', function($scope,$stateParams,$state) {

  $scope.model = {};
  
  $scope.fields = [
    {
      type: 'input', 
      key: 'name',
      templateOptions: {
        label: 'Survey Name'
      }
    },
    {                         
      type: 'input',   
      key: 'description',
      templateOptions: {
        label: 'Survey Description'
      }
    },
    {
      type: 'input',  
      key: 'varNames',
      templateOptions: {
        label: 'Variables'
      }
    },
    {
      type: 'input',  
      key: 'questions.titleText',
      templateOptions: {
        label: 'Question Title Text'
      }
    },
    {
      type: 'input',  
      key: 'questions.helpText',
      templateOptions: {
        label: 'Question Help Text'
      }
    },
    {
      type: 'radio',  
      key: 'questions.questionType',
      templateOptions: {
        label: 'Question Type'
      }
//      "templateOptions": {
//        "label": "Have you tried EmberJs yet?",
//        "options": [
//          {
//            "name": "Multiple Choice",
//            "value": "..."
//          },
//          {
//            "name": "...",
//            "value": "..."
//          },
//          {
//            "name": "...",
//            "value": "no"
//          }
//        ]
//      } 
    },
    {
      type: 'input',  
      key: 'questions.answers',
      templateOptions: {
        label: 'Answers'
      }
    }
  ]
  
  function onSubmit(questions) {    
     return $http({
      method: 'POST',
      url: '/api/surveyTemplates',
      data: questions
    }).then(function(resp){
      return resp;
    });
  }
  
});



// CREATE & SEND SURVEY ========================

// keys correct?

app.controller('createSurveyCtrl', function($scope,$stateParams,$state) {

//  $scope.message = "send surveys";
  
  $scope.model = {};
  
  $scope.fields = [
    {
      type: 'input', 
      key: 'publicName',   // public name, ParsedSurveyModel?
      templateOptions: {
        label: 'Public Survey Name'
      }
    },
    {                         
      type: 'select',   
      key: 'topicName',
      templateOptions: {
        label: 'Topic'
      }
    },
    {
      type: 'select',  
      key: 'subjects.subjectName',
      templateOptions: {
        label: 'Subject'
      }
    },
    {
      type: 'select',  
      key: 'name',  // select survey template  ??
      templateOptions: {
        label: 'Select Survey Template'
      }
    },
    {
      type: 'input',  
      key: 'varNames',
      templateOptions: {
        label: 'Replacement value for $$name$$'
      }
    }
  ]
  
  function onSubmit(survey) {
    return $http({
      method: 'POST',
      url: '/api/parsedSurveys',
      data: survey
    }).then(function(resp){
      return resp;
    });
  }

});



// VIEW SURVEY RESULTS ========================

app.controller('surveysCtrl', function($scope,$stateParams,$state) {

//  $scope.message = "view surveys";
  
  $scope.model = {};
  
  $scope.fields = [
    {
      type: 'select', 
      key: 'topicName',
      templateOptions: {
        label: 'Topic'
      }
    },
    {                         
      type: 'select',   
      key: 'subjects.subjectName',
      templateOptions: {
        label: 'Subject'
      }
    }
  ]  
  
  
  // correct url?
  function onSubmit(results) {
    // http request to get completed surveys from server
    // all parsed surveys ?
    // results array on topic modal    
    return $http({
      method: 'GET',
      url: '/api/parsedSurveys?id=' + subjects.results,
      data: results
    }).then(function(resp){
      return resp;
    });
  }

});




// MAIN STUDENTS CONTROLLER ============================================

app.controller('studentsCtrl', function($scope,$stateParams,$state) {
  
  $scope.message = "students";
  
//  generate list of surveys that a student needs to take

  // need to show takenBy array (ng-repeat, or ui-router equivalent) when a particular survey is selected
  // if student's email shows in the takenBy array, don't list that survey
  
  // correct url? on load?
  function getNewSurveys(newsurveys) {  
    return $http({
      method: 'GET',
      url: '/api/parsedSurveys?id=' + takenBy,
      data: newsurveys
    }).then(function(resp){
      return resp;
    });
  }
  
});
