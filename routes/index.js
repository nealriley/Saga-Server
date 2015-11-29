var express = require('express');
var router = express.Router();
var fs = require('fs');
var path = require('path');


/* GET home page. */
router.get('/public/*.*', function(req, res, next) {
  var options = {
    root: __dirname + '/../',
    dotfiles: 'deny',
    headers: {
        'x-timestamp': Date.now(),
        'x-sent': true
    }
  };
  console.log("Good " + req.path);
  var fileName = req.path;
  res.sendFile(fileName, options, function (err) {
      if (err) {
        console.log(err);
        res.status(err.status).end();
      }
      else {
        console.log('Sent:', fileName);
      }
    });
});

router.get('*\.*', function(req, res, next) {
  console.log("Bad " + req.path);
  res.sendStatus(404);
});
/* GET home page. */
router.get('*', function(req, res, next) {
  var options = {
    root: __dirname + '/../templates/',
    dotfiles: 'deny',
    headers: {
        'x-timestamp': Date.now(),
        'x-sent': true
    }
  };
  console.log("Good " + req.path);
  var fileName = req.path+'/index.html';
  res.sendFile(fileName, options, function (err) {
      if (err) {
        console.log(err);
        res.status(err.status).end();
      }
      else {
        console.log('Sent:', fileName);
      }
    });
});

module.exports = router;
