// Import node.js, mysql, fs
const express = require('express');
const mysql = require('mysql2');
const fs = require('fs');

// create port
const port = process.env.PORT || 3001
const app = express();

// Connect to mySQL database
const db = mysql.createConnection(
    {
      host: 'localhost',
      // MySQL username,
      user: 'root',
      // TODO: Add MySQL password here
      password: 'MySQLpassword',
      database: 'employeeTracker_db'
    },
    console.log(`Connected to the employeeTracker_db database.`)
  );
