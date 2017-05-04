var express = require('express');
var router = express.Router();

/* GET users listing. */

router.get('/',isLoggedIn, function(req, res, next) {
  res.render('index',{message:req.flash('loginMessage')});
});
router.get('/admin', function(req, res, next) {
  res.render('add.ejs', {});
});
module.exports = router;

function isLoggedIn(req,res,next){
  if(req.isAuthenticated()){
    login=true;
    return next();
  }
  res.redirect('/');
}

