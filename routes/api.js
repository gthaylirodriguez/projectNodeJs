'use strict'
const express = require('express');
const api = express.Router();
const {body} = require('express-validator');

var WelcomeController = require('../controllers/welcome');
var UsuariosController = require('../controllers/usuariosController');
let AuthController = require('../controllers/authController');

let userProtectUrl = require('../middlewares/authUsuario').userProtectUrl;

api.get("/", WelcomeController.welcome);
api.get("/usuarios", UsuariosController.usuarios);
api.get("/usuario/:filtro", UsuariosController.usuario);
api.post("/usuario",userProtectUrl, [
                    body('usuario_id').not().isEmpty(),
                    body('nombre').not().isEmpty(),
                    body('edad').not().isEmpty(),
                    body('email').not().isEmpty(),
                    body('pass').not().isEmpty()
                ], UsuariosController.crear_usuario);
api.put("/usuario/:filtro",[
                    body('nombre').not().isEmpty(),
                    body('edad').not().isEmpty(),
                    body('email').not().isEmpty(),
                    body('pass').not().isEmpty()
                ], UsuariosController.actualizar_usuario);

api.delete("/usuario/:filtro", UsuariosController.eliminar_usuario);

api.post("/login",[
    body('email').not().isEmpty(),
    body('pass').not().isEmpty()
], AuthController.login);
api.post("/logout", AuthController.logout);
module.exports = api;