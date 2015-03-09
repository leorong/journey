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

router.get('/jack', function(req, res, next) {
  res.render('jack', { title: 'Express' });
});

router.get('/nick', function(req, res, next) {
  res.render('nick', { title: 'Express' });
});

router.get('/stacy', function(req, res, next) {
  res.render('stacy', { title: 'Express' });
});

module.exports = router;
