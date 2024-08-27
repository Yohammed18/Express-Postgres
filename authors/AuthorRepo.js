const pool = require("../db/db")

let AuthorRepo = {

    findAll: async () => {
        const sql = "SELECT * FROM AUTHOR";
        
        try {
            const result = await pool.query(sql);
            return result.rows;     
        } catch (err) {
            throw err;
        }
    }, 

    findById: async (id) => {
        const sql = `SELECT * FROM AUTHOR WHERE ID = $1`

        try {
            const result = await pool.query(sql, [id])
            return result.rows[0]
        } catch (err) {
            throw err;
        }
    },

    deleteById: async (id) => {
        const sql = `DELETE FROM AUTHOR WHERE ID = $1`

        try {
            const result = await pool.query(sql, [id])
            return result.rowCount > 0;
        } catch (error) {
            throw error
        }
    },

    create: async (author) =>{
        const sql = `INSERT INTO AUTHOR (id, name, age) VALUES ($1,$2, $3) RETURNING *`;
        const pair = [author.id, author.name, author.age]

        try {
            const result = await pool.query(sql, pair)
            return result.rows[0]
        } catch (error) {
            throw error
        }
    },

    update: async (id, authorUpdate) =>{
        const sql = 'UPDATE AUTHOR SET NAME = $1, AGE = $2 WHERE ID = $3 RETURNING *'
        const values = [authorUpdate.name, authorUpdate.age, id]

        try{
            const result = await pool.query(sql, values)
            return result.rows[0]

        }catch(err){
            throw err
        }
    }
}



module.exports = AuthorRepo