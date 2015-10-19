var mongoose = require('mongoose'),
	Schema = mongoose.Schema,
	Topic = require('./TopicModel.js');

var RecipientGroupsSchema = new Schema({
	groupName: String
	// users: [{
	// 	name: String,
	// 	email: String
	// }]
});


module.exports = mongoose.model('RecipientGroup', RecipientGroupsSchema);
