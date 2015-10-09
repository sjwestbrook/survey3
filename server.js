var express = require('express'),
	app = express(),
	mongoose = require('mongoose'),
	bodyParser = require('body-parser'),
	cors = require('cors'),
	port = process.env.port || 8000,
	mongoUri = 'mongodb://localhost:27017/topicSurveys';
// 
app.use(bodyParser.json());
app.use(cors());
app.use(express.static(__dirname + '/'))
mongoose.connect(mongoUri);
mongoose.connection.once('open', function() {
	console.log('connected to mongo at ' + mongoUri);
});

var topicCtrl = require('./controllers/topicCtrl.js'),
	recipientCtrl = require('./controllers/recipientCtrl.js'),
	surveyCtrl = require('./controllers/surveyCtrl.js'),
	parsedSurveyCtrl = require('./controllers/parsedSurveyCtrl.js');

//TOPIC
app.get('/api/topic', topicCtrl.getTopic);

app.post('/api/topic', topicCtrl.addTopic);

app.put('/api/topic', topicCtrl.updateTopic);

app.put('/api/topic/results', topicCtrl.pushResults)

app.delete('/api/topic', topicCtrl.deleteTopic);

//RECIPIENTGROUPS
app.get('/api/recipientGroups', recipientCtrl.getRecipientGroups);

app.post('/api/recipientGroups', recipientCtrl.addRecipientGroups);

app.put('/api/recipientGroups', recipientCtrl.updateRecipientGroups);

app.delete('/api/recipientGroups', recipientCtrl.deleteRecipientGroups);

//SURVEY
app.get('/api/surveyTemplates', surveyCtrl.getSurveys);

app.post('/api/surveyTemplates', surveyCtrl.addSurvey);

app.put('/api/surveyTemplates', surveyCtrl.updateSurvey);

app.delete('/api/surveyTemplates', surveyCtrl.deleteSurvey);



//PARSEDSURVEY
// jeremy wants to view surveys
app.get('/api/parsedSurveys', parsedSurveyCtrl.getSurveys);

// jeremy sends new survey
app.post('/api/parsedSurveys', parsedSurveyCtrl.addSurvey);

app.put('/api/parsedSurveys/takenBy', parsedSurveyCtrl.updateSurvey);

app.delete('/api/parsedSurveys', parsedSurveyCtrl.deleteSurvey);






app.listen(port, function() {
	console.log('listening on ' + port);
});

