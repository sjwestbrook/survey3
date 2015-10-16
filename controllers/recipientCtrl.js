var RecipientGroup = require('../models/RecipientGroupsModel.js');

module.exports = {
	getRecipientGroups: function(req, res) {
		RecipientGroup.find().then(function(data) {
			res.send(data);
		})
	},

	addRecipientGroups: function(req, res) {
		new RecipientGroup(req.body).save(function(err, data) {
			if (err) {
				res.status(500).send(err);
			} else {
				res.send(data);
			}
		})
	},

	updateRecipientGroups: function(req, res) {
//    console.log (req.body);
		RecipientGroup.findByIdAndUpdate(req.query.id, req.body, function(err, data) { 
			if (err) {
				res.error(500).send('broken');
			} else {
				res.send(data)
			}
		})
	},

	deleteRecipientGroups: function(req, res) {
		RecipientGroup.findByIdAndRemove(req.query.id).then(function(err, data) {
			if (err) {
				res.error(500).send('broken');
			} else {
				res.send(data);
			}
		})

	}
}