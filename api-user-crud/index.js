
const express = require('express');
const db = require('./configs/database');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const app = express()
const port = 3000;

app.use(bodyParser.urlencoded({extended:true}))
app.use('/api',require('./router/index'))
app.use(cookieParser());
app.use(bodyParser.json());



app.listen(port,(err)=>{
    db()
    if(!err){
        console.log("Server started...")
        console.log("http://localhost:"+port)
    }
})
