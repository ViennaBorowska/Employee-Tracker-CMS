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
        case 'Add Role':
          addRole();
          break;
        case 'Add Employee':
          addEmp();
          break;
        case 'Update Employee Role':
          updateEmpRole();
          break;
        case 'Quit':
          quit();
        default:
          quit();
      }
    });
}
//Questions for new role
const newRoleQs = [
  {
    type: 'input',
    name: 'title',
    message: 'Please enter the job title you would like to add:',
  },
  {
    type: 'input',
    name: 'salary',
    message: 'Please enter the salary for this role:',
  },
  {
    type: 'input',
    name: 'dept',
    message:
      'Please select a department for this role using the department ID:',
  },
];

//Questions for new employee
const newEmpQs = [
  {
    type: 'input',
    message: "What is the Employee's First Name? ",
    name: 'first',
  },
  {
    type: 'input',
    message: "What is the Employee's Last Name? ",
    name: 'last',
  },
  {
    type: 'number',
    message: "What is the Employee's Role ID? ",
    name: 'roleId',
  },
  {
    type: 'number',
    message: "What is the Employee's Manager's ID? ",
    name: 'managerId',
  },
];

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
  const query =
    'SELECT employees.id, employees.first_name, employees.last_name, roles.title, dept_name AS department, roles.salary, CONCAT(manager.first_name, " ", manager.last_name) AS manager from employees LEFT JOIN roles on employees.role_id = roles.id LEFT JOIN departments dept on roles.department_id = dept.id LEFT JOIN employees manager on manager.id = employees.manager_id';
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
      db.query(query, res.newDept, (err, res) => {
        if (err) throw err;
        console.log(`Your new department has been added`);
        mainPrompt();
      });
    });
}

function addRole() {
  inquirer.prompt(newRoleQs).then((res) => {
    const query =
      'INSERT INTO roles (title, salary, department_id) VALUES (?, ?, ?)';
    db.query(query, [res.title, res.salary, res.dept], (err, res) => {
      if (err) throw err;
      console.log(`Your new role has been added`);
      mainPrompt();
    });
  });
}

function addEmp() {
  inquirer.prompt(newEmpQs).then((res) => {
    const query =
      'INSERT INTO employees (first_name, last_name, role_id, manager_id) VALUES (?, ?, ?, ?)';
    db.query(
      query,
      [res.first, res.last, res.roleId, res.managerId],
      (err, res) => {
        if (err) throw err;
        console.table(`Your new employee has been added`);
        mainPrompt();
      }
    );
  });
}

//Function to update employee role
const updateEmpRole = () => {
  const query =
    "SELECT id, CONCAT(employees.first_name, ' ',employees.last_name) AS whole_name FROM employees;";
  db.query(query, (err, res) => {
    if (err) throw err;
    var empList = [];
    for (let i = 0; i < res.length; i++) {
      empList.push({ name: res[i].whole_name, value: res[i].id });
    }
    // Inside one query function we make another to make another list of Possible Roles to Update to
    db.query('SELECT id, title FROM roles;', (err, res) => {
      if (err) throw err;
      let roleList = [];
      for (let i = 0; i < res.length; i++) {
        roleList.push({ name: res[i].title, value: res[i].id });
      }
      // User is prompted with the list of employees and Roles
      inquirer
        .prompt([
          {
            type: 'list',
            message: "Which employee's role do you want to change?",
            name: 'chooseEmp',
            choices: empList,
          },
          {
            type: 'list',
            message: "What is the employee's new role?",
            name: 'roles',
            choices: roleList,
          },
        ])
        .then((res) => {
          // Setting up variables with the User's choices, Entering those variables into a MySQL query statement
          let query = 'UPDATE employees SET employees.role_id=';
          let query2 = ' WHERE employees.id=';
          let finalQuery = query + res.roles + query2 + res.chooseEmp;
          db.query(finalQuery, (err, response) => {
            if (err) throw err;
            console.log('Your employees role has been updated.');
            mainPrompt();
          });
        });
    });
  });
};
function quit() {
  process.exit();
}

mainPrompt();
