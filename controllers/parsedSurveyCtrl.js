var ParsedSurvey = require('../models/ParsedSurveyModel.js');

module.exports = {
	getSurveys: function(req, res) {
		ParsedSurvey.find()
      .populate('recipientGroup')
      .exec().then(function(data) {
			 res.send(data);
		})
	},

	addSurvey: function(req, res) {
		new ParsedSurvey(req.body).save(function(err, data) {
			if (err) {
				res.status(500).send(err);
			} else {
				res.send(data);
			}
		})
	},

	updateSurvey: function(req, res) {
		ParsedSurvey.findById(req.query.id, function(err, survey) {
			survey.takenBy.push(req.body.user)
				survey.save(function(err, data) {
					if (err) {
						res.status(500).send(err);
					} else {
						res.send(data);
					}
				})
		})
	},

	deleteSurvey: function(req, res) {
		ParsedSurvey.findByIdAndRemove(req.query.id).then(function(err, data) {
			if (err) {
				res.error(500).send('broken');
			} else {
				res.send(data);
			}
		})

	}
}