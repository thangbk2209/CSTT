var express = require('express');
var router = express.Router();
var Ques = require('../models/question.js');
var Loc = require('../models/locations.js');
router.get('/:loc',function(req,res,next){
  var loc = req.params.loc;
  console.log(loc);
  Loc.findOne({'loc':loc}, function(err,data){
    if(err) console.log(err);
    console.log(data);
    console.log(data.lat);
    res.render("Location",{data:data,lat:data.lat,lon:data.lon});
  })
})
module.exports = router;