//Packages & Dependencies
const mysql = require('mysql2');
const inquirer = require('inquirer');
require('console.table');

//MySql connection file
const db = require('./db/connection');

//Inquirer main prompt questions
function mainPrompt() {
  inquirer
    .prompt([
      {
        type: 'list',
        name: 'MainMenu',
        message: 'What would you like to do?',
        choices: [
          'View All Departments',
          'View All Roles',
          'View All Employees',
          'Add Department',
          'Add Role',
          'Add Employee',
          'Update Employee Role',
          'Quit',
        ],
      },
    ])
    .then((res) => {
      switch (res.MainMenu) {
        case 'View All Departments':
          viewAllDepts();
          break;
        case 'View All Roles':
          viewAllRoles();
          break;
        case 'View All Employees':
          viewAllEmp();
          break;
        case 'Add Department':
          addDept();
          break;
        case 'Add role':
          addRole();
          break;
        case 'Add Employee':
          addEmp();
          break;
        case 'Update Employee Role':
          updateEmpRole();
          break;
        case 'Quit':
          exit();
        default:
          exit();
      }
    });
}

//'View All...' functions
function viewAllDepts() {
  const query = 'SELECT * FROM departments';
  db.query(query, (err, res) => {
    if (err) throw err;
    console.table(res);
    mainPrompt();
  });
}

function viewAllRoles() {
  const query = 'SELECT * FROM roles';
  db.query(query, (err, res) => {
    if (err) throw err;
    console.table(res);
    mainPrompt();
  });
}

function viewAllEmp() {
  const query = 'SELECT * FROM employees';
  db.query(query, (err, res) => {
    if (err) throw err;
    console.table(res);
    mainPrompt();
  });
}

//'Add...' functions
function addDept() {
  const query = 'INSERT INTO departments (dept_name) VALUES (?)';
  inquirer
    .prompt({
      type: 'input',
      message: 'Please give your new department a name',
      name: 'newDept',
    })
    .then((res) => {
      db.query(query, res.departments, (err, res) => {
        if (err) throw err;
        console.log(`Your new department has been added`);
        mainPrompt();
      });
    });
}

function addRole() {}

function addEmp() {}
mainPrompt();
