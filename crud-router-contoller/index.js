const express=require('express');
const db = require('./configs/database');
const { addProductPage } = require('./controllers/product.controller');
const app=express();
const port=1503;

app.set('view engine','ejs');

app.use('/',addProductPage)

app.listen(port,(err)=>{
    
    if(err){
        db();
        console.log(err.message);
    }
    else{
        
        console.log("server started");
        console.log("http://localhost:"+port);  
    }
})