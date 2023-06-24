'use strict'

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var SessionsSchema = Schema({
    usuario_id: {type: Number, require: true, unique: true},
    jwt_info:{type: String, require: true}
});

module.exports = mongoose.model('sessions', SessionsSchema);