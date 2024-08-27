const pool = require('../db/db')


let AdminRepo = {

    findAdmin: async (email) =>{
        const sql = 'SELECT * FROM admin WHERE email = $1 '
        const value = [email]

        try {
            const result = await pool.query(sql,value)
            console.log('')
            return result.rows[0]
        } catch (error) {
            throw error
        }
    },

    createAdmin: async (name, email, password) =>{
        const sql = 'INSERT INTO ADMIN (name, email, password) VALUES ($1, $2, $3) RETURNING *';
        const values = [name, email, password]

        try {
            const result = await pool.query(sql, values)
            return result.rows[0]
        } catch (error) {
            throw error
        }
    }
}


module.exports = AdminRepo