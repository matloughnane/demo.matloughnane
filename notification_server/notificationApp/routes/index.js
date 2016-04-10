var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var Token = mongoose.model('Token');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/tokens', function(req, res, next) {
  Post.find(function(err, tokens){
    if(err){ return next(err); }

    res.json(tokens);
  });
});

router.post('/tokens', function(req, res, next) {
  var token = new PushAssociation(req.body);

  token.save(function(err, token){
    if(err){ return next(err); }

    res.json(token);
  });
});

module.exports = router;
