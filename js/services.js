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

    

    

app.service('userServ', function($http){
  
//  this.getUsers = function() {
//    return $http.get('api/recipientGroups');
//  }

  
//  this.users = [
//    {name: 'Jane Doe', email: 'jane@test.com'}
//    {name: 'John Doe', email: 'john@test.com'}
//    {name: 'Jack Doe', email: 'jack@test.com'}
//  ];
//  
//  this.addUser = function(user) {
//    this.users.push(user);
//  };
//  
//  this.form={
//    name: '',
//    email: '',
//  };
//  
});


    

app.service('templateServ', function($http){
  
  this.addTemplate = function(template) {
    return $http.post('api/surveyTemplates', template);
  } 
  
  this.getTemplates = function() {
    return $http.get('api/surveyTemplates');
  }
  
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