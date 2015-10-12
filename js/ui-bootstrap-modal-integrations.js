/* global angular */
(function() {

  'use strict';

  var app = angular.module('formlyExample', ['formly', 'formlyBootstrap', 'ui.bootstrap']);


  app.controller('MainCtrl', function MainCtrl(formlyVersion, $modal) {
    // vm or $scope
    var $scope = this;
    
    // show survey results
    $scope.formFields = getFormFields();
    $scope.history = getHistory();

    // function definition
    function edit(model, add) {
      var result = $modal.open({
        templateUrl: 'myModalContent.html',
        controller: 'ModalInstanceCtrl',
        controllerAs: '$scope',  // was 'vm' ...
        resolve: {
          formData: function() {
            return {
              fields: getFormFields(),
              model: model
            }
          }
        }
      }).result;
      
      if (add) {
        result.then(function(model) {
          $scope.history.push(model);
        });
      }
    }

    // helper functions
    function getFormFields() {   // table structure (RYAN - possible with HTTP get request?)
      return [
        {'key':'testa','type':'input','templateOptions':{'label':'Test A','placeholder':'Test A'}},
        {'key':'testb','type':'input','templateOptions':{'label':'Test B','placeholder':'Test B'}},
        {'key':'testc','type':'input','templateOptions':{'label':'Test C','placeholder':'Test C'}}
      ];
    }

    function getHistory() {    // table data (RYAN)
      return [
        {testa: 'A Input 1', testb: 'B Input 1'},
        {testa: 'A Input 2', testc: 'B Input 2'},
        {testa: 'A Input 3', testb: 'B Input 3'}
      ];
    }

  });

// 'add row' button opens this modal - use to add variables, questions, etc
  app.controller('ModalInstanceCtrl', function ($modalInstance, formData) {
    // $scope or vm ?
    var $scope = this;
    debugger;

    // function assignment
    $scope.ok = ok;
    $scope.cancel = cancel;

    // variable assignment
    $scope.formData = formData;
    $scope.originalFields = angular.copy($scope.formData.fields);

    // function definition
    function ok() {
      $modalInstance.close($scope.formData.model);
    }

    function cancel() {
      $modalInstance.dismiss('cancel');
    };
  });

})();