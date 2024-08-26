const pool = require("../db")

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
            console.log(result.rowCount)
            return result.rowCount > 0;
        } catch (error) {
            throw error
        }
    },

    create: async (name, age) =>{
        const sql = `INSERT INTO AUTHOR (name, age) VALUES ($1,$2) RETURNING *`;
        const pair = [name, age]

        try {
            const result = await pool.query(sql, pair)
            return result.rows[0]
        } catch (error) {
            throw error
        }
    }
    
}



module.exports = AuthorRepo