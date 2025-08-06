
const express = require('express');
const { addProductPage } = require('./controllers/product.controller');
const connectDB = require('./configs/database');


const app = express();
const port = 1503;

app.set('view engine','ejs');
app.use(express.urlencoded({extended:true}));


app.use('/',require('./routers/product.router'))

app.listen(port,(err)=>{
    if(!err){
        connectDB();
        console.log("Server started..");
        console.log("http://localhost:"+port);
    }
})
