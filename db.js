// const Pool = require("pg").Pool;
// require("dotenv").config(); //using ENV variables in .env

// const devConfig = `postgresql://${process.env.PG_USER}:${process.env.PG_PASSWORD}@${process.env.PG_HOST}:${process.env.PG_PORT}/${process.env.PG_DATABASE}`;

// const prodConfig = {
//     connectionString: process.env.DATABASE_URL
//     // ssl: {
//     //   rejectUnauthorized: false
//     // }
//   };

// const pool = new Pool({
//   connectionString:
//     process.env.NODE_ENV === "production" ? prodConfig : devConfig,
// });

// pool.connect();

// module.exports = pool;

// const { Client } = require('pg');
// require("dotenv").config(); //using ENV variables in .env

// const client = new Client({
//   connectionString: process.env.DATABASE_URL,
//   ssl: {
//     rejectUnauthorized: false
//   }
// });

// client.connect();

const { Client } = require('pg');
require("dotenv").config(); //using ENV variables in .env

let client;
const devConfig = `postgresql://${process.env.PG_USER}:${process.env.PG_PASSWORD}@${process.env.PG_HOST}:${process.env.PG_PORT}/${process.env.PG_DATABASE}`;
if (process.env.NODE_ENV === "production"){
    client = new Client({
  connectionString: process.env.DATABASE_URL,
  ssl: {
    rejectUnauthorized: false
  }
});
} else{
    client = devConfig;
}

module.exports = client;
