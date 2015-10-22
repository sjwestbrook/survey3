app.service('createSurveyServ', function($http, surveyService) { 
  
  
  // replace variables
  this.replaceVar = function(topicId, topicName, name, description, subject, questions, parseObject) {
    
    function stringParser(match) {
			return parseObject[match];
		}
    
		for (var i = 0; i < questions.length; i++) {
      var questions = questions[i];
			for (var key in questions) {
// if key is an array, look in the array for the variable & replace
				if ( Array.isArray(questions[key]) ) {
					for (var j = 0; j < questions[key].length; j++) {
						questions[key][j] = questions[key][j].replace(/\$\$.*?\$\$/g, stringParser)
					}
				} 
 // if key isn't an array, just replace the variable in the string
        else {
					questions[key] = questions[key].replace(/\$\$.*?\$\$/g, stringParser)
				}
			}
		}
    
    description = description.replace(/\$\$.*?\$\$/g, stringParser);

		var newSurvey = new surveyService.ParsedSurveyTemplate( topicId, topicName, name, description, subject, questions);

		return newSurvey;  // 'newParsedSurvey
  
  };   // end replaceVar

  
  
  this.addSurvey = function( newSurvey ) {
		console.log(newSurvey)
		return $http.post(connectionInfo.url + '/api/parsedSurveys', newSurvey)
	}  
  
});
   