var Survey = require('../models/SurveyTemplateModel.js');

module.exports = {

	getSurveys: function(req, res) {
		Survey.find().then(function(data) {
			res.send(data);
		})
	},

	addSurvey: function(req, res) {
		new Survey(req.body).save(function(err, data) {
			if (err) {
				res.status(500).send(err);
			} else {
				res.send(data);
			}
		})
	},

	updateSurvey: function(req, res) {
		Survey.findByIdAndUpdate(req.query.id, req.body, function(err, data) {
			if (err) {
				res.error(500).send('broken');
			} else {
				res.send(data)
			}
		})
	},

	deleteSurvey: function(req, res) {
		Survey.findByIdAndRemove(req.query.id).then(function(err, data) {
			if (err) {
				res.error(500).send('broken');
			} else {
				res.send('deleted');
			}
		})

	}

}