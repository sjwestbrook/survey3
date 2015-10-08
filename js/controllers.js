app.controller('mainCtrl', function($scope,$stateParams,$state) {
  //works
  $scope.mainmessage = "hi main";

});




//======================================================================


app.controller('homeCtrl', function($scope,$stateParams,$state) {
  $scope.homemessage = "hi home";

});




// PARENT ADMIN CONTROLLER ============================================


app.controller('adminCtrl', function($scope,$stateParams,$state) {

  $scope.adminmessage = "hi admin, please log in";

});




// CHILD ADMIN CONTROLLERS ============================================

// see egghead.io tutorial for explanation -- js below is taken directly from that example; revise as necessary
app.controller('topicCtrl', function($scope,$stateParams,$state) {

  // $scope.message = "topic";

  var vm = this;

  //function assignment
  vm.onSubmit = onSubmit;

  // variable assignment
  vm.model = {};
  // specify fields as an array - all fields need a type, template, or templateURL
  vm.fields = [
    {
      type: 'input',
      key: 'firstName',
      templateOption: {
        label: 'First Name'
      }
    },
    {
      // example of using a template instead of a type
      template: '<hr />'   // adds a line on the page
    },
    {
      type: 'select',
      key: 'something',
      templateOptions: {
        label: 'Select Something'
      }
    }
  ]

  // function definition -- ??
  function onSubmit() {
    alert(JSON.stringify(vm.model), null, 2);
  }

});


app.controller('subjectCtrl', function($scope,$stateParams,$state) {

  $scope.message = "subject";

});


app.controller('groupCtrl', function($scope,$stateParams,$state) {

  $scope.message = "group";

});


app.controller('usersCtrl', function($scope,$stateParams,$state) {

  $scope.message = "users";

});


app.controller('templateCtrl', function($scope,$stateParams,$state) {

  $scope.message = "template";

});


app.controller('surveysCtrl', function($scope,$stateParams,$state) {

  $scope.message = "surveys";

});





// MAIN STUDENTS CONTROLLER ============================================

app.controller('studentsCtrl', function($scope,$stateParams,$state) {

  // works
  // $scope.studentsmessage = "hi student, please log in";

});






// FORMLY CONTROLLERS===================================================
