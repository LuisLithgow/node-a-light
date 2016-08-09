'use strict'
// const onOffModel = require("./models/onoff")
const router = require('express').Router();


router.get('/', function(req,res) {
  res.render('index');
})

router.get('/on', function(req,res) {

} )

module.exports = router;
