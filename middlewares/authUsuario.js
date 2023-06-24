'use strict'

const jwt = require('jsonwebtoken');

const middlewares = {
    userProtectUrl: function(req, res, next){
        const  token = req.headers['access-token'];

        if (token){
            jwt.verify(token, 'TV9L0kB46idk6yS7S6vIT17jaHBhLBflwhX2YAGH4Lpb7gWtBr', (err, decoded)=>{
                if (err) {
                    return res.status(403).json({message: 'Token no válida'});
                }else{
                    req.decoded = decoded;
                    next();
                }
            });

        }else{
            res.status(403).send({
                message: 'Token no válido'
            });
        }
    }
};

module.exports = middlewares;
