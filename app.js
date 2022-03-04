const express = require('express');
const dotenv = require('dotenv');
const path = require('path');
const PORT = process.env.PORT | 5000;
const dbCon = require('./config/db.js')
dotenv.config({path: './env'})
dbCon();
const app = express();

app.listen(PORT, ()=>{
    console.log('app running @', PORT)
})