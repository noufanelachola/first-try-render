

// const { Pool } = require('pg');
// const itemsPool = new Pool({
//     connectionString: process.env.DBConfigLink,
//     ssl: {
//         rejectUnauthorized: false
//     }
// });
const knex = require('knex');
const db = knex({
    client: 'pg',
    connection: {
        connectionString: process.env.DBConfigLink,
        ssl: {
            rejectUnauthorized: false
        }
    }
});

module.exports = db;