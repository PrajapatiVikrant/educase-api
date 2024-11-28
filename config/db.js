const {neon} = require('@neondatabase/serverless')
const {config} = require('dotenv')
config();
const sql = neon(DATABASE_URL);

module.exports = sql;