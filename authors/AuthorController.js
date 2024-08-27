var express = require('express')
var router = express.Router()
var AuthorRepo = require('../authors/AuthorRepo')
var verifyToken = require('../auth/VerifyToken')


router.get('', (req, res)=>{
    res.status(200).send("<h1>Welcome to the Author & Book Store</h1>")
})

// Get all authors
router.get('/authors', verifyToken,async (req, res, next)=>{
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
router.get('/author/:id', verifyToken, async (req, res)=>{   
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


// delete by id
router.delete('/delete/:id', verifyToken, async (req, res)=>{
    const authorId = req.params.id

    try {
        const deleted = await AuthorRepo.deleteById(authorId);
        if(deleted){
            res.status(204).json({
                code: 204,
                status: 'OK',
                message: `Author with id ${authorId} has been deleted`
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


// create author
router.post('/create', verifyToken, async (req, res)=>{

    try {
        const id = req.body.id
        const tempAuthor = await AuthorRepo.findById(id)

        if(!tempAuthor){
            let author = await AuthorRepo.create(req.body)
            if(author){
                res.status(201).json({
                    code: 201,
                    status: 'Author Created',
                    message: 'A new Author has been added to the database.',
                    data: author
                })
            }
        }else {
            res.status(409).json({
                code: 409,
                status: 'Conflict',
                message: `Unable to create an Author with the following ID: '${id}'. Please assign another ID value.`,
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


//update
router.put('/update/:id', verifyToken, async (req, res) =>{
    const authorId = req.params.id

    try {
        const author = await AuthorRepo.findById(authorId)

        if(author){
            const updateAuthor = await AuthorRepo.update(authorId, req.body)
            res.status(204).json({
                code: 204,
                status: 'Update',
                message: 'The author has been updated',
                data: updateAuthor
            })

        }else {
            res.status(404).json({
                code: 404,
                status: 'NOT FOUND',
                message: `Unable to update an Author. The author with Id: '${id}' does not exist..`,
                error: {
                    code: 'NOT FOUND',
                    message: `Unable to update an Author. The author with Id: '${id}' does not exist..`
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

module.exports = router;


