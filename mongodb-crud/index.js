const express=require('express');
const app=express();
const port=1000;

app.set('view engine','ejs');

app.get('/',(req,res)=>{
    return res.render('addBook');
})

app.listen(port,(err)=>{
    if(err){
        console.log(err.message);    
    }
    else{
        console.log("server started");
        console.log("http://localhost:" + port);
    }
})