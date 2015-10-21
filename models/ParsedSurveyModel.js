var mongoose = require('mongoose'),
	Schema = mongoose.Schema,
	Topic = require('./TopicModel.js');

var ParsedSurveySchema = new Schema({
	publicName: String,
	topicName: String,
	topicId: String,
	description: String,
	takenBy: Array,
  results:  Array,
  date: Date,
  recipientGroup: { type: mongoose.Schema.Types.ObjectId, ref:'RecipientGroup' },
	subject: String,
	questions: [{
		titleText: String,
		helpText: String,
		answers: Array,
		questionType: String
	}]
});

module.exports = mongoose.model('ParsedSurvey', ParsedSurveySchema);