var express = require('express')
var router = express.Router()
var pool = require('../db')


router.get('', (req, res)=>{
    res.status(200).send("<h1>Welcome to the Author & Book Store</h1>")
})

// Get all authors
router.get('/authors', async (req, res)=>{
    try {
        //query
        const result =  await pool.query("SELECT * FROM author")
        const authors = result.rows
        if(authors){
            res.status(200).json({
                code: 200,
                status: 'OK',
                message: 'All authors have been retrivied',
                data: authors
            })
        } else {
            res.status(404).json({
                code: 404,
                status: 'Not Found',
                message: 'No authors were found',
                error: {
                    code: "NOT FOUND",
                    message: 'No authors were found'
                }
            })
        }
        
    } catch (err) {
        console.error(`Error executing query: ${err.stack}`)
        res.status(500).json({
            code: 500,
            status: 'Internal server Error',
            message: 'Error retrieving authors from table'
        })
    }
})

//get authors by id
router.get('/author/:id', async (req, res)=>{
    let authorId = req.params.id
    try {
        // perform query
        const result = await pool.query(`SELECT * FROM AUTHOR WHERE ID = ${authorId}`)
        const author = result.rows

        if(author.length > 0){
            res.status(200).json({
                code: 200,
                status: 'Author retrievied successfully',
                data: author
            });
        } else {
            res.status(404).json({
                code: 404,                
                status: 'Not Found',
                message: `No author was found with id: ${authorId}`,
                error: {
                    code: "NOT FOUND",
                    message: `No author was found with id: ${authorId}`
                }
            })
        }

    } catch (err) {
        console.error(`Error executing query: ${err.stack}`)
        res.status(500).json({
            code: 500,
            status: `Internal Server Error.`,
            message: `Error retrieiving author(s).`
        })
        
    }
})




module.exports = router;


