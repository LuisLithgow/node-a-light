'use strict'

const express      = require('express');
const offModel   = require('../models/off');
const offRouter  = express.Router();
// const bodyParser   = require('body-parser');
// const path         = require('path');

// const jsonParser = bodyParser.json();
// const urlencodeParser = bodyParser.urlencoded({extended: false});


offRouter.get('/', offModel.hitOff, (req,res)=> {
  res.redirect("index")
  console.log("just hit the onOffRouter to turn off")
})

module.exports = offRouter
