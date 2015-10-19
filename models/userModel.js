var mongoose = require('mongoose'),
	bcrypt = require('bcrypt-nodejs');

var UserSchema = mongoose.Schema({
		email: String,
		password: String,
		userType: String,
		groups: [{ type: mongoose.Schema.Types.ObjectId, ref: 'RecipientGroups'}]
});

UserSchema.methods.generateHash = function( password ) {
	return bcrypt.hashSync(password, bcrypt.genSaltSync(8), null);
}

UserSchema.methods.validatePassword = function( password ) {
	return bcrypt.compareSync(password, this.password);
}

module.exports = mongoose.model('User', UserSchema);