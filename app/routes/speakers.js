var express = require('express');
var router = express.Router();


//route on speakers page /speakers
router.get('/speakers',function(req,res){
    var info='';
    var dataFile = req.app.get('appData');
    var pagePhotos =[];
    var pageSpeakers = dataFile.speakers;
    dataFile.speakers.forEach(function(item){
        pagePhotos = pagePhotos.concat(item.artwork);
    });
    dataFile.speakers.forEach(function(item){
        info+=`
            <li>
                <h2>${item.name}</h2>
                <p>${item.summary}</p>
                <img src='/images/speakers/${item.shortname}_tn.jpg' alt="Background"/>
            </li>
        `
    });
    res.render('speakers',{
        pageTitle:'Speakers',
        pageID:'speakerList',
        speakers:pageSpeakers,
        artwork:pagePhotos
    });
});

//route on a specific speaker  page /speakers/id
router.get('/speakers/:speakerid',function(req,res){
    var dataFile = req.app.get('appData');
    var pagePhotos =[];
    var pageSpeakers = [];
    dataFile.speakers.forEach(function(item){
        if (item.shortname == req.params.speakerid) {
      pageSpeakers.push(item);
      pagePhotos = pagePhotos.concat(item.artwork);
    }
       
    });
    res.render('speakers',{
        pageTitle:'Speakers Info',
        pageID:'speakerDetail',
        speakers:pageSpeakers,
        artwork:pagePhotos
    });
});

module.exports=router;