const express = require('express');
const mongoose = require('mongoose');
const url = 'mongodb://localhost/userdesk';
const bodyParser= require('body-parser');
const multer = require('multer');
const cors = require('cors');
const app = express();
app.use(bodyParser.urlencoded({extended: true}));
app.use(cors({
    origin:true,
    methods:["GET","POST","DELETE","PUT"],
    credentials:true
}));

// app.use(express.static('public'));
app.use(express.static(__dirname + '/'));

mongoose.connect(url, {useNewUrlParser:true, useUnifiedTopology: true },)
const con = mongoose.connection

con.on('open', () =>{
    console.log('connected....')
})

app.use(express.json())

const userRouter = require('./routes/users')
app.use('/user', userRouter)

app.listen(8000, () =>{
    console.log('Hi Phani Server Started...')
})