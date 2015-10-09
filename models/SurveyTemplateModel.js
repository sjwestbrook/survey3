var mongoose = require('mongoose'),
	Schema = mongoose.Schema;

var SurveyTemplateSchema = new Schema({
	name: String,
	description: String,
	questions: [{
		titleText: String,
		helpText: String,
		answers: Array,
		questionType: String
	}],
	varNames: [String]
});

module.exports = mongoose.model('SurveyTemplate', SurveyTemplateSchema);
