'use strict'

var controller = {
    welcome: function(req, res){
    console.log("Ejecutando raiz");
    res.send("Mi primer debug ");
    }
    /*,

    alumnos:function (req, res){
        res.send("Mi listado de alumnos");
    },

    alumno: function(req, res){
        let cal1 = 10;
        let cal2 = 20;

        let final = (cal1+cal2) / 2;
        //res.send("la calificación final es: " + final);
        if (final < 16){
            return res.status(400).json({
                status: 400,
                calfinal: final
            });
        }
        else{
            return res.status(200).json({
                status: 200,
                calfinal: final
            });
        }
    }, 

    crear_alumno: function(req, res){
        let user_info = req.body;
        console.log(user_info);
        //res.send("Creamos el alumno: " + user_info.name + " " + user_info.apellido + " edad: " + user_info.edad);
        return res.status(200).json({
            status: 200,
            nombre_alumno:  user_info.name + " " + user_info.apellido,
            edad: user_info.edad
        });
    }*/
};

module.exports = controller;