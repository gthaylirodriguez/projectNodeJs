'use strict'

var UserProject = require('../models/userProject')

var controller = {
    usuarios: function (req, res){
        UserProject.find({}).exec((err, usuarios)=>{
            if (err) return res.status(500).json({
                status: 500,
                mensaje: err
            });
            console.log(usuarios);
        });
    }
};

module.exports = controller;