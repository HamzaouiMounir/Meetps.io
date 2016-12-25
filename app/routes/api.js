var express = require('express');
var router = express.Router();
var feedbackData = require('../data/feedback.json');
var bodyParser = require('body-parser');
var fs = require('fs');
//route on home page /
router.get('/api',function(req,res){
   
   res.json(feedbackData);
});

router.use(bodyParser.json());
router.use(bodyParser.urlencoded({ extended:false}));
router.post('/api',function(req,resp){
    feedbackData.unshift(req.body);
    fs.writeFile('app/data/feedback.json',JSON.stringify(feedbackData),'utf-8',function(err){
            if(err)
            console.log(err);
    });
    resp.json(feedbackData);
});

router.delete('/api/:id',function(req,resp){
    feedbackData.splice(req.params.id,1);
    fs.writeFile('app/data/feedback.json',JSON.stringify(feedbackData),'utf-8',function(err){
            if(err)
            console.log(err);
    });
    resp.json(feedbackData);
});
module.exports=router;

