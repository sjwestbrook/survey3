app.controller('mainCtrl', 
//  $scope.mainmessage = "hi main";

});




// HOME ===========================================


app.controller('homeCtrl', function($scope,$stateParams,$state) {
//  $scope.homemessage = "hi home";

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
  
  // specify fields as an array - all fields need a type, template, or templateURL
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
  function onSubmit() {
    //http request to post to server
    http.post('/api/topic?id=' + topic_id);  // syntax? id?
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
  
  function onSubmit() {
    //http request to post to server
    http.post('/api/topic?id=' + subjectName);  // syntax? id?
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
  
  function onSubmit() {
    //http request to post to server
    http.post('/api/recipientGroups?id=' + groupName);  // syntax? id?
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
  
  function onSubmit() {
    //http request to post to server
    http.post('/api/recipientGroups?id=' + users);  // syntax? id?
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
  
  function onSubmit() {
    //http request to post to server
    http.post('/api/surveyTemplates?id=' + name);  // syntax? id?
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
  
  function onSubmit() {
    //http request to post to server ??;
    http.post('/api/parsedSurveys?id=' + name);  // syntax? id?
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
  
  function onSubmit() {
    // http request to get completed surveys from server
    // all parsed surveys ?
    // results array on topic modal
    http.get('/api/parsedSurveys?id=' + subjects.results);  // syntax? id?
  }

});




// MAIN STUDENTS CONTROLLER ============================================

app.controller('studentsCtrl', function($scope,$stateParams,$state) {

  // need to show results array (ng-repeat, or ui-router equivalent) when a particular survey is selected
  
  
  function onSubmit() {  // change function name
    http.get('/api/parsedSurveys?id=' + subjects.results);  // syntax? id?
  }
  
});
