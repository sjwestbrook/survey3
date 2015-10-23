// LOGOUT ======================================
//
//app.service('logoutServ', function() {
//  
//  this.logout = function() {
//		localStorage.setItem('');
//	}
//  
//});






// ADMIN LOGIN (currently using fake student credentials)  ====
app.service('adminLoginServ', function() {
  
  this.setCurrentUser = function(email) {
		localStorage.setItem('currentUser', email);
	}
  
});



    
// TOPIC SERVICE ===================================

app.service('topicServ', function($http){
  
  this.addTopic = function(topic) {
    return $http.post('api/topic', topic);
  }
  
  // 'add subject'
  this.updateTopic = function(topic, subjects) {
    return $http.put('api/topic?id=' + topic.topicName._id, subjects);
  }
  
  this.getTopics = function() {
    return $http.get('/api/topic');  
  }
  
});




// SUBJECT SERVICE ===================================

app.service('subjectServ', function($http) {
  
  // not correct ??
  this.getSubjects = function() {
    return $http.get('/api/topic');
  }
  
});
    
    
// GROUP SERVICE ===================================
app.service('groupServ', function($http){
  
  this.addGroup = function(groups) {
    return $http.post('api/recipientGroups', groups);
  } 
  
  this.getGroups = function() {
    return $http.get('api/recipientGroups');
  }
  
});

    


// USER CONSTRUCTOR FUNCTION ========================
    
app.service('newUserServ', function($http){
  
  this.NewUser = function(user) {
      this.email = user.email;
      this.password = user.password;
      this.userType = user.userType;
      this.group = user.group._id;
    }
  
});


// NEW USER =========================================
app.service('userServ', function($http, newUserServ){

  this.addUser = function(users) { 
    
    for (var i = 0; i < users.length; i++) {
      var newUser = new newUserServ.NewUser(users[i]); 
      $http.post('/api/signup', newUser);
    }
    
  }    
});




// TEMPLATE SERV ===========================================   

app.service('templateServ', function($http){  
  
  this.addTemplate = function(template) {
    return $http.post('api/surveyTemplates', template);
  } 
  
  this.getTemplates = function() {
    return $http.get('api/surveyTemplates');
  };

  this.removeAnswer = function(index, array) {
		array.splice(index, 1);
	}
  
});

    


// SEND SURVEY ==========================

app.factory('surveyService', function() {

	return {
		
		SurveyTemplate: function( name, description, questions, varNames ) {
			this.name = name;
			this.description = description;
			this.questions = questions;
			this.varNames = varNames;
		},

		ParsedSurveyTemplate: function( topicId, topicName, name, description, subject, group, date, questions ) {
			this.publicName = name;
			this.topicName = topicName;
			this.topicId = topicId;
			this.description = description;
			this.subject = subject;
      this.recipientGroup = group;
      this.date = date;
			this.questions = questions;
		},

	}

});



app.service('createSurveyServ', function($http, surveyService) { 
  
  // replace variables & parse survey
  this.replaceVar = function(topicId, topicName, name, description, subject, group, date, questions, parseObject) {  // parse object 

    function stringParser(match) {
			return parseObject[match];
		}
    
		for (var i = 0; i < questions.length; i++) {
      var question = questions[i];
			for (var key in question) {
// if key is an array, look in the array for the variable & replace
				if ( Array.isArray(question[key]) ) {
					for (var j = 0; j < question[key].length; j++) {
						question[key][j] = question[key][j].replace(/\$\$.*?\$\$/g, stringParser)
					}
				} 
 // if key isn't an array, just replace the variable in the string
        else {
					question[key] = question[key].replace(/\$\$.*?\$\$/g, stringParser)
				}
			}
		}
    
    description = description.replace(/\$\$.*?\$\$/g, stringParser);

		var newSurvey = new surveyService.ParsedSurveyTemplate( topicId, topicName, name, description, subject, group, date, questions);

		return $http.post('/api/parsedSurveys', newSurvey)
  
  };   // end replaceVar
    
});
    

      

// GET SURVEYS ==================================

app.service('surveysServ', function($http){
  
  this.getSurveys = function() {
		return $http.get('/api/parsedSurveys')
	}
  
});



   
// STUDENT SURVEYS ====================================

// LOGIN ===========================
app.service('studentLoginServ', function() {
  
  this.setCurrentUser = function(email, group) {
    var user = {email: email, group: group}
		localStorage.setItem('currentUser', email);
    localStorage.setItem('userGroup', group)
	}
  
});




// GET SURVEYS PER STUDENT ===============================
app.service('studentsServ', function($http, surveysServ){  
  
  this.takeSurveys = function() {
		var user = localStorage.getItem('currentUser'),
        group = localStorage.getItem('userGroup'),
        openSurveys = [];
    
		surveysServ.getSurveys()
			.then(function(response) {
				var surveyData = response.data;

				for (var i = 0; i < surveyData.length; i++) { debugger;

						if (surveyData[i].recipientGroup.groupName === group && surveyData[i].takenBy.indexOf(user) === -1) {
							openSurveys.push(surveyData[i]);
					}
				}
      return openSurveys;
			})
    console.log(openSurveys)
			return openSurveys;
	};
  
  
  //===========
  
  
  this.parseToFormlyData = function( survey ) {
		if (!survey) {
			return;
		}
		
		var questions = survey.questions,
			formlyArray = [];

		for (var i = 0; i < questions.length; i++) {
			
			formlyArray.push({
				key: questions[i]._id,
				type: questions[i].questionType,
				templateOptions: {
					label: questions[i].titleText,
					description: questions[i].helpText,
				}
			})

			if (questions[i].questionType === 'radio' || questions[i].questionType === 'multiCheckbox') {
				formlyArray[i].templateOptions.options = [];
				for (var j = 0; j < questions[i].answers.length; j++) {
					formlyArray[i].templateOptions.options.push({
						name: questions[i].answers[j],
						value: questions[i].answers[j]
					})

					formlyArray[i].templateOptions.labelProp = 'name';
					formlyArray[i].templateOptions.valueProp = 'value';

				}
			}
		}
		return formlyArray;
	}

  
  // SUBMIT TAKEN SURVEYS ====================================

  this.postCompletedSurvey = function( response, selectedSurvey ) {
      response.surveyId = selectedSurvey._id;
      var user = localStorage.getItem('currentUser');

      $http.put(connectionInfo.url + '/api/topic/results?id=' + selectedSurvey.topicId + '&subjectId=' + selectedSurvey.subject._id, response)
        .then(function(res) {
          console.log(res);
        })

      $http.put(connectionInfo.url + '/api/parsedSurveys/takenBy?id=' + selectedSurvey._id, {user: user})
        .then(function(res) {
          console.log(res);
        })
    }

  
});















//