var mongoose = require('mongoose'),
	Schema = mongoose.Schema,
	Topic = require('./TopicModel.js');

var ParsedSurveySchema = new Schema({
	publicName: String,
	topicName: String,
	topicId: String,
	description: String,
	takenBy: Array,
	subject: {
		subjectName: String,
		date: Date,
		sessionId: String,
		_id: String,
		recipientGroup: {
			groupName: String,
			users: [{
				name: String,
				email: String
			}]
		},
		results:  Array
	},
	questions: [{
		titleText: String,
		helpText: String,
		answers: Array,
		questionType: String
	}]
});

module.exports = mongoose.model('ParsedSurvey', ParsedSurveySchema);