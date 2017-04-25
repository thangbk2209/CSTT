var mongoose=require('mongoose');

var questionSchema=mongoose.Schema({
	cauhoi: String,
	causo: Number,
	cautraloi: String,
	e: Number,
	c: [Number]
});

module.exports = mongoose.model('Question',questionSchema);
