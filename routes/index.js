var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Welcome, my dear guest!' });
});

router.get('/page2', function(req, res, next) {
  res.render('page2');
});

module.exports = router;
