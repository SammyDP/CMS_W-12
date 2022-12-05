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
