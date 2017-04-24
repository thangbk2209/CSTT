var express = require('express');
var router = express.Router();
var Ques = require('../models/questions.js');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', {});
});
router.get('/admin', function(req, res, next) {
  res.render('add.ejs', {});
});
router.post('/addQuestion', function(req, res, next) {
  // res.render('add.ejs', {});
  console.log(req.body)
  var newQues = new Ques();
  newQues.cauhoi = req.body.cauhoi;
  newQues.ans.push({cautraloi:req.body.ans1});
  newQues.ans.push({cautraloi:req.body.ans2});
  newQues.ans.push({cautraloi:req.body.ans3});
  newQues.ans.push({cautraloi:req.body.ans4});
  // newQues.ans[1].cautraloi = req.body.ans1;
  // newQues.ans[2].cautraloi = req.body.ans1;
  // newQues.ans[3].cautraloi = req.body.ans1;
   newQues.save(function(err) {
    if (err)
        console.log(err);
    });
   console.log("Luu thanh cong cau hoi");
});


module.exports = router;
