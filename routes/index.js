var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('welcome', { title: 'Express' });
});

router.get('/welcome2', function(req, res, next) {
  res.render('welcome2', { title: 'Express' });
});

router.get('/welcome3', function(req, res, next) {
  res.render('welcome3', { title: 'Express' });
});

router.get('/feed', function(req, res, next) {
  res.render('feed', { title: 'Express' });
});

router.get('/news', function(req, res, next) {
  res.render('news', { title: 'Express' });
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

router.get('/setback', function(req, res, next) {
  res.render('setback', { title: 'Express' });
});

router.get('/other', function(req, res, next) {
  res.render('other', { title: 'Express' });
});

module.exports = router;
