const { Pool } = require('pg')
const fs = require('fs')
const path = require('path')
const schemaPath = path.join(__dirname, '../db/schema.sql')
//check for new changes

// Pool Initialization: 
const pool = new Pool({
    host: 'localhost',
    database: 'postgres',
    user: 'postgres',
    password: 'Yohammed1@',
    port: 5432
})

// test connection
const testConnection = async ()=>{

    //connec to the database
    const client = await pool.connect();

    try {     
        //Read SQL file
        const sql = fs.readFileSync(schemaPath, 'utf8')
        //execute sql script
        await client.query(sql)
        console.log('Schema execute successfully')
    } catch (err) {
        console.error("Error connecting to the database: ",err.stack)
    } finally{
        // release client back to the pool
        client.release();
    }
}

// run test 
testConnection()


// export the pool to be used by other controllers to perform queries
module.exports = pool