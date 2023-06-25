'use strict'
const jwt = require('jsonwebtoken');
const {validationResult} = require('express-validator');

var Usuarios = require('../models/usuarios');
var Sessions = require('../models/sessions');

var controller = {
    login: function (req, res){
        //Validamos los datos que se envian al endpoint
        const errors = validationResult(req);
        if(!errors.isEmpty()){
            return res.status(400).json({errors: errors.array()})
        }

        let info_login = req.body;
        Usuarios.findOne({email:  info_login.email, pass: info_login.pass}).exec((err, usuario)=>{
            if (err) return res.status(500).json({ status: 500,  mensaje: err  });
            if (!usuario) return res.status(200).json({ status: 200,  mensaje: "Los datos no son válidos" });
            
            const payload ={
                usuario_id : usuario.id
            };

            const access_token = jwt.sign(payload, 'TV9L0kB46idk6yS7S6vIT17jaHBhLBflwhX2YAGH4Lpb7gWtBr', {
                expiresIn: '1d'
            })

            let update ={
                usuario_id: usuario.id,
                jwt_info: access_token
            };

            Sessions.findOneAndUpdate({usuario_id: usuario.id}, update, {upsert: true, new: true}, (err, sessionsUpdate)=>{
                if (err) return res.status(500).send({message: err});
                if (!sessionsUpdate) return res.status(404).send({message: 'Datos incorrectos'});
                return res.status(200).json({
                    status: 200,
                    data: 'Autentificación correcta',
                    token: access_token
                }); 
            });
        });
    },

    logout: function (req, res){

        Sessions.findOneAndRemove({usuario_id: req.decoded.usuario_id}, (err, usuarioDeleted)=> {
            if (err) return res.status(500).send({message: err});
            if (!usuarioDeleted) return res.status(404).send({message: "Datos erróneos logout"});

            return res.status(200).send({message: 'Sesión cerrada'});
        });
        
    }
    

};

module.exports = controller;