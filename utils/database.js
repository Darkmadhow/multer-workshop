const { Pool } = require("pg");

const connectionString = process.env.PG_CONNECTIONSTRING;

const db = new Pool({
  connectionString,
});

module.exports = db;
