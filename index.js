// import the application
const app = require('./app')
//assign port 
const port = process.env.PORT || 5000


// create server to listen to port
var server = app.listen(port, ()=>{
    console.log(`Server is running at http://localhost:${port}`)
})


