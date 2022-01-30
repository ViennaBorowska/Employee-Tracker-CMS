const mysql = require('mysql2');

const db = mysql.createConnection(
  {
    host: 'localhost',
    user: 'root',
    password: 'Bootcamp2022!',
    database: 'company_db',
  },
  console.log('Connected to the company_db databse')
);

module.exports = db;
