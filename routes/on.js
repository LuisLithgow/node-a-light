'use strict'
const express      = require('express');
const onModel   = require('../models/on');
const onRouter  = express.Router();
// const bodyParser   = require('body-parser');
// const path         = require('path');

// const jsonParser = bodyParser.json();
// const urlencodeParser = bodyParser.urlencoded({extended: false});


onRouter.get('/', onModel.hitOn, (req,res)=> {
  res.redirect("index")
  console.log("just hit the onOffRouter to turn On")
})




module.exports = onRouter;

