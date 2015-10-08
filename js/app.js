var app = angular.module('surveyApp', ['ui.router']);  // , 'formly', 'formlyBootstrap'

app.config(function($stateProvider, $urlRouterProvider) {
  $urlRouterProvider.otherwise("/");

  // url, templateUrl ok? or just use a template that appears below the tiles?

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

    .state('students', {
      url: '/students',
      templateUrl: 'js/templates/students.html',
      controller: 'studentsCtrl'
    })

});
