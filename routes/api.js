'use strict'
const express = require('express');
const api = express.Router();

var WelcomeController = require('../controllers/welcome');
var UserProjectController = require('../controllers/userProjectController');


api.get("/", WelcomeController.welcome);

api.get("/usuarios", UserProjectController.usuarios);

/*api.get("/alumno", WelcomeController.alumno );

api.post("/alumno", WelcomeController.crear_alumno);

api.delete("/alumno", (req, res)=>{
    res.send("Eliminamos un alumno");
});*/

 module.exports = api;