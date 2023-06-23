'use strict'
const express = require('express');
const api = express.Router();
const {body} = require('express-validator');

var WelcomeController = require('../controllers/welcome');
var UsuariosController = require('../controllers/usuariosController');


api.get("/", WelcomeController.welcome);
api.get("/usuarios", UsuariosController.usuarios);
api.get("/usuario/:filtro", UsuariosController.usuario);
api.post("/usuario",[
                    body('usuario_id').not().isEmpty(),
                    body('nombre').not().isEmpty(),
                    body('edad').not().isEmpty(),
                    body('email').not().isEmpty(),
                    body('pass').not().isEmpty()
                ], UsuariosController.crear_usuario);
 module.exports = api;