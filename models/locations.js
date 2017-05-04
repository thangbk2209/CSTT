var mongoose=require('mongoose');

var locationSchema=mongoose.Schema({
	c: Number,
	loc: String,
	lat: Number,
	lon: Number,
	link: String,
});

module.exports = mongoose.model('Location',locationSchema);