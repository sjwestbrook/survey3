var app = angular.module('surveyApp', ['ui.router', 'formly', 'formlyBootstrap', 'ui.bootstrap', 'ui.bootstrap.modal']); 


app.config(function($stateProvider, $urlRouterProvider) {
  $urlRouterProvider.otherwise("/");
  

  $stateProvider
    .state('home', {
      templateUrl: 'js/templates/home.html',
      controller: 'homeCtrl'
    })

    .state('admin', {
      url: '/admin',
      templateUrl: 'js/templates/admin2.html',
      controller: 'adminCtrl'   // necessary? essentially contains a menu system for navigating between admin pages
    })
  
          .state('admin.topic', {
            url: '/topic',
            templateUrl: 'js/templates/topic.html',
            controller: 'topicCtrl'
          })

          .state('admin.subject', {
            url: '/subject',
            templateUrl: 'js/templates/subject.html',
            controller: 'subjectCtrl'
          })

          .state('admin.group', {
            url: '/group',
            templateUrl: 'js/templates/group.html',
            controller: 'groupCtrl'
          })

          .state('admin.users', {
            url: '/users',
            templateUrl: 'js/templates/users.html',
            controller: 'usersCtrl'
          })

          .state('admin.template', {
            url: '/template',
            templateUrl: 'js/templates/template.html',
            controller: 'templateCtrl'
          })

          .state('admin.surveys', {
            url: '/surveys',
            templateUrl: 'js/templates/surveys.html',
            controller: 'surveysCtrl'
          })
  
          .state('admin.createsurvey', {
            url: '/createsurvey',
            templateUrl: 'js/templates/createsurvey.html',
            controller: 'createSurveyCtrl'
          })
  
          .state('admin.createsurvey.confirm-survey', {
            url: '/confirm-survey',
            templateUrl: 'js/templates/confirm-survey.html',
//            controller: 'confirmSurveyCtrl'  // not yet created - necessary?
          })
  
          .state('admin.template.confirm-template', {
            url: '/confirm-template',
            templateUrl: 'js/templates/confirm-template.html',
//            controller: 'confirmTemplateCtrl'   // not yet created - necessary?
          })
//  
//          ui-router can't transition to this state  
//          .state('admin.template.confirm-template', {
//            abstract: true,
//            parent: 'admin.template',
//            url: '',
//            onEnter: ['$modal', '$state', function($modal, $state) {
//              console.log('Open modal');
//              $modal.open({
//                 template: '<div>Hi</div>',
//                 windowClass: 'right fade'
//              }).result.finally(function() {
//                $state.go('admin.template');
//              });
//            }]
//          })
//  

    .state('students', {
      url: '/students',
      templateUrl: 'js/templates/students.html',
      controller: 'studentsCtrl'
    })

});








//
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
