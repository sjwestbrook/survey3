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
app.controller('topicCtrl', function($http, $scope,$stateParams,$state, topicServ) {
  
  $scope.addTopic = function() {
    topicServ.addTopic($scope.topic);
    console.log($scope.topic)
    $scope.topic = '';
  }
    
});






// CREATE SUBJECT ===================================


app.controller('subjectCtrl', function($http, $scope,$stateParams,$state, topicServ, groupServ, topics, groups) {
  
  console.log($scope.topicsArray);  // undefined
  console.log($scope.groupsArray);
  
  $scope.topicsArray = topics.data;
  $scope.groupsArray = groups.data;
//  $scope.subjects = [];
  
  $scope.getTopics = function() {
    topicServ.getTopics().then(function(res){
      $scope.topicsArray = res.data;
//      console.log($scope.topicsArray)
    });                            
  }

  $scope.getGroups = function() {
    groupServ.getGroups().then(function(res) {
      $scope.groupsArray = res.data;        
    });
  }

   // adding subject doesn't work
   $scope.updateTopic = function() {
     console.log($scope.topic);
     topicServ.updateTopic($scope.topic, $scope.subjects).then(function(res){
       console.log(res);
     });
//     $scope.topicsArray = '';
//     $scope.groupsArray = '';
//     $scope.subjects = '';
   }
  

});


// CREATE GROUP ===================================

app.controller('groupCtrl', function($http, $scope,$stateParams,$state, groupServ) {
  
   $scope.addGroup = function() {
     groupServ.addGroup($scope.group);
     console.log($scope.group);
     $scope.group = '';
   }
   
});


// CREATE USERS ===================================

app.controller('usersCtrl', function($http, $scope,$stateParams,$state, groupServ, userServ, groups) {
  
//  console.log(1111111111, groups.data);
  
  $scope.group = {};
  $scope.group.users = [{}];

  $scope.groupsArray = groups.data;
  $scope.users = [{}];
  
  
   $scope.getGroups = function() {
      groupServ.getGroups().then(function(res) {
        $scope.groupsArray = res.data;        
      })
    };

 // add/remove users
  $scope.addUser = function() {
    $scope.group.users.push({
      name: $scope.name,
      email: $scope.email      
    });
    console.log($scope.group.users);
  };
    
  $scope.removeUser = function() {
    $scope.group.users.pop('');
    console.log($scope.group.users);
  };
  
  
   $scope.updateGroup = function() {
     console.log($scope.group);
     groupServ.updateGroup($scope.group, $scope.users).then(function(res){
       console.log(res);
     });
     console.log($scope.users.email, $scope.users.name );
     $scope.groupsArray = '';
     $scope.users = '';
   };
   
});



// CREATE TEMPLATE ==========================

app.controller('templateCtrl', function($http,  $scope,$stateParams,$state, templateServ) {
  
  $scope.template = {};
  $scope.template.questions = [{}];
  $scope.template.questions.answers = [];
  
  // add/remove variables
  $scope.template.varNames = [''];
  
  $scope.addNewVar = function() {
    $scope.template.varNames.push('');
    console.log($scope.template.questions);
  };
    
  $scope.removeVar = function() {
    $scope.template.varNames.pop();
    console.log($scope.template.questions);
  };  
  
  // add/remove questions
  $scope.addQuestion = function() {
    $scope.template.questions.push({
      titleText: $scope.titleText,
      helpText: $scope.helpText,
      questionType: $scope.questionType
    })
    console.log($scope.template.questions);
  };
    
  $scope.removeQuestion = function() {
    $scope.template.questions.pop('');
    console.log($scope.template.questions);
  };
  
  
  // add/remove answers 
  $scope.addAnswer = function() {
    $scope.questions.push('');
    console.log($scope.template.questions);
  };
    
  $scope.removeAnswer = function() {
    $scope.questions.pop();
    console.log($scope.template.questions);
  };
  
  
  $scope.addTemplate = function() {
    templateServ.addTemplate($scope.template);
    console.log($scope.template);
    $scope.template = '';
   };
  
});



// CREATE & SEND SURVEY ========================

// keys correct?
// add Group dropdown?

app.controller('createSurveyCtrl', function($http, $scope,$stateParams,$state, topicServ, subjectServ, templateServ, createSurveyServ, topics, subjects, templates) {
  
  console.log(1111111, topics.data[0].subjects)
  console.log(1111111, topics.data)
  console.log(1111111, templates.data)
    
  
  $scope.topicsArray = topics.data;
  // fix index 0
  $scope.subjectsArray = topics.data[0].subjects;
  $scope.templatesArray = templates.data;
  
  $scope.getTopics = function() {
    topicServ.getTopics().then(function(res){
      $scope.topicsArray = res.data;
    })                            
  };
 
 
      
  // doesn't work, no options
  $scope.getTemplates = function() {
    templateServ.getTemplates().then(function(res) {
      $scope.templatesArray = res.data;       
    })
  }
  
  // add/remove variable replacements
  
  $scope.addSurvey = function() {
    createdSurveyServ.addSurvey($scope.survey);
    $scope.topicsArray = '';
    $scope.subjectsArray = '';
    $scope.templatesArray = '';
    // clear variables
   }
    
});



// VIEW SURVEY RESULTS ========================

app.controller('surveysCtrl', function($http, $scope,$stateParams,$state, topicServ, topics, subjectServ, subjects, surveysServ, survey) {
  
//  console.log(1111111, topics.data)
//  console.log(1111111, subjects.data)
  
  $scope.topicsArray = topics.data;
  // fix index 0
  $scope.subjectsArray = topics.data[0].subjects;
  
  
  $scope.getTopics = function() {
    topicServ.getTopics().then(function(res){
      $scope.topicsArray = res.data;
    })                            
  }
  
  
  
  
  // how to access subjects?
//  $scope.getSubjects = function() {
//    subjectServ.getSubjects().then(function(res) {
//      $scope.subjectsArray = res.data;       
//    })
//  }
  
    
  //not field select?
  $scope.getSurveyResults = function() {
    surveysServ.getSurveyResults().then(function(res) {
      $scope.surveysArray = res.data;  
      console.log($scope.surveysArray);
    })
  }

});




// MAIN STUDENTS CONTROLLER ============================================

// GET SURVEYS =========================================

app.controller('studentsCtrl', function($http, $scope,$stateParams,$state) {
  
  // inject studentsServ
  
  //  display list of surveys yet to take on page load
  // not field select?
  // filter based on student logged in and 'takenBy' array
  
  // not field select?
  $scope.getSurveys = function() {
    surveysServ.getSurveys().then(function(res) {
      $scope.fieldsSelect = res.data;       
    })
  }
  
  
  //  student submits completed survey

  $scope.addCompletedSurvey = function() {
    studentsServ.addCompletedSurvey($scope.model);
    // empty the div 
  }
  
  
  
  

});
