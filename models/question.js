var mongoose=require('mongoose');

var questionSchema=mongoose.Schema({
	question: String
});

module.exports = mongoose.model('Question',questionSchema);