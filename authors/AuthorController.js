var express = require('express')
var router = express.Router()
var pool = require('../db')
var AuthorRepo = require('../authors/AuthorRepo')


router.get('', (req, res)=>{
    res.status(200).send("<h1>Welcome to the Author & Book Store</h1>")
})

// Get all authors
router.get('/authors', async (req, res)=>{
    try {
        //query
        const authors = await AuthorRepo.findAll();

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
        const author = await AuthorRepo.findById(authorId)
        if(author){
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

router.delete('/delete/:id', async (req, res)=>{
    const authorId = req.params.id

    try {
        const deleted = await AuthorRepo.deleteById(authorId);

        console.log('delete')
        if(deleted){
            res.status(200).json({
                code: 200,
                status: 'OK',
                message: `Author with id ${authorId} has been deleted`,
                data: deleted
            })
        }else{
            res.status(404).json({
                code: 404,
                status: 'Not Found',
                message: `Author with id ${authorId} has was not found`,
                error: {
                    code: 'NOT FOUND',
                    message: `Author with id ${authorId} has was not found`
                }
            })
        }

    } catch (error) {
        console.error('Error executing query: ', error.stack)
        res.status(500).json({
            code: 500,
            status: `Internal Server Error.`,
            message: `Error retrieiving author(s).`
        })
    }
})




module.exports = router;


