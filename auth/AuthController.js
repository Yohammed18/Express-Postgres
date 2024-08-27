//Place authentication logic
var express = require('express')
var router = express.Router()
var bodyParser = require('body-parser')
var AdminRepo = require('./AdminRepo')
const {generateToken} = require('./jwtUtils') 
var bcrypt = require('bcryptjs')

router.use(bodyParser.urlencoded({ extended:false }))
router.use(bodyParser.json())


router.post('/register', async(req, res) => {
    const {name, email, password} = req.body
    // create admin
    try {
        const admin = await AdminRepo.findAdmin(email)
        if(admin){
            return res.status(409).json({
                code: 409,
                status: "Error",
                message: `Admin already exist. Please use a different email login.`
            })
        }
    
        // encrypt password
        var hashPassword = bcrypt.hashSync(password, 8);

        const newAdmin = await AdminRepo.createAdmin(name, email, hashPassword)

        return res.status(201).json({
            code: 201,
            status: 'Create Success',
            message: 'You have register has a new Admin',
            data: newAdmin
        })

        
    } catch (err) {
        console.log(`Error with server: ${err.stack}`)
        return res.status(505).json({
            code: 505,
            status: `Internal Server Error.`,
            message: `Error Login.`
        })
    }
})

router.post('/login', async (req, res) => {
    const { email, password } = req.body

    try {
        const admin = await AdminRepo.findAdmin(email)

        if(!admin){
            return res.status(404).json({
                code: 404,
                status: "NOT FOUND",
                message: `Invalid username`
            })
        }
        
        const isAuthenticated = await bcrypt.compare(password, admin.password)
        
        if(isAuthenticated){
            //Generate token
            const token = generateToken(admin)

            return res.status(200).json({
                code: 200,
                status: true,
                message: 'Authentication successful!',
                token: token
            })
        }else{
            return res.status(401).json({
                code: 401,
                status: false,
                message: `Enter invalid password.`
            })
        }       
    } catch (err) {
        console.log(`Error with server: ${err.stack}`)
        return res.status(505).json({
            code: 505,
            status: `Internal Server Error.`,
            message: `Error Login.`
        })
    }
})



module.exports = router