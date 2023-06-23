'use strict'

const {validationResult} = require('express-validator');

var Usuarios = require('../models/usuarios')

var controller = {
    usuarios: function (req, res){
        Usuarios.find({}).exec((err, usuarios)=>{
                    if (err) return res.status(500).json({ status: 500,  mensaje: err  });
                    if (!usuarios) return res.status(200).json({ status: 200,  mensaje: "No hay usuarios" });
                    console.log(usuarios);
                    return res.status(200).json({
                        status: 200,
                        data: usuarios
                    });
        });
    },

    usuario: function (req, res){
        let filtro = req.params.filtro;
        console.log(filtro);
        Usuarios.findOne({usuario_id:  filtro}).exec((err, usuario)=>{
            if (err) return res.status(500).json({ status: 500,  mensaje: err  });
            if (!usuario) return res.status(200).json({ status: 200,  mensaje: "No se encontró el usuario" });
            console.log(usuario);
            return res.status(200).json({
                status: 200,
                data: usuario
            }); 
        });
    },

    crear_usuario: function (req, res){
                //Validamos los datos que se envian al endpoint
                const errors = validationResult(req);
        if(!errors.isEmpty()){
            return res.status(400).json({errors: errors.array()})
        }

        let info_usuario = req.body;

        Usuarios.findOne({usuario_id:  info_usuario.usuario_id}).exec((err, usuario)=>{
            if (err) return res.status(500).json({ status: 500,  mensaje: err  });
            if (usuario) return res.status(200).json({ status: 200,  mensaje: "Ya existe el usuario." });

            let usuario_model = new Usuarios;
            usuario_model.usuario_id = info_usuario.usuario_id;
            usuario_model.nombre = info_usuario.nombre;
            usuario_model.email = info_usuario.email;
            usuario_model.edad = info_usuario.edad;
            usuario_model.pass = info_usuario.pass;

            usuario_model.save((err, usuarioStored)=>{
                if (err) return res.status(500).json({ status: 500,  mensaje: err  });
                if (!usuarioStored) return res.status(200).json({ status: 200,  mensaje: "Error al guardar usuario" });
                
            });

            return res.status(200).json({
                status: 200,
                message: "Usuario Almacenado"
            });
        });

    }
};

module.exports = controller;