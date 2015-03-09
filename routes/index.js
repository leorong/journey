var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('welcome', { title: 'Express' });
});

router.get('/duration', function(req, res, next) {
  res.render('duration', { title: 'Express' });
});

router.get('/timeline', function(req, res, next) {
  res.render('timeline', { title: 'Express' });
});

router.get('/entry', function(req, res, next) {
  res.render('entry', { title: 'Express' });
});

router.get('/awesome', function(req, res, next) {
  res.render('awesome', { title: 'Express' });
});

router.get('/bummer', function(req, res, next) {
  res.render('bummer', { title: 'Express' });
});


module.exports = router;
