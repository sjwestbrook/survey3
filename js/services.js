//app.service('mainServ', function(){
//  
//});
//
//app.service('homeServ', function(){
//  
//});
//
//app.service('adminServ', function(){
//  
//});





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

    
    


app.service('subjectServ', function($http){
 
// add subject = update topic
  
// access results array in topic model
//  this.getSubjects = function() {
//    return $http.get('/api/topic');
//  }                                                 
//});
    
    
    
    
    

app.service('groupServ', function($http){
  
  this.addGroup = function(groups) {
    return $http.post('api/recipientGroups', groups);
  } 
  
  // adding users
  this.updateGroup = function(group, users) {
//    console.log(users);
    return $http.put('api/recipientGroups?id=' + group.groupName._id, users);
  }
  
  this.getGroups = function() {
    return $http.get('api/recipientGroups');
  }
  
});

    

    

app.service('userServ', function($http){
  
  this.getUsers = function() {
    return $http.get('api/recipientGroups');
  }
  
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
//app.service('studentsServ', function($http){
//  
//  // how does this go to the correct survey results?
// update (not add) survey results?
//  this.addCompletedSurvey = function(survey) {
//    return $http.post('api/parsedSurveys', survey);
//  } 
//  
//  // filter to student (based on auth?), then not taken by that student
//  this.getSurveys= function() {
//    return $http.get('api/parsedSurveys');
//  }
//  
//});