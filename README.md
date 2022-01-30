# Employee Tracker

## Description

A CMS (Content Management System) CLI to veiw and manage a company's employees, roles and departments. The database can be build up manually, or there is a seeds.sql file in the project with dummy data to test the functionality of the application.

## LANGUAGE : JavaScript

## TOOLS : Node.js, MySQL

## REPOSITORY LINK

https://github.com/ViennaBorowska/Employee-Tracker-CMS

## FILES

- db > all database files: schema.sql for database and tables, seeds.sql for dummy data and connection.js for MySQL connection.
- index.js > all functional code here: inquirer prompts and respetive functions.
- package-lock.json - node modules tree visiblity
- package.json - node.js metadata
- README.md - project information

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [Contributing](#contributing)
- [Improvements](#improvements)
- [Questions](#questions)

## Installation

1. Clone the repo from GitHub.
2. Initialise Node packaged with 'npm init', then install required packages/dependencies with 'npm i'.
3. Run the command 'node index.js' in the terminal to start the MySQL server and the application.

### WARNING: MySQL Password credentials found in ./db/connection.js will need to be updated with your OWN unique password.

## Usage

- Run 'node index.js' from the terminal.
- The user is now presented with a menu of options; View all departments, roles and employees, Add a new department, role or employee, and to update an employee's role. There is also an option to exit on this menu.
- Once a selection is made, the user is presented with requested data, or guided through the steps to complete an update/addition.

### Please see the walkthrough video below to see how the application should be used.

## Contributing

Contributions and improvements are welcome. Please create a new branch and submit any changes for review. Do not push to the main branch.

## Improvements

I did not have time to include all the features I would have likes for this assignment, but when I get the time I would like to add the following improvements to the application;

- Validation statements for enquirer questions to catch invalid inputs
- The bonus features listed in the README e.g. delete functions for users, roles and departments, and more targeted views e.g. view employees by department.
- An ASCII logo (I saw this in another project and while not essential, I think this would be nice to include to improve the UI)

## Questions

If you have any questions about this project, please contact me directly at viennabdev@gmail.com. You can view more of my projects at https://github.com/ViennaBorowska.

This README was compiled using my own [README generator](https://github.com/ViennaBorowska/ReadMe-Generator)
