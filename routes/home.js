'use strict'
// const onOffModel = require("./models/onoff")
const router = require('express').Router();


router.get('/', function(req,res) {
  res.render('index');
})

// router.get('/onoff', function(req,res) {
//   console.log("ht on route")
// } )

module.exports = router;
