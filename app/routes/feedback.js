var express = require('express');
var router = express.Router();
//route on home page /
router.get('/feedback',function(req,res){
   
    res.render('feedback',{
        pageTitle:'Feedback',
        pageID:'feedback',
    });
});
module.exports=router;

