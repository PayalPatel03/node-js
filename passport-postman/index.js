const express=require('express');
const db = require('./configs/database');
const app=express();
const port=8081;

app.use(express.json());
app.use('/',require('./routes'))

app.listen(port,(err)=>{
    if(!err){
        db();
        console.log("Server stared");
        console.log("http://localhost:"+port);
    }
})