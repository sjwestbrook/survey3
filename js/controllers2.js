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

  $scope.model = {};
  
  $scope.addTopic = function() {
    topicServ.addTopic($scope.topic);
    console.log($scope.topic)
  }
    
});






// CREATE SUBJECT ===================================


app.controller('subjectCtrl', function($http, $scope,$stateParams,$state, topicServ, subjectServ, groupServ, topics) {
  
  $scope.topicsArray = topics.data;
  
  $scope.getTopics = function() {
      topicServ.getTopics().then(function(res){
        $scope.topicsArray = res.data;
        console.log($scope.topicsArray)
      })                            
    }
 
   $scope.addSubject = function() {
      subjectServ.addSubject($scope.subject);
      console.log($scope.subject);
   }
  

});


// CREATE GROUP ===================================

app.controller('groupCtrl', function($http, $scope,$stateParams,$state, groupServ) {
  
  $scope.model = {};  
  
   $scope.addGroup = function() {
      groupServ.addGroup($scope.model);
      console.log($scope.modal);
   }
   
});


// CREATE USERS ===================================

app.controller('usersCtrl', function($http, $scope,$stateParams,$state, groupServ, userServ, groups) {
  
  console.log(1111111111, groups.data);

  $scope.groupsArray = groups.data;
  
   $scope.getGroups = function() {
      groupServ.getGroups().then(function(res) {
        $scope.groupsArray = res.data;        
      })
    }
   
  $scope.model = {}; 
   
   $scope.addUser = function() {
      userServ.addUser($scope.model);
   }
  
});



// CREATE TEMPLATE ==========================

app.controller('templateCtrl', function($http, $scope,$stateParams,$state, templateServ) {
  
  $scope.model = {};
  
  $scope.addTemplate = function() {
      templateServ.addTemplate($scope.model);
   }
  
});



// CREATE & SEND SURVEY ========================

// keys correct?
// add Group dropdown?

app.controller('createSurveyCtrl', function($http, $scope,$stateParams,$state, topicServ, subjectServ, templateServ, createSurveyServ, topics, subjects, template) {
   
  //  console.log(1111111, topics.data)
  
  $scope.topicsArray = topics.data;
  $scope.subjectsArray = subjects.data;
  $scope.templatesArray = template.data;
  
  $scope.getTopics = function() {
    topicServ.getTopics().then(function(res){
      $scope.topicsArray = res.data;
    })                            
  }
  
  // how to access subjects, not topics?
  $scope.getSubjects = function() {
    subjectServ.getSubjects().then(function(res) {
      $scope.subjectsArray = res.data;       
    })
  }
  
  //not field select?
  $scope.getTemplates = function() {
    templateServ.getTemplates().then(function(res) {
      $scope.templatesArray = res.data;       
    })
  }
  
  $scope.model = {};  
  
  $scope.addSurvey = function() {
      createdSurveyServ.addSurvey($scope.model);
   }
    
});



// VIEW SURVEY RESULTS ========================

app.controller('surveysCtrl', function($http, $scope,$stateParams,$state, topics) {
  
  //  console.log(1111111, topics.data)
  
  $scope.topicsArray = topics.data;
  
//  $scope.model = {};
  
  $scope.getTopics = function() {
    topicServ.getTopics().then(function(res){
      $scope.topicsArray = res.data;
    })                            
  }
  
  //not field select?
  $scope.getTemplates = function() {
    subjectServ.getTemplates().then(function(res) {
      $scope.fieldsSelect = res.data;       
    })
  }
  
    
  //not field select?
  $scope.getSurveyResults = function() {
    surveysServ.getSurveyResults().then(function(res) {
      $scope.fieldsSelect = res.data;       
    })
  }

});




// MAIN STUDENTS CONTROLLER ============================================

// GET SURVEYS =========================================

app.controller('studentsCtrl', function($http, $scope,$stateParams,$state, studentsServ) {
  
  
  
  //  display list of surveys yet to take on page load
  // not field select?
  // filter based on student logged in and 'takenBy' array
  
  // not field select?
  $scope.getSurveys = function() {
    surveysServ.getSurveys().then(function(res) {
      $scope.fieldsSelect = res.data;       
    })
  }
  
   
  $scope.model = {};
  
  //  student submits completed survey

  $scope.addCompletedSurvey = function() {
    studentsServ.addCompletedSurvey($scope.model);
  }
  
  
  
  

});
