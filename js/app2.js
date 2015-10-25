var app = angular.module('surveyApp', ['ui.router', 'formly', 'formlyBootstrap', 'ui.bootstrap']); 


app.config(function($stateProvider, $urlRouterProvider) {
  $urlRouterProvider.otherwise('home');
  

  $stateProvider
    .state('home', {
      templateUrl: 'js/templates/home.html',
      controller: 'homeCtrl'
    })

    .state('adminLogin', {
//      url: '/adminLogin',
      templateUrl: 'js/templates/adminLogin.html',
      controller: 'adminLogin'
    })
  
    .state('admin', {
      url: '/admin',
      templateUrl: 'js/templates/admin3.html',
//      controller: 'adminCtrl'   
    })
  
          .state('admin.topic', {
            url: '/topic',
templateUrl: 'js/templates/topic.html',
            controller: 'topicCtrl',
          })

          .state('admin.subject', {
            url: '/subject',
            templateUrl: 'js/templates/subject.html',
            controller: 'subjectCtrl',
            resolve: {
              topics: function(topicServ){
                return topicServ.getTopics();
              }
            }
          })

          .state('admin.group', {
            url: '/group',
            templateUrl: 'js/templates/group.html',
            controller: 'groupCtrl'
          })

          .state('admin.users', {
            url: '/users',
            templateUrl: 'js/templates/users2.html',
            controller: 'usersCtrl',
            resolve: {
              groups: function(groupServ){
                return groupServ.getGroups();
              }
            }
          })

          .state('admin.template', {
            url: '/template',
            templateUrl: 'js/templates/template.html',
            controller: 'templateCtrl'
          })
  
          // send a survey
          .state('admin.createsurvey', {
            url: '/createsurvey',
            templateUrl: 'js/templates/createsurvey.html',
            controller: 'createSurveyCtrl',
            resolve: {
              topics: function(topicServ){
                return topicServ.getTopics();
              },
              templates: function(templateServ){
                return templateServ.getTemplates();
              },
              groups: function(groupServ){
                return groupServ.getGroups();
              }
            }
          })
  
          // view survey results
          .state('admin.surveys', {
            url: '/surveys',
            templateUrl: 'js/templates/surveys.html',
            controller: 'surveysCtrl',
            resolve: {
              topics: function(topicServ){
                return topicServ.getTopics();
              },
              surveys: function(surveysServ) {
                return surveysServ.getSurveys();
              }
            }
          })
  
  
  
    .state('studentlogin', {
      url: '/studentlogin',
      templateUrl: 'js/templates/studentlogin.html',
      controller: 'studentLogin',
      resolve: {
              groups: function(groupServ){
                return groupServ.getGroups();
              }
      }
    })
  
          .state('students', {
              url: '/students',
              templateUrl: 'js/templates/students.html',
              controller: 'studentsCtrl',
              resolve: {
                surveys: function(surveysServ) {
                        return surveysServ.getSurveys();
                      }
              }      
            })

              // open survey that the student has clicked on to complete
          .state('students.opensurvey', {
            url: '/opensurvey',
            templateUrl: 'js/templates/opensurvey.html',
            controller: 'openSurveyCtrl',
            resolve: {
                surveys: function(surveysServ) {
                        return surveysServ.getSurveys();
                      }
              }   
          })
  
});




