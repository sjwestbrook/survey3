//app.service('mainServ', function(){
//  
//});
//
//app.service('homeServ', function(){
//  
//});
//
app.service('adminServ', function(){
  
  this.auth = function() {
    
  };
});





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

    
//    
//
//
//app.service('subjectServ', function($http){
// 
//// add subject = update topic
//  
//// access results array in topic model
//  this.getSubjects = function() {
//    return $http.get('/api/topic');
//  }                                                 
//});
//    
//    
//    
    
    

app.service('groupServ', function($http){
  
  this.addGroup = function(groups) {
    return $http.post('api/recipientGroups', groups);
  } 
  
  // adding users - back end not set up to add users
//  this.updateGroup = function(group, users) {
////    console.log(group);
//    return $http.put('api/recipientGroups?id=' + group.groupName._id, users);
//  }
  
  this.getGroups = function() {
    return $http.get('api/recipientGroups');
  }
  
});

    
//USER CONSTRUCTOR FUNCTION ========================
    
app.service('newUserServ', function($http){
this.NewUser = function(user) {
      this.email = user.email;
      this.password = user.password;
      this.userType = user.userType;
      this.group = user.group._id;
    }
});

//===========================
app.service('userServ', function($http, newUserServ){

  this.addUser = function(users) { 
    
    for (var i = 0; i < users.length; i++) {
      var newUser = new newUserServ.NewUser(users[i]); 
      $http.post('/api/signup', newUser);
    }
    
  }
    
});



















//===============================================   

app.service('templateServ', function($http){
  
  this.postSurveyTemplate = function( name, description, questions, varNames ) {
    
    this.name = name;
    this.description = description;
    this.questions = questions; 
    this.varNames = varNames;
    
    
    
		var newSurvey = new surveyService.SurveyTemplate( name, description, questions, varNames );

		return $http.post(connectionInfo.url + '/api/surveyTemplates', newSurvey)
  
  };
  
  
//  this.addTemplate = function(template) {
//    return $http.post('api/surveyTemplates', template);
//  } 
  
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