var mongoose=require('mongoose');

var locationSchema=mongoose.Schema({
	c: Number,
	loc: String,
});

module.exports = mongoose.model('Location',locationSchema);