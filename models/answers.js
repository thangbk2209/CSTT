var mongoose=require('mongoose');

var ansSchema=mongoose.Schema({
	cauhoi: String,
	causo: Number,
	cautraloi: String,
	e: Number,
	c: [Number]
});

module.exports = mongoose.model('Answer',ansSchema);
