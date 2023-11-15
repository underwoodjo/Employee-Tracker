const express = require('express');
const mysql = require('mysql2');
const fs = require('fs');

const port = process.env.PORT || 3001
const app = express();
