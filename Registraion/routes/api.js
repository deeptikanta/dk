
// Dependencies
var express = require('express');
var router = express.Router();

//Product
var Product = require('../models/user');
Product.methods(['get', 'put', 'post', 'delete']);
Product.register(router, '/users1');

// Return router
module.exports = router;