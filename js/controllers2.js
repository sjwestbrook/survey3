app.controller('mainCtrl', function($scope,$stateParams,$state) {
//  $scope.mainmessage = "hi main";

});




// HOME ===========================================


app.controller('homeCtrl', function($scope,$stateParams,$state) {
//  $scope.homemessage = "home";

});



// PARENT ADMIN CONTROLLER ============================================

app.controller('adminCtrl', function($scope,$stateParams,$state) {

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


app.controller('subjectCtrl', function($http, $scope,$stateParams,$state, topicServ, topics) {
  
  $scope.topicsArray = topics.data;
  console.log($scope.topicsArray);
  $scope.subjects = [];
  
  $scope.getTopics = function() {
    topicServ.getTopics().then(function(res){
      $scope.topicsArray = res.data;
      console.log($scope.topicsArray)
    });                            
  }

   // add subject 
   $scope.updateTopic = function() {
     topicServ.updateTopic($scope.topic, $scope.subject).then(function(res){
          console.log(res);
     });
     console.log($scope.topic);
     console.log($scope.subject);
     $scope.topicsArray = '';
     $scope.subjects = '';
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

app.controller('usersCtrl', function($http, $scope,$stateParams,$state, groupServ, groups, userServ, newUserServ, userServ ) {
  
  $scope.group = {};
  $scope.groupsArray = groups.data;
  
  $scope.users = [{}];
  
  $scope.getGroups = function() {
    groupServ.getGroups().then(function(res) {
      $scope.groupsArray = res.data;        
    })
  };


  // add and remove user(s) as in template.html? 
  $scope.newUser = function() {
    $scope.users.push({});
    console.log($scope.users);
  };
    
  
  $scope.removeuser = function() {
    $scope.users.pop();
    console.log($scope.users);
  };
  
 
  // ie 'submit' add multiple users at once?
  $scope.addUser = function() {
    userServ.addUser ($scope.users);
    console.log($scope.users)
  }
  
  
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

app.controller('createSurveyCtrl', function($http, $scope,$stateParams,$state, topicServ, templateServ, createSurveyServ, topics, templates, groupServ, groups) {    
  
  $scope.topicsArray = topics.data;
  $scope.templatesArray = templates.data;
  $scope.groupsArray = groups.data;
  
  $scope.getGroups = function() {
    groupServ.getGroups().then(function(res) {
      $scope.groupsArray = res.data;        
    })
  };

  $scope.getTopics = function() {
    topicServ.getTopics().then(function(res){
      $scope.topicsArray = res.data;
    })                            
  }; 

  
  $scope.getTemplates = function() {
    templateServ.getTemplates().then(function(res) {
      $scope.templatesArray = res.data;       
    })
  }
  
  
  
  // not working
  
  // add/remove variable replacements
  $scope.addReplacement = function() {
  $scope.template.replacement.push('');
    console.log($scope.template.questions);
  };
    
  $scope.removeReplacement = function() {
    $scope.template.replacement.pop();
    console.log($scope.template.questions);
  };
  
  $scope.addSurvey = function() {
    createSurveyServ.addSurvey($scope.survey);
    console.log($scope.survey);
    $scope.survey = '';
   }
    
});



// VIEW SURVEY RESULTS ========================

app.controller('surveysCtrl', function($http, $scope,$stateParams,$state, topicServ, topics, surveysServ, survey) {
  
  $scope.topicsArray = topics.data;
  $scope.surveysArray = [];
  
  $scope.getTopics = function() {
    topicServ.getTopics().then(function(res){
      $scope.topicsArray = res.data;
    })                            
  }  
  
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
  
  // inject studentsServ when ready
  
  //  display list of surveys yet to take on page load
  // filter based on student logged in and 'takenBy' array
  
  // not field select?
  $scope.getSurveys = function() {
    surveysServ.getSurveys().then(function(res) {
      $scope.fieldsSelect = res.data;       
    })
  }
  
  
// SUBMIT COMPLETED SURVEY ===============================

  $scope.addCompletedSurvey = function() {
    studentsServ.addCompletedSurvey($scope.model);
    // empty the div 
  }
  
  
  
  

});
