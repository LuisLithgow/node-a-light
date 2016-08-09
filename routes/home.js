'use strict'
// const onOffModel = require("./models/onoff")
const router = require('express').Router();

/****
const {turnOn} = require('./models/onoff')
****/


router.get('/', function(req,res) {
  res.render('index');
})

router.get('/on', turnOn ,function(req,res) {
  res.redirect('index')
} )

module.exports = router;
