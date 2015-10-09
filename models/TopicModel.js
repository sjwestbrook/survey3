var mongoose = require('mongoose'),
	Schema = mongoose.Schema,
	RecipientGroups = require('./RecipientGroupsModel.js');

var TopicSchema = new Schema({

	topicName: String,
	subjects: [{
		subjectName: String,
		date: Date,
		sessionId: String,
		recipientGroup: { type: mongoose.Schema.Types.ObjectId, ref: 'RecipientGroup' },
		results:  Array
	}]
		
});

module.exports = mongoose.model('Topic', TopicSchema);


