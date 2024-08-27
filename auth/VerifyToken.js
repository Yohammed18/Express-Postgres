var jwt = require('jsonwebtoken')
var config = require('../config')


verifyToken = (req, res, next) =>{

    var token = req.headers['x-access-token']

    if(!token){
        return res.status(403).json({
            code: 403,
            auth: false,
            message: 'No token provided.'
        })
    }

    jwt.verify(token, config.secret, (err, decoded)=>{
        if(err){ 
            return res.status(500).json({
                code: 500,
                auth: false,
                message: 'Failed to authenticate token.'
            })
        }

         //save the request for use in outer routes
         req.userId = decoded
         next();
    });   
}

module.exports = verifyToken