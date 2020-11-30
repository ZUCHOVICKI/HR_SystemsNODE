const mysql = require('mysql')
const util = require('util')

const pool = mysql.createPool({

    connectionLimit:10,
    host: 'CLEARDB_DATABASE_URL',
    user: 'b0ee6cf985588e',
    password: '460c8def',
    database: 'heroku_df4d2f3e87a3c2b'
})

pool.query = util.promisify(pool.query)


module.exports = pool