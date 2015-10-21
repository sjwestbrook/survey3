var mongoose = require('mongoose'),
	Schema = mongoose.Schema,
	RecipientGroups = require('./RecipientGroupsModel.js');

var TopicSchema = new Schema({

	topicName: String,
	subjects: [String]
		
});

module.exports = mongoose.model('Topic', TopicSchema);


