var app = angular.module('surveyApp', ['ui.router', 'formly', 'formlyBootstrap', 'ui.bootstrap', 'ui.bootstrap.modal']); 


app.config(function($stateProvider, $urlRouterProvider) {
  $urlRouterProvider.otherwise('home');
  

  $stateProvider
    .state('home', {
      templateUrl: 'js/templates/home.html',
      controller: 'homeCtrl'
    })

    .state('admin', {
      url: '/admin',
      templateUrl: 'js/templates/admin2.html',
      controller: 'adminCtrl'   
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
              },
              resolve: {
                groups: function(groupServ){
                  return groupServ.getGroups();
                }
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
            templateUrl: 'js/templates/users.html',
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
              subjects: function(subjectServ){
                return subjectServ.getSubjects();
              },
//               groups: function(groupServ){
//                return groupServ.getGroups();
//              },
              templates: function(templateServ){
                return templateServ.getTemplates();
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
              subjects: function(subjectServ){
                return subjectServ.getSubjects();
              }
            }
          })
  
          // confirm survey before sending
          // display label and data entered by admin ?
          // modal?
          .state('admin.createsurvey.confirm-survey', {
            url: '/confirm-survey',
            templateUrl: 'js/templates/confirm-survey.html',
          })
  
          // confirm template before saving
          // display label and data entered by admin ?
          // modal?
          .state('admin.template.confirm-template', {
            url: '/confirm-template',
            templateUrl: 'js/templates/confirm-template.html',
          })
  
  
  
    .state('students', {
      url: '/students',
//      resolve: {
//        newSurveys: function(surveysServ){
//          return surveysServ.getSurveys();
//        }
//      },
      templateUrl: 'js/templates/students.html',
      controller: 'studentsCtrl'
    })

        // open survey that the student has clicked on to complete
        .state('students.opensurvey', {
          url: '/opensurvey',
          templateUrl: 'js/templates/opensurvey.html'
        })

});








// formly-form fields don't display in modal
//
//app.provider('modalState', function($stateProvider) {
//  var provider = this;
//  this.$get = function() {
//      return provider;
//  }
//  this.state = function(stateName, options) {
//    var modalInstance;
//    $stateProvider.state(stateName, {
//      url: options.url,
//      onEnter: function($uibModal, $state) {
//        modalInstance = $uibModal.open(options);
//        modalInstance.result['finally'](function() {
//            modalInstance = null;
//            if ($state.$current.name === stateName) {
//                $state.go('^');
//            }
//        });
//      },
//
//      no 'x' or close button
//      onExit: function() {
//        if (modalInstance) {
//            modalInstance.close();
//        }
//      }
//    });
//  };
//})
//
//
//.config(function($stateProvider, modalStateProvider, $urlRouterProvider) {
//    $urlRouterProvider.otherwise("/");
//
//    $stateProvider
//    .state('home', {
//      templateUrl: 'js/templates/home.html',
//      controller: 'homeCtrl'
//    })
//    
//    .state('students', {
//      url: '/students',
//      templateUrl: 'js/templates/students.html',
//      controller: 'studentsCtrl'
//    })
//
//    .state('admin', {
//      url: '/admin',
//      templateUrl: 'js/templates/admin2.html',
//      controller: function($scope, $state) {
//          $scope.$state = $state;
//      }  
//    });
//
//        modalStateProvider.state('admin.topic', {
//            url: '/topic',
//            templateUrl: 'js/templates/topic.html'
//        });
//        modalStateProvider.state('admin.subject', {
//          url: '/subject',
//          templateUrl: 'js/templates/subject.html'
//        });
//        modalStateProvider.state('admin.group', {
//          url: '/group',
//          templateUrl: 'js/templates/group.html'
//        });
//        modalStateProvider.state('admin.users', {
//          url: '/users',
//          templateUrl: 'js/templates/users.html'
//        });
//        modalStateProvider.state('admin.template', {
//          url: '/template',
//          templateUrl: 'js/templates/template.html'
//        });
//        modalStateProvider.state('admin.surveys', {
//          url: '/surveys',
//          templateUrl: 'js/templates/surveys.html'
//        });
//        modalStateProvider.state('admin.createsurvey', {
//          url: '/createsurvey',
//          templateUrl: 'js/templates/createsurvey.html'
//        });
//  
//});
//
//
//
//
