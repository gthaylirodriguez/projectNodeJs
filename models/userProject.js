'use strict'

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var UserProjectSchema = Schema({
    nombre:{type: String, require: true},
    edad: Number,
    email:{type: String, require: true},
    pass:{type: String, require: true}
});

module.exports = mongoose.model('userProject', UserProjectSchema);