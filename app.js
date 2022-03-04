const express = require('express');
const dotenv = require('dotenv');
const path = require('path');
const PORT = process.env.PORT | 5000;
const dbCon = require('./config/db.js')
dotenv.config({path: './env'})
dbCon();
const app = express();
app.use(express.json());

const routes = require('./routes/todos')
app.use('/api', routes);
app.use(express.urlencoded({extended: false}));
app.listen(PORT, ()=>{
    console.log('app running @', PORT)
})