const mysql = require('mysql2');
const inquirer = require('inquirer');
const cTable = require('console.table');

function addDept(selection) {
  inquirer
    .prompt({
      type: 'input',
      message: 'Enter a name for your new Department',
      name: 'deptName',
    })
    .then((response) => {
      db.query(
        `INSERT INTO departments (dept_name) VALUES (${response.deptName})`,
        (err, result) => {
          if (err) {
            console.log(err);
          } else {
            db.query(`SELECT * FROM departments;`, (err, result) => {
              if (err) {
                console.log(err);
              }
              console.table(result);
              selection();
            });
          }
        }
      );
    });
}
addDept();
module.exports = addDept;
