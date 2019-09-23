var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('login');
});

router.get('/me', function (req, res, next) {
  res.render('main');
});

module.exports = router;