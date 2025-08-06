const express= require('express');
const db = require('./configs/database');
const productRouter = require("./routers/product.router");
const bodyParser = require('body-parser');
const app=express();
const port=1503;

app.set('view engine','ejs');
app.use(bodyParser.urlencoded({ extended: true }));


app.use("/", productRouter);

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