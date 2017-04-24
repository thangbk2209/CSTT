var mongoose=require('mongoose');

var questionSchema=mongoose.Schema({
		cauhoi: String,
		ans:[{
			cautraloi: String,
		}]
});

module.exports = mongoose.model('Question',questionSchema);
