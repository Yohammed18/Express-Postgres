var jwt = require('jsonwebtoken')
var config = require('../config')


// this is a function that will create a token whenever its called. 
const generateToken = (payload) =>{
    const options = {
        expiresIn: '1h' //Token expiration time
    };

    const token = jwt.sign(payload, config.secret, options)
    return token;
}

module.exports = {
    generateToken
}
