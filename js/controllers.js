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

// TOPIC ===================================
app.controller('topicCtrl', function($scope,$stateParams,$state) {

  //function assignment
  $scope.onSubmit = onSubmit;

  // variable assignment
  $scope.model = {};
  
  // specify fields as an array - all fields need a type, template, or templateURL
  $scope.fields = [
    {
      type: 'input',
      key: 'topicName'
    }
  ]

  // function definition -- ??
  function onSubmit() {
    //http request to post to server ??;
  }

});



// SUBJECT ===================================

app.controller('subjectCtrl', function($scope,$stateParams,$state) {

  //$scope.message = "subject";
  
  $scope.onSubmit = onSubmit;

  $scope.model = {};
  
  $scope.fields = [
    {
      type: 'select',  
      key: 'topicName'
    },
    {
      type: 'input',   
      key: 'subjects.subjectName'
    },
    {
      type: 'input',  // date picker requires ui.bootstrap
      key: 'subjects.date'
    },
    {
      type: 'select', 
      key: 'subjects.recipientGroup'      
    }
  ]
  
  function onSubmit() {
    //http request to post to server ??;
  }
  
});



// GROUP ===================================

app.controller('groupCtrl', function($scope,$stateParams,$state) {

//  $scope.message = "group";
  
  $scope.model = {};
  
  $scope.fields = [
    {
      type: 'input', 
      key: 'groupName'  // lands with recipientGroup?
    },
    {                   // can add users to a group when a group is first created
      type: 'input',   
      key: 'users.name'
    },
    {
      type: 'input',  
      key: 'users.email'
    }
  ]
  
  function onSubmit() {
    //http request to post to server ??;
  }

});



// USERS ===================================

app.controller('usersCtrl', function($scope,$stateParams,$state) {

//  $scope.message = "users";

  $scope.model = {};
  
  $scope.fields = [
    {
      type: 'select', 
      key: 'subjects.recipientGroup'  // populated by groupName?
    },
    {                 // can add users to an existing group
      type: 'input',   
      key: 'users.name'
    },
    {
      type: 'input',  
      key: 'users.email'
    }
  ]
  
  function onSubmit() {
    //http request to post to server ??;
  }
  
});



// CREATE TEMPLATE ==========================

app.controller('templateCtrl', function($scope,$stateParams,$state) {

//  $scope.message = "template";

  $scope.model = {};
  
  $scope.fields = [
    {
      type: 'input', 
      key: 'name'  
    },
    {                         
      type: 'input',   
      key: 'description'
    },
    {
      type: 'input',  
      key: 'varNames'
    },
    {
      type: 'input',  
      key: 'questions.titleText'
    },
    {
      type: 'input',  
      key: 'questions.helpText'
    },
    {
      type: 'input',  
      key: 'questions.questionType'
    },
    {
      type: 'input',  
      key: 'questions.answers'
    }
  ]
  
  function onSubmit() {
    //http request to post to server ??;
  }
  
});



// SEND SURVEY ==============================

// keys correct?

app.controller('surveysCtrl', function($scope,$stateParams,$state) {

//  $scope.message = "send surveys";
  
  $scope.model = {};
  
  $scope.fields = [
    {
      type: 'input', 
      key: 'name'     // public name  ??
    },
    {                         
      type: 'select',   
      key: 'topicName'
    },
    {
      type: 'select',  
      key: 'subjects.subjectName'
    },
    {
      type: 'select',  
      key: 'name'  // select survey template  ??
    },
    {
      type: 'input',  
      key: 'varNames'
    }
  ]
  
  function onSubmit() {
    //http request to post to server ??;
  }

});



// VIEW SURVEYS ==============================

app.controller('surveysCtrl', function($scope,$stateParams,$state) {

//  $scope.message = "view surveys";

});




// MAIN STUDENTS CONTROLLER ============================================

app.controller('studentsCtrl', function($scope,$stateParams,$state) {

  // works
  // $scope.studentsmessage = "hi student, please log in";

  $scope.model = {};
  
  $scope.fields = [
    {
      type: 'select', 
      key: 'topicName'     // public name  ??
    },
    {                         
      type: 'select',   
      key: 'subjects.subjectName'
    },
    // necessary?
    {
      type: 'select',  
      key: 'subjects.recipient group'
    }
  ]
  
  // necessary? need to show results array (ng-repeat, or ui-router equivalent) when a particular topic/subject combo is selected
  //function onSubmit() {
    //http request to post to server ??;
  //}

});
  
});
