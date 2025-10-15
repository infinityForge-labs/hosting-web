var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', {page:'Home', menuId:'home'});
});

router.get('/minecraft', function(req, res, next) {
  res.render('minecraft', {page:'MC Plans', menuId:'minecraft'});
});

router.get('/vps', function(req, res, next) {
  res.render('vps', {page:'VPS Plans', menuId:'vps'});
});

router.get('/rdp', function(req, res, next) {
  res.render('rdp', {page:'RDP Plans', menuId:'rdp'});
});

router.get('/bot', function(req, res, next) {
  res.render('bot', {page:'BOT Plans', menuId:'bot'});
});

router.get('/website', function(req, res, next) {
  res.render('website', {page:'WEBSITE Plans', menuId:'website'});
});

module.exports = router;
