//app.service('mainServ', function(){
//  
//});
//
//app.service('homeServ', function(){
//  
//});
//
app.service('adminServ', function(){
  
//  this.auth = function() {
//    
//  };
});




    
// TOPIC SERVICE ===================================

app.service('topicServ', function($http){
  
  this.addTopic = function(topic) {
    return $http.post('api/topic', topic);
  }
  
  // 'add subject'
  this.updateTopic = function(topic, subjects) {
    console.log(topic);
    return $http.put('api/topic?id=' + topic.topicName._id, subjects);
  }
  
  this.getTopics = function() {
    return $http.get('/api/topic');  
  }
});


    
    
// GROUP SERVICE ===================================
app.service('groupServ', function($http){
  
  this.addGroup = function(groups) {
    return $http.post('api/recipientGroups', groups);
  } 
  
  this.getGroups = function() {
    return $http.get('api/recipientGroups');
  }
  
});

    


// USER CONSTRUCTOR FUNCTION ========================
    
app.service('newUserServ', function($http){
this.NewUser = function(user) {
      this.email = user.email;
      this.password = user.password;
      this.userType = user.userType;
      this.group = user.group._id;
    }
});




// NEW USER =========================================
app.service('userServ', function($http, newUserServ){

  this.addUser = function(users) { 
    
    for (var i = 0; i < users.length; i++) {
      var newUser = new newUserServ.NewUser(users[i]); 
      $http.post('/api/signup', newUser);
    }
    
  }
    
});




// TEMPLATE CONSTRUCTOR FUNCTIONS ========================

// inject service into templateServ?  Or is service below ok?  Does send to robomongo

//app.service('newTemplateServ', function($http){
//  this.NewTemplate = function(template) {
//    this.name = template.name;
//    this.description = template.description;
//  };
//
//  // varNames array
//  this.VarNames = function(varNames) {
//    this.varNames = varNames.varName;
//  };
//   
//  // questions array
//  this.Questions = function(questions) {
//    this.titleText: questions.titleText,
//    this.helpText: questions.helpText,
//    this.questionType: questions.questionType,
//    this.answer: questions.answer
//  };
//  
//});




// TEMPLATE SERV ===========================================   

app.service('templateServ', function($http){
  
  
  this.addTemplate = function(template) {
    return $http.post('api/surveyTemplates', template);
  } 
  
  this.getTemplates = function() {
    return $http.get('api/surveyTemplates');
  };

  
});

    
    
    
    

// create and send survey
app.service('createSurveyServ', function($http){
   this.addSurvey = function(survey) {
    return $http.post('api/parsedSurveys', survey);
  } 
});

    
    
    
    

// view survey results
app.service('surveysServ', function($http){
  
  this.getSurveyResults = function() {
    $http.get('api/parsedSurveys');
  }
  
});


    
    
    
// student - surveys to take
app.service('studentsServ', function($http){
  
  this.getSurveys= function() {
    return $http.get('/api/parsedSurveys/takenBy');
  }

});


app.service('studentData', function() {
  
})