var express = require('express');
var router = express.Router();
var Ques = require('../models/questions.js');
var Loc = require('../models/locations.js');
var _ = require('lodash');
var a = [];
/* GET home page. */
router.get('/', function(req, res, next) {
    res.render('index');
});
router.get('/test', function(req, res, next) {
  Ques.find({}, function(err,data){
    if(err)
      console.log(err);
    console.log('Ques: '+ data);
    console.log(data[1]);
    // console.log(data[1].ans.length);
    res.render('test', {data:data});
  })
  
});

router.get('/abc',function(req,res,next){
  Ques.find({}, function(err,data){
    if(err)
      console.log(err);
    console.log('Ques: '+ data);
    res.json(data);
  })
})
router.post('/addAns',function(req,res,next){
  var ans=[];
  ans.push(req.body.foo);
  ans.push(req.body.foo1);
  ans.push(req.body.foo2);
  ans.push(req.body.foo3);
  ans.push(req.body.foo4);
  ans.push(req.body.foo5);
  // if(req.body.foo == null|| 
  //   req.body.foo1 == null|| 
  //   req.body.foo2 == null|| 
  //   req.body.foo3 == null|| 
  //   req.body.foo4 == null|| 
  //   req.body.foo5 == null){
  //       Ques.find({}, function(err,data){
  //       if(err)
  //         console.log(err);
  //       console.log('Ques: '+ data);
  //       console.log(data[1])
  //       // console.log(data[1].ans.length);
        
  //       res.render('index', {data:data});
  //   })
  // }
  console.log(ans);
  for(var i=0;i<6;i++){
      Ques.findOne({'e': ans[i]}, function(err,data){
      if(err) console.log(err);
      a.push(data.c);
      if(a.length==6){
        console.log(a);
        var b = _.intersection(a[0],a[1],a[2],a[3],a[4],a[5]);
        console.log(b);
        a=[];
        Loc.find({'c':b},function(err,loc){
          res.render('show',{loc:loc});
        })
        // res.json(a);
      }
        

    })
    console.log(i);
  }
  

})

router.post('/addLoc', function(req, res, next) {
  // res.render('add.ejs', {});
  console.log(req.body)
  var newLoc = new Loc();
  newLoc.c = req.body.c;
  newLoc.loc = req.body.loc;
  newLoc.lat = req.body.lat;
  newLoc.lon = req.body.lon;
  newLoc.link = req.body.link;

   newLoc.save(function(err) {
    if (err)
        console.log(err);
    });
   console.log("Luu thanh cong cau hoi");
   res.redirect('/users/admin');
});


module.exports = router;
