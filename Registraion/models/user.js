/**
 * Created with JetBrains WebStorm.
 * User: DPanda
 * Date: 11/21/16
 * Time: 3:22 PM
 * To change this template use File | Settings | File Templates.
 */

// Dependencies
var restful = require('node-restful');
var mongoose = restful.mongoose;

// Schema
var productSchema = new mongoose.Schema({
    fname: String,
    lname: String,
    email: String,
    gender1:String,
    phno: Number,
    password1:String

});

// Return model

module.exports = restful.model('users', productSchema);

