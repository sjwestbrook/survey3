var app = angular.module('surveyApp', ['ui.router', 'formly', 'formlyBootstrap', 'ui.bootstrap', 'ui.bootstrap.modal'])

.provider('modalState', function($stateProvider) {
    var provider = this;
    this.$get = function() {
        return provider;
    }
    this.state = function(stateName, options) {
        var modalInstance;
        $stateProvider.state(stateName, {
            url: options.url,
            onEnter: function($modal, $state) {
                modalInstance = $modal.open(options);
                modalInstance.result['finally'](function() {
                    modalInstance = null;
                    if ($state.$current.name === stateName) {
                        $state.go('^');
                    }
                });
            },
            onExit: function() {
                if (modalInstance) {
                    modalInstance.close();
                }
            }
        });
    };
})

.config(function($stateProvider, modalStateProvider, $urlRouterProvider) {
    $stateProvider.state('main', {
        url: '',
        templateUrl: 'main.html',
        controller: function($scope, $state) {
            $scope.$state = $state;
        }
    });
    $urlRouterProvider.otherwise('');

    modalStateProvider.state('admin.topic', {
        url: '/topic',
        templateUrl: 'js/templates/topic.html'
    });
    modalStateProvider.state('admin.subject', {
      url: '/subject',
      templateUrl: 'js/templates/subject.html'
    });
    modalStateProvider.state('admin.group', {
      url: '/group',
      templateUrl: 'js/templates/group.html'
    });
    modalStateProvider.state('admin.users', {
      url: '/users',
      templateUrl: 'js/templates/users.html'
    });
    modalStateProvider.state('admin.template', {
      url: '/template',
      templateUrl: 'js/templates/template.html'
    });
    modalStateProvider.state('admin.surveys', {
      url: '/surveys',
      templateUrl: 'js/templates/surveys.html'
    });
    modalStateProvider.state('admin.createsurvey', {
      url: '/createsurvey',
      templateUrl: 'js/templates/createsurvey.html'
    });
  
});