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
      
//    $scope.login = false;

});




// CHILD ADMIN CONTROLLERS ============================================


// CREATE TOPIC ===================================
app.controller('topicCtrl', function($http, $scope,$stateParams,$state) {

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
  // submits topic
  // add 'clear fields'
  
//  function onSubmit(topic) {  
//    console.log('test');    
//    return $http.post('api/topic', topic);
  }

});



// CREATE SUBJECT ===================================

// apiCheck errors on select fields

app.controller('subjectCtrl', function($http, $scope,$stateParams,$state) {

  $scope.onSubmit = onSubmit;
  
  $scope.getTopics = function(topics) {
    $http.get('/api/topic').then(function(res) {
      $scope.topicsArray = res.data;
    });
  }
  $scope.getTopics();
  $scope.topicsArray = [];
  
  
  $scope.getGroups = function(groups) {
    $http.get('api/recipientGroups').then(function(res) {
      $scope.fieldsSelect = res.data;
    });
  }
  $scope.getGroups();
  
  $scope.fieldsSelect = [];
  
  $scope.model = {};
  
  $scope.fields = [
    {
      type: 'select',  
      key: 'topicName',
      templateOptions: {
        label: 'Topic',
        options: $scope.topicsArray
      }
    },
    {
      type: 'input',   
      key: 'subjectName',
      templateOptions: {
        label: 'Subject'
      }
    },
    {
      type: 'input',  
      key: 'date',
      templateOptions: {
        label: 'Date'
      }
    },
    {
      type: 'select', 
      key: 'recipientGroup',
      templateOptions: {
        label: 'Group',
        // wants an array, not a function
        options: $scope.fieldsSelect
      }
    }
  ]
  
  function onSubmit(subject) {
//     console.log('test');    
    return $http.post('api/topic', subject);
  }
  
//    return $http({
//      method: 'POST',
//      url: '/api/topic',
//      data: subject
//    }).then(function(resp){
//      return resp;
//    });
//  }
  
});



// CREATE GROUP ===================================

app.controller('groupCtrl', function($http, $scope,$stateParams,$state) {
  
  $scope.onSubmit = onSubmit;
  
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
    return $http.post('api/recipientGroups', group);
  }
  
//    return $http({
//      method: 'POST',
//      url: '/api/recipientGroups',
//      data: group
//    }).then(function(resp){
//      return resp;
//    });
//  }

});



// CREATE USERS ===================================

app.controller('usersCtrl', function($http, $scope,$stateParams,$state) {
  
  $scope.onSubmit = onSubmit;
  
  // user group id?
  $scope.getGroups = function() {
    $http.get('api/recipientGroups').then(function(res) {
      return res;
    });
  }

  $scope.model = {};
  
  $scope.fields = [
    {
      type: 'select', 
      key: 'subjects.recipientGroup',  
      templateOptions: {
        label: 'Group',
        options: $scope.getGroups()
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
  
 
  function onSubmit(users) {
    return $http.post('api/recipientGroups', users);
  }
  
//    return $http({
//      method: 'POST',
//      url: '/api/recipientGroups',
//      data: users
//    }).then(function(resp){
//      return resp;
//    });
//  }
  
});



// CREATE TEMPLATE ==========================

app.controller('templateCtrl', function($http, $scope,$stateParams,$state) {
  
  $scope.onSubmit = onSubmit;
  
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
    // format?
    {
      type: 'radio',  
      key: 'questions.questionType',
      templateOptions: {
        label: 'Question Type'
      } 
    },
    {
      type: 'input',  
      key: 'questions.answers',
      templateOptions: {
        label: 'Answers'
      }
    }
  ]
  
  function onSubmit(template) {  
     return $http.post('api/surveyTemplates', template);
  }
//     return $http({
//      method: 'POST',
//      url: '/api/surveyTemplates',
//      data: questions
//    }).then(function(resp){
//      return resp;
//    });
//  }
//  
});



// CREATE & SEND SURVEY ========================

// keys correct?
// add Group dropdown?

app.controller('createSurveyCtrl', function($http, $scope,$stateParams,$state) {

//  $scope.message = "send surveys";
   
  $scope.onSubmit = onSubmit;
  
  $scope.getTopics = function() {
    $http.get('api/topic').then(function(res) {
      return res;
    });
  }
  
  // get subject off of topic?
  $scope.getSubjects = function() {
    $http.get('api/topic').then(function(res) {
      return res;
    });
  }
  
  $scope.getTemplates = function() {
    $http.get('api/surveyTemplates').then(function(res) {
      return res;
    });
  }
  
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
        // need to define options
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
     return $http.post('api/parsedSurveys', survey);
  }
    
  });
//  
//  function onSubmit(survey) {    
//    return $http({
//      method: 'POST',
//      url: '/api/parsedSurveys',
//      data: survey
//    }).then(function(resp){
//      return resp;
//    });
//  }





// VIEW SURVEY RESULTS ========================

app.controller('surveysCtrl', function($http, $scope,$stateParams,$state) {

//  $scope.message = "view surveys";
  
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
      type: 'select',   
      key: 'subjects.subjectName',
      templateOptions: {
        label: 'Subject'
      }
    }
  ]  
  
  
  function onSubmit() {  
     return $http.get('api/parsedSurveys');
  }
  
//  function onSubmit(results) {
//    // http request to get completed surveys from server
//    // all parsed surveys ?
//    // results array on topic modal    
//    return $http({
//      method: 'GET',
//      url: '/api/parsedSurveys?id=' + subjects.results,
//      data: results
//    }).then(function(resp){
//      return resp;
//    });
//  }

});




// MAIN STUDENTS CONTROLLER ============================================

// GET SURVEYS =========================================

app.controller('studentsCtrl', function($http, $scope,$stateParams,$state) {

  $scope.onSubmit = onSubmit;
  
  $scope.model = {};
    
  //  generate list of surveys that a student needs to take
  // need to show takenBy array when a particular survey is selected (ng-repeat, or ui-router/formly equivalent?)
  // if student's email shows in the takenBy array, don't list that survey
  
  $scope.getNewSurveys = function(surveys) {
    $http.get('api/parsedSurveys').then(function(res) {
      if (takenBy === false) {
        return res;
      }
    });
  }
  
  
  // SET UP FOR ON LOAD ?
  function onSubmit() {  
     return $http.get('api/parsedSurveys');
  }
  
//  function getNewSurveys(newsurveys) {  
//    return $http({
//      method: 'GET',
//      url: '/api/parsedSurveys?id=' + takenBy,
//      data: newsurveys
//    }).then(function(resp){
//      return resp;
//    });
//  }
  
});
