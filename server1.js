const inquirer = require("inquirer");
const express = require("express");
const db = require("mysql-promise")();
const cTable = require("console.table");

const PORT = process.env.PORT || 3001;

const app = express();
//boilerplate... connect to database
db.configure(
  {
    host: "localhost",
    user: "root",
    password: "Insert Password Here",
    database: "tracker_db",
  },
  console.log(`Connected to the tracker_db database.`)
);

//Starting quesion to be used in startapp() function
const questions = {
  main: [
    {
      type: "list",
      message: "What would you like to do?",
      choices: [
        "View all Employees",
        "Add Employee",
        "Update Employee Role",
        "View All Roles",
        "Add Role",
        "View All Departments",
        "Add Department",
        "Department Total Salary",
        "Quit",
      ],
      name: "mainChoice",
    },
  ],
  addDept: [
    {
      type: "input",
      message: "What is the name of the new department?",
      name: "newDept",
    },
  ],
};
//function that directs based on response
const startApp = () => {
  inquirer
    .prompt(questions.main)

    .then((answers) => {
      switch (answers.mainChoice) {
        case "View all Employees":
          viewALL();
          break;

        case "Add Employee":
          addEmployee();
          break;

        case "Update Employee Role":
          roleUpdate();
          break;

        case "View All Roles":
          viewRole();
          break;

        case "Add Role":
          addingRole();
          break;

        case "View All Departments":
          viewDepts();
          break;

        case "Add Department":
          addDepartment();
          break;
        case "Department Total Salary":
          salaryTotal();
          break;
        case "Quit":
          break;
      }
    });
};

startApp();
