var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('profile', { title: 'Express' });
});

router.get('/timeline', function(req, res, next) {
  res.render('timeline', { title: 'Express' });
});

router.get('/entry', function(req, res, next) {
  res.render('entry', { title: 'Express' });
});

module.exports = router;
