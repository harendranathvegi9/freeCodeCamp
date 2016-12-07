'use strict';
/* jshint node: true */

var express = require('express');
var router = express.Router();
var path = require('path');

router.use(express.static(__dirname + './../publicPintelest'));

router.get('/', function (req, res, next) {
  console.log('RUTA ', __dirname);
  res.sendFile(path.join(__dirname + './../publicPintelest/pintelest.html'));
});

module.exports = router;
